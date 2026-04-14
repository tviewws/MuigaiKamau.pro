import { Link } from "react-router";
import { CheckCircle2 } from "lucide-react";
import logoImage from "figma:asset/d096272e9f3407c122b6e3f0872a8afb83a3f38c.png";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t-4 border-[#D4AF37] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImage}
                alt="MK Consulting Logo"
                className="h-14 w-14 object-contain"
                style={{ border: 'none', outline: 'none' }}
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none mb-1">
                  MK CONSULTING
                </span>
                <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase leading-none">
                  & Advisory
                </span>
              </div>
            </div>
            <p className="text-[#F9FAFB]/70 text-[14px] leading-relaxed max-w-md mb-6">
              Turning operational complexity into competitive advantage. Strategy-led, execution-focused consulting
              rooted in Africa and operating to global standards.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Our Founder", path: "/our-founder" },
                { label: "What We Offer", path: "/what-we-offer" },
                { label: "Our Perspectives", path: "/perspectives" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#F9FAFB]/70 hover:text-[#D4AF37] transition-colors text-[14px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-[#F9FAFB]/70 text-[14px]">
              <li>Nairobi, Kenya</li>
              <li>info@mkconsulting.co.ke</li>
              <li>+254 (0) 700 000 000</li>
            </ul>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="bg-[#1F2937] rounded border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left mb-12">
          <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0" />
          <p className="text-white font-semibold text-[16px] tracking-wide">
            Service Commitment: <span className="text-[#D4AF37]">One-business-day response time is guaranteed.</span>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[#F9FAFB]/50 text-sm">
            © {new Date().getFullYear()} Muigai Kamau Consulting & Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#F9FAFB]/50 hover:text-[#D4AF37] transition-colors text-sm">
              LinkedIn
            </a>
            <span className="text-[#F9FAFB]/20">•</span>
            <a href="#" className="text-[#F9FAFB]/50 hover:text-[#D4AF37] transition-colors text-sm">
              Twitter
            </a>
            <span className="text-[#F9FAFB]/20">•</span>
            <a href="#" className="text-[#F9FAFB]/50 hover:text-[#D4AF37] transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
