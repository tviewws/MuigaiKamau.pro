import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "figma:asset/LOGO.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about" },
  { label: "What We Offer", path: "/what-we-offer" },
  { label: "Our Perspectives", path: "/perspectives" },
  { label: "Our Founder", path: "/our-founder" },
  { label: "Contact Us", path: "/contact-us" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F172A] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Positioned at far top-left corner */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="MK Consulting Logo"
                className="h-24 w-24 object-contain"
                style={{ border: 'none', outline: 'none', background: 'transparent', mixBlendMode: 'lighten' }}
              />
              <div className="flex flex-col">
                {/* Top Line: Title Case & Large Font */}
                <span className="text-white font-bold text-lg tracking-tight leading-none mb-1">
                  Muigai Kamau Consulting
                </span>
                {/* Bottom Line: Standardized to text-lg and Title Case */}
                <span className="text-[#F59E0B] text-lg font-medium tracking-tight leading-none">
                  & Advisory
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Full navbar */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-[#D4AF37] transition-colors font-medium text-[15px] ${
                    isActive ? "text-[#D4AF37]" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0F172A] border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white hover:text-[#D4AF37] transition-colors font-medium text-lg block ${
                      isActive ? "text-[#D4AF37]" : ""
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}