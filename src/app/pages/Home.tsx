import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, Briefcase, TrendingUp, Network, Target, Award, Shield, Zap, Users } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import homeImage from "../../assets/HOME-PAGE2.png";
import { SEO, OrganizationSchema } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO
        title="Operational Excellence Consulting Africa | MK Consulting & Advisory"
        description="MK Consulting & Advisory delivers operational transformation, supply chain optimization, and M&A integration across African markets. Nairobi, Kenya."
        canonical="https://www.muigaikamau.pro"
      />
      <OrganizationSchema />
      <HeroSection />
      <OverviewSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#0A0F1A] overflow-hidden">
      <div className="relative w-full">
        <img
          src={homeImage}
          alt="Chess pieces representing strategic thinking"
          className="w-full block"
          // FIX: Changed fetchPriority to fetchpriority to satisfy React DOM property requirements
          fetchpriority="high"
          loading="eager"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            minHeight: "480px",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />

        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A0F1A 28%, rgba(10,15,26,0.55) 48%, rgba(10,15,26,0.0) 68%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #0A0F1A 0%, rgba(10,15,26,0.5) 12%, transparent 28%)" }} />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white font-bold text-[36px] sm:text-5xl lg:text-6xl leading-tight mb-6"
              >
                Turning Operational Complexity into{" "}
                <span className="text-[#F59E0B]">Competitive Advantage.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#F9FAFB] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mb-10 border-l-4 border-[#F59E0B] pl-6"
              >
                Strategy-led. Execution-focused. Africa-rooted consulting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact-us" className="bg-[#F59E0B] text-[#0F172A] px-8 py-4 rounded font-bold text-lg hover:bg-[#d97706] transition-colors flex items-center justify-center gap-2">
                  Book Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="/Profile.pdf" target="_blank" rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#0F172A] transition-colors flex items-center justify-center gap-2">
                  Company Profile
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [triggered, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function OverviewSection() {
  const highlights = [
    { icon: Briefcase, title: "20+ Years Experience", desc: "Senior operational leadership across East and West Africa", number: 20, suffix: "+", hasCounter: true },
    { icon: TrendingUp, title: "USD 50M+ Impact", desc: "Documented cost savings and margin improvements", number: 50, prefix: "USD ", suffix: "M+", hasCounter: true },
    { icon: Network, title: "Multi-Sector Expertise", desc: "Fortune 500 equivalents and emerging market leaders", hasCounter: false },
    { icon: Target, title: "Execution-Focused", desc: "We implement alongside your teams for lasting results", hasCounter: false },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[#0F172A] font-bold text-[32px] sm:text-4xl mb-4">Africa-Rooted. Global Standards.</h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#1F2937] text-lg">
            Muigai Kamau Consulting & Advisory is a premier management consulting firm committed to turning operational complexity into sustained competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -8 }} transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#F9FAFB] p-8 rounded border border-[#0F172A]/5 hover:border-[#F59E0B]/30 hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#F59E0B] mb-6 group-hover:bg-[#F59E0B] group-hover:text-[#0F172A] transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              {item.hasCounter ? (
                <h3 className="text-[#0F172A] font-semibold text-[20px] mb-3">
                  <Counter end={item.number!} suffix={item.suffix} prefix={item.prefix} />
                  {" "}{item.title.includes("Years") ? "Years Experience" : "Impact"}
                </h3>
              ) : (
                <h3 className="text-[#0F172A] font-semibold text-[20px] mb-3">{item.title}</h3>
              )}
              <p className="text-[#1F2937] text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <WhyTrustedSection />

        <div className="mt-16 text-center">
          <Link to="/about" className="inline-flex items-center gap-2 text-[#0F172A] font-bold text-lg hover:text-[#F59E0B] transition-colors">
            Learn More About Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyTrustedSection() {
  const trustReasons = [
    { icon: Award, title: "Clarity", desc: "We simplify complexity into actionable insights." },
    { icon: Shield, title: "Governance", desc: "We embed controls that outlast our engagement." },
    { icon: Target, title: "Evidence", desc: "Every recommendation is data-backed and measurable." },
    { icon: Zap, title: "Execution", desc: "We focus on implementation, not just recommendations." },
    { icon: Users, title: "Responsiveness", desc: "We adapt to client realities with agility." },
    { icon: TrendingUp, title: "Capability Transfer", desc: "We build internal capacity, not dependency." },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0F172A] rounded-2xl p-12 border border-[#F59E0B]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_50%)]"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-white font-bold text-[32px] mb-3">Why We Are Trusted</h3>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustReasons.map((reason, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02, y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group bg-gradient-to-br from-[#1F2937] to-[#0F172A] rounded-lg p-6 border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#F59E0B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <reason.icon className="w-7 h-7 text-[#0F172A]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[18px] mb-2 group-hover:text-[#F59E0B] transition-colors">{reason.title}</h4>
                  <p className="text-[#F9FAFB]/70 text-[14px] leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-white font-bold text-[32px] sm:text-4xl mb-6">Ready to Transform Your Operations?</h2>
        <p className="text-[#F9FAFB] text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Partner with us to unlock true value in your operations. We deliver measurable bottom-line impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact-us" className="bg-[#F59E0B] text-[#0F172A] px-8 py-4 rounded font-bold text-lg hover:bg-[#d97706] transition-colors inline-flex items-center justify-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/what-we-offer" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#0F172A] transition-colors inline-flex items-center justify-center">
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}