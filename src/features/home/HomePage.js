import { useCallback, useEffect, useState } from "react";
import About from "../about/About";
import Footer from "../contact/Footer";
import Fleet from "../fleet/Fleet";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import TopBar from "../header/TopBar";
import Hero from "../hero/Hero";
import PackageDetail from "../packages/PackageDetail";
import Packages from "../packages/Packages";
import Privacy from "../privacy/Privacy";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";
import { useLang } from "../../shared/i18n/language";
import Lightbox from "../../shared/ui/Lightbox";

function readPackageId() {
  const match = window.location.hash.match(/^#package\/([a-z0-9-]+)$/);
  return match ? match[1] : null;
}

export default function HomePage() {
  const { lang } = useLang();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewer, setViewer] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [packageId, setPackageId] = useState(readPackageId);

  useEffect(() => {
    const sync = () => setPackageId(readPackageId());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  useEffect(() => {
    if (packageId) window.scrollTo(0, 0);
  }, [packageId]);

  useEffect(() => {
    if (packageId) return undefined;
    if (!("IntersectionObserver" in window)) return undefined;
    const ids = ["home", "services", "about", "fleet", "packages", "gallery", "testimonials", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 }
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [lang, packageId]);

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

  const openPackage = useCallback((id) => {
    const next = `#package/${id}`;
    if (window.location.hash !== next) {
      window.history.pushState({ packageId: id }, "", next);
    }
    setMenuOpen(false);
    setPackageId(id);
    window.scrollTo(0, 0);
  }, []);

  const backToPackages = useCallback(() => {
    if (window.history.state?.packageId) {
      window.history.back();
      return;
    }
    window.history.replaceState({}, "", "#packages");
    setActive("packages");
    setPackageId(null);
    window.setTimeout(() => {
      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
    }, 40);
  }, []);

  const onSection = useCallback(
    (event, id) => {
      if (!packageId) return false;
      event.preventDefault();
      window.history.pushState({}, "", `#${id}`);
      setActive(id);
      setPackageId(null);
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 40);
      return true;
    },
    [packageId]
  );

  return (
    <div className={`page lang-${lang}`}>
      <a className="skip" href="#home" onClick={(event) => onSection(event, "home")}>
        Skip to content
      </a>
      <div className="site-header">
        <TopBar />
        <Header
          active={packageId ? "packages" : active}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onSection={onSection}
        />
      </div>
      <main>
        {packageId ? (
          <PackageDetail packageId={packageId} onBack={backToPackages} onOpen={openViewer} />
        ) : (
          <>
            <Hero />
            <Services />
            <About />
            <Fleet onOpen={openViewer} />
            <Packages onOpen={openPackage} />
            <Gallery onOpen={openViewer} />
            <Testimonials />
          </>
        )}
      </main>
      <Footer onPrivacy={() => setPrivacyOpen(true)} onSection={onSection} />
      <Lightbox viewer={viewer} onClose={closeViewer} onStep={stepViewer} />
      <Privacy open={privacyOpen} onClose={closePrivacy} />
    </div>
  );
}
