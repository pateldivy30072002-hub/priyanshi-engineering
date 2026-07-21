import {
  ChevronUp,
  ChevronRight,
  Mail,
  MapPin,
  User,
  FileText,
} from "lucide-react";
import { IMAGES } from "../constants";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative bg-navy text-cream pt-16 pb-12 overflow-hidden border-t-4 border-red">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* <svg className="w-8 h-8 flex-none" viewBox="0 0 48 48" fill="none">
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
                <span className="block font-sans font-extrabold text-sm tracking-wider text-cream leading-none">
                  PRIYANSHI
                </span>
                <span className="block font-mono text-[8px] tracking-[0.24em] text-clay uppercase font-semibold mt-1">
                  ENGINEERING &amp; SERVICES
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-sans font-bold text-base sm:text-lg text-clay leading-snug">
                Empowering India's Power Sector with Excellence
              </h3>
              <p className="font-sans text-xs text-cream/70 font-light leading-relaxed max-w-sm">
                Leading electrical engineering product sourcing, consulting
                &amp; services provider. Dedicated operations since 2023.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-5">
            <div className="relative">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-cream">
                Quick Links
              </h4>
              <div className="w-10 h-0.5 bg-red mt-2" />
            </div>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#header" },
                { name: "About Us", href: "#about" },
                { name: "Our Products", href: "#portfolio" },
                { name: "Services", href: "#services" },
                { name: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="group inline-flex items-center gap-2 font-sans text-xs text-cream/75 hover:text-cream transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Info (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <div className="relative">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-cream">
                Corporate Details
              </h4>
              <div className="w-10 h-0.5 bg-red mt-2" />
            </div>
            <div className="space-y-4 text-xs font-light text-cream/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red shrink-0 mt-0.5" />
                <span>Bhubaneswar &amp; Jajpur Road, Odisha, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red shrink-0" />
                <a
                  href="mailto:priyanshiengineering2020@gmail.com"
                  className="hover:text-cream transition-colors"
                >
                  priyanshiengineering2020@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-red shrink-0" />
                <span>Proprietor: Snehamayee Das</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-red shrink-0" />
                <span>GSTIN: 21AZAPD4967A1Z1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-cream/50 uppercase tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-clay font-semibold">
              Priyanshi Engineering &amp; Services
            </span>
            . All Rights Reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl border border-cream/15 bg-white/5 text-cream/70 hover:border-red hover:text-red hover:bg-white/10 transition-all cursor-pointer shadow-sm flex items-center justify-center shrink-0"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
