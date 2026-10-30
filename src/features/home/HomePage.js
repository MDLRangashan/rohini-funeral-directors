import { useCallback, useEffect, useState } from "react";
import About from "../about/About";
import Footer from "../contact/Footer";
import Fleet from "../fleet/Fleet";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import TopBar from "../header/TopBar";
import Hero from "../hero/Hero";
import Packages from "../packages/Packages";
import Privacy from "../privacy/Privacy";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";
import { useLang } from "../../shared/i18n/language";
import Lightbox from "../../shared/ui/Lightbox";

export default function HomePage() {
  const { lang } = useLang();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewer, setViewer] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
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
  }, [lang]);

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

  return (
    <div className={`page lang-${lang}`}>
      <a className="skip" href="#home">
        Skip to content
      </a>
      <div className="site-header">
        <TopBar />
        <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <main>
        <Hero />
        <Services />
        <About />
        <Fleet onOpen={openViewer} />
        <Packages />
        <Gallery onOpen={openViewer} />
        <Testimonials />
      </main>
      <Footer onPrivacy={() => setPrivacyOpen(true)} />
      <Lightbox viewer={viewer} onClose={closeViewer} onStep={stepViewer} />
      <Privacy open={privacyOpen} onClose={closePrivacy} />
    </div>
  );
}
