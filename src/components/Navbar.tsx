import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "../data";
import { IMAGES } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/85 backdrop-blur-md border-b border-clay/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Mark and Title Block */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#top");
            }}
            className="flex items-center gap-2 sm:gap-3.5 group"
          >
            {/* <svg className="w-7 h-7 sm:w-8.5 sm:h-8.5 flex-none" viewBox="0 0 48 48" fill="none">
              <rect x="3" y="3" width="42" height="42" rx="9" stroke="var(--color-clay)" strokeWidth="2"/>
              <path d="M26 11 L15 26 H23 L21 37 L33 20 H25 Z" fill="var(--color-red)"/>
            </svg> */}
            <div className="w-8 h-8 border-2 border-(--color-clay) rounded-lg">
              <img
                src={IMAGES.apsLogo}
                alt="Header APS Logo"
                className="w-5 h-5 sm:w-7 sm:h-7 flex-none p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block font-sans font-extrabold text-xs sm:text-sm tracking-wider text-cream leading-none">
                PRIYANSHI
              </span>
              <span className="block font-mono text-[6.5px] sm:text-[8px] tracking-[0.16em] sm:tracking-[0.24em] text-clay uppercase font-semibold mt-0.5 sm:mt-1">
                ENGINEERING & SERVICES
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-sans text-xs font-semibold tracking-wider text-cream/70 hover:text-cream px-3.5 py-2 rounded-lg transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-3.5 right-3.5 bottom-1.5 h-[1.5px] bg-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Quick Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="px-5 py-2.5 rounded-xl font-sans text-xs font-bold tracking-wider text-navy bg-clay hover:bg-cream hover:scale-[1.02] transition-all duration-300"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-cream hover:text-clay transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-45 bg-navy flex flex-col pt-24 pb-8 px-10 gap-2 overflow-y-auto"
          >
            <div className="my-auto flex flex-col gap-2">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-sans text-3xl font-extrabold text-cream py-3 border-b border-cream/10 flex items-center gap-4 hover:text-clay transition-colors"
                >
                  <span className="font-mono text-xs text-red font-medium">
                    0{idx + 1}
                  </span>
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="mt-6 py-4 px-6 rounded-xl text-center font-sans text-sm font-bold bg-clay text-navy hover:bg-cream transition-colors block"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
