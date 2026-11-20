import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import About from "../about/About";
import Footer from "../contact/Footer";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import PackageDetail from "../packages/PackageDetail";
import Packages from "../packages/Packages";
import Privacy from "../privacy/Privacy";
import Services from "../services/Services";
import Story from "../story/Story";
import { useLang } from "../../shared/i18n/language";
import Lightbox from "../../shared/ui/Lightbox";

function readRoute() {
  const hash = window.location.hash;
  const match = hash.match(/^#package\/([a-z0-9-]+)$/);
  if (match) return { view: "package", packageId: match[1] };
  if (hash === "#about") return { view: "about", packageId: null };
  return { view: "home", packageId: null };
}

function scrollTargets() {
  const page = document.querySelector(".page");
  return [document.scrollingElement, document.documentElement, document.body, page].filter(
    (node, index, list) => node && list.indexOf(node) === index
  );
}

function readScrollTop() {
  return scrollTargets().reduce((max, node) => Math.max(max, node.scrollTop || 0), window.scrollY || 0);
}

function writeScrollTop(y) {
  const root = document.scrollingElement || document.documentElement;
  window.scrollTo(0, y);
  root.scrollTop = y;
  const page = document.querySelector(".page");
  if (page && page !== root && page.scrollHeight > page.clientHeight + 1) {
    page.scrollTop = y;
  }
}

export default function HomePage() {
  const { lang, t } = useLang();
  const initial = readRoute();
  const [view, setView] = useState(initial.view);
  const [active, setActive] = useState(initial.view === "about" ? "about" : "home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewer, setViewer] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [packageId, setPackageId] = useState(initial.packageId);

  useEffect(() => {
    const sync = () => {
      const route = readRoute();
      setView(route.view);
      setPackageId(route.packageId);
      if (route.view === "about") setActive("about");
      if (route.view === "package") setActive("packages");
    };
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  useEffect(() => {
    if (!packageId) return undefined;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    const previousAnchor = root.style.overflowAnchor;
    root.style.scrollBehavior = "auto";
    root.style.overflowAnchor = "none";

    let frame = 0;
    let cancelled = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const restore = () => {
      root.style.scrollBehavior = previousBehavior;
      root.style.overflowAnchor = previousAnchor;
    };

    const animateFrom = (from) => {
      if (cancelled) return;
      if (reduceMotion || from <= 1) {
        writeScrollTop(0);
        restore();
        return;
      }

      const started = performance.now();
      const duration = Math.min(800, Math.max(480, from * 0.22));
      const tick = (now) => {
        if (cancelled) return;
        const current = readScrollTop();
        const progress = Math.min(1, (now - started) / duration);
        const eased = 1 - (1 - progress) ** 3;
        const target = Math.round(from * (1 - eased));
        writeScrollTop(Math.min(current, target));
        if (progress < 1 && readScrollTop() > 1) {
          frame = requestAnimationFrame(tick);
          return;
        }
        writeScrollTop(0);
        restore();
      };
      frame = requestAnimationFrame(tick);
    };

    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(() => animateFrom(readScrollTop()));
    }, 40);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      restore();
    };
  }, [packageId]);

  useLayoutEffect(() => {
    if (view === "about") writeScrollTop(0);
  }, [view]);

  useEffect(() => {
    if (view !== "home") return undefined;
    const id = window.location.hash.replace("#", "");
    if (!id || id === "home" || id.startsWith("package/")) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [view]);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const page = header?.closest(".page");
    if (!header || !page) return undefined;
    const sync = () => {
      page.style.setProperty("--header", `${header.offsetHeight}px`);
    };
    sync();
    if (!("ResizeObserver" in window)) return undefined;
    const observer = new ResizeObserver(sync);
    observer.observe(header);
    return () => observer.disconnect();
  }, [lang, view, packageId]);

  useEffect(() => {
    if (view !== "home") return undefined;
    if (!("IntersectionObserver" in window)) return undefined;
    const ids = ["home", "services", "packages", "gallery", "testimonials", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: [0.01, 0.25, 0.6] }
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [lang, view]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openViewer = useCallback((items, index) => {
    setViewer({ items, index });
  }, []);

  const closeViewer = useCallback(() => setViewer(null), []);
  const stepViewer = useCallback((direction) => {
    setViewer((current) => {
      if (!current) return current;
      const count = current.items.length;
      return { ...current, index: (current.index + direction + count) % count };
    });
  }, []);
  const closePrivacy = useCallback(() => setPrivacyOpen(false), []);
  const closeTerms = useCallback(() => setTermsOpen(false), []);

  const backToPackages = useCallback(() => {
    if (window.history.state?.packageId) {
      window.history.back();
      return;
    }
    window.history.replaceState({}, "", "#packages");
    setActive("packages");
    setView("home");
    setPackageId(null);
    window.setTimeout(() => {
      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
    }, 40);
  }, []);

  const onSection = useCallback(
    (event, id) => {
      setMenuOpen(false);
      setActive(id);
      if (id === "about") {
        event.preventDefault();
        if (window.location.hash !== "#about") {
          window.history.pushState({ view: "about" }, "", "#about");
        }
        setView("about");
        setPackageId(null);
        setActive("about");
        return true;
      }
      if (view !== "home" || packageId) {
        event.preventDefault();
        window.history.pushState({}, "", `#${id}`);
        setView("home");
        setPackageId(null);
        setActive(id);
        window.setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 40);
        return true;
      }
      return false;
    },
    [view, packageId]
  );

  const headerActive = view === "about" ? "about" : packageId ? "packages" : active;

  return (
    <div className={`page lang-${lang}`}>
      <a className="skip" href="#home" onClick={(event) => onSection(event, "home")}>
        Skip to content
      </a>
      <div className="site-header">
        <Header active={headerActive} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onSection={onSection} />
      </div>
      <main>
        {packageId ? (
          <PackageDetail packageId={packageId} onBack={backToPackages} onOpen={openViewer} />
        ) : view === "about" ? (
          <Story onSection={onSection} />
        ) : (
          <>
            <Hero />
            <About onAbout={(event) => onSection(event, "about")} />
            <Services onOpen={openViewer} />
            <Packages />
            <Gallery onOpen={openViewer} />
          </>
        )}
      </main>
      <Footer
        edge={view === "home" && !packageId ? "dark" : "cream"}
        onPrivacy={() => setPrivacyOpen(true)}
        onTerms={() => setTermsOpen(true)}
        onSection={onSection}
      />
      <Lightbox viewer={viewer} onClose={closeViewer} onStep={stepViewer} />
      <Privacy open={privacyOpen} onClose={closePrivacy} />
      <Privacy open={termsOpen} onClose={closeTerms} title={t.termsTitle} body={t.termsBody} />
    </div>
  );
}
