import { Link } from "react-router";
import { CheckCircle2, MessageCircle, Linkedin } from "lucide-react";
import logoImage from "./LOGO.png";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t-4 border-[#F59E0B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImage}
                alt="MK Consulting Logo"
                className="h-24 w-24 object-contain"
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  mixBlendMode: 'lighten',
                }}
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none mb-1">
                  Muigai Kamau Consulting
                </span>
                <span className="text-[#F59E0B] text-xl font-medium tracking-tight leading-none">
                  & Advisory
                </span>
              </div>
            </div>
            <p className="text-[#F9FAFB]/70 text-[14px] leading-relaxed max-w-md">
              Turning operational complexity into competitive advantage. Strategy-led, execution-focused consulting
              rooted in Africa and operating to global standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Who We Are", path: "/about" },
                { label: "What We Offer", path: "/what-we-offer" },
                { label: "Our Perspectives", path: "/perspectives" },
                { label: "Our Founder", path: "/our-founder" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#F9FAFB]/70 hover:text-[#F59E0B] transition-colors text-[14px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — with WhatsApp & LinkedIn */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-[#F9FAFB]/70 text-[14px] mb-6">
              <li>Nairobi, Kenya</li>
              <li>mk@muigaikamau.pro</li>
              <li>+254 757 808 808</li>
            </ul>

            {/* Social buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/254757808808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded font-semibold text-[13px] hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/muigai-kamau"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded font-semibold text-[13px] hover:bg-[#F59E0B] hover:text-[#0F172A] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Follow Muigai Kamau
              </a>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="bg-[#0F172A] rounded border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left mb-12">
          <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
          <p className="text-white font-semibold text-[16px] tracking-wide">
            Service Commitment: <span className="text-[#F59E0B]">One-business-day response time is guaranteed.</span>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[#F9FAFB]/50 text-sm">
            © {new Date().getFullYear()} Muigai Kamau Consulting & Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/muigai-kamau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F9FAFB]/50 hover:text-[#F59E0B] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <span className="text-[#F9FAFB]/20">•</span>
            <a href="#" className="text-[#F9FAFB]/50 hover:text-[#F59E0B] transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}