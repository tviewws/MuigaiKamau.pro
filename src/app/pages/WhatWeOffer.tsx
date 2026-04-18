import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Network, RefreshCw, Search, Cpu, TrendingUp, Users, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import WWO3Image from "./WWO3.png";
import Aurora from "../components/Aurora";
import SupplyImage from "../../assets/SUPPLY.jpg";
import OperationalImage from "../../assets/OPERATIONAL.jpg";
import ExecutiveImage from "../../assets/EXECUTIVE.png";

const services = [
  {
    title: "Supply Chain Optimization",
    desc: "Streamlining end-to-end logistics, inventory management, and procurement for cost efficiency and resilience.",
    img: SupplyImage,
    icon: Network,
    dialog: {
      headline: "Transform fragmented supply chains into competitive advantages through end-to-end optimization across multi-country networks.",
      servicesLabel: "Services Include:",
      services: [
        "Network design & inventory optimization",
        "Sales & Operations Planning (S&OP) and service-level improvement",
        "Procurement transformation & supplier relationship management",
        "Transport, warehousing & distribution cost reduction",
        "Digital supply chain enablement",
      ],
      impact: "20–40% cost reduction | 99% inventory availability | 85%+ working capital improvement",
    },
  },
  {
    title: "Operational Efficiency & Performance",
    desc: "Identifying bottlenecks, eliminating waste, and instituting lean methodologies for maximum operational output.",
    img: OperationalImage,
    icon: RefreshCw,
    dialog: {
      headline: "Drive measurable productivity gains through process excellence and leadership alignment.",
      servicesLabel: "Services Include:",
      services: [
        "Process reengineering",
        "KPIs, SLAs, and performance governance frameworks",
        "Standard operating procedures development",
        "Capability-building & leadership alignment",
        "Continuous improvement culture",
      ],
      impact: "25–40% productivity lift | 40–60% cycle-time reduction | 95%+ SLA performance (from <20% baselines)",
    },
  },
  {
    title: "M&A Due Diligence & Integration",
    desc: "Thorough pre-deal operational assessments and seamless post-deal integration frameworks.",
    img: WWO3Image,
    icon: Search,
    dialog: {
      headline: "De-risk transactions, stabilize post-deal operations, and embed governance.",
      servicesLabel: "Services Include:",
      services: [
        "Operational due diligence (buy-side)",
        "100-day stabilization programs",
        "Day-1 readiness and integration planning",
        "Synergy identification, tracking & value capture",
        "Integration office & delivery management",
      ],
      impact: "80–120% synergy realization | 20–30% faster integrations | Operational stability within 100 days",
    },
  },
  {
    title: "Digital Transformation & Automation",
    desc: "Modernizing legacy systems and implementing automation to drastically improve data flow and decision speed.",
    img: "https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NzU1ODA4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Cpu,
    dialog: {
      headline: "Ensure successful technology adoption through rigorous governance and change management.",
      servicesLabel: "Services Include:",
      services: [
        "Digital strategy and roadmap development",
        "ERP selection, implementation oversight & stabilization",
        "Business process reengineering",
        "AI-enabled process automation",
        "Change management and user adoption programs",
        "Benefits tracking and realization",
      ],
      impact: "30–50% efficiency gains | 90%+ user adoption | On-time/on-budget delivery",
    },
  },
  {
    title: "Strategic Execution",
    desc: "Bridging the gap between high-level boardroom strategy and on-the-ground operational delivery.",
    img: "https://images.unsplash.com/photo-1763739532819-401f6a041b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwbGFubmluZ3xlbnwxfHx8fDE3NzU0ODQ3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: TrendingUp,
    dialog: {
      headline: "Bridge the strategy-execution gap with pragmatic program governance.",
      servicesLabel: "Services Include:",
      services: [
        "Strategy translation into operational initiatives",
        "PMO leadership and program governance",
        "Implementation roadmap development",
        "Risk & dependency management",
        "Benefits realization and executive reporting",
      ],
      impact: "On-time/on-budget delivery | 80–120% benefits realization",
    },
  },
  {
    title: "Executive & Board Advisory",
    desc: "Counsel to C-suite and boards on risk mitigation, structural governance, and high-stakes operational shifts.",
    img: ExecutiveImage,
    icon: Users,
    dialog: {
      headline: "Strategic counsel for leadership teams navigating complex operational challenges.",
      servicesLabel: "Services Include:",
      services: [
        "Operational risk and performance advisory",
        "Growth strategy operational readiness assessment",
        "M&A transaction advisory",
        "Digital transformation governance",
        "Board effectiveness and governance design",
        "Succession planning & leadership support",
      ],
      impact: "30–50% faster and higher-quality executive decisions | 20–40% fewer governance gaps and escalations | 2× higher transformation success rates | Stronger leadership capability | Reduced operational and strategic risk exposure",
    },
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group bg-white rounded border border-[#0F172A]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="aspect-video w-full relative overflow-hidden bg-[#0F172A]">
        <ImageWithFallback
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#0F172A]/80 backdrop-blur rounded flex items-center justify-center text-[#D4AF37]">
          <service.icon className="w-5 h-5" />
        </div>
      </div>

      {/* Static card content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-[#0F172A] font-semibold text-[20px] mb-4 line-clamp-2 leading-tight">
          {service.title}
        </h3>
        <p className="text-[#1F2937] text-[14px] leading-relaxed mb-8 flex-1">{service.desc}</p>

        {/* Learn More toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 font-bold text-[14px] uppercase tracking-wider transition-colors mt-auto"
          style={{ color: open ? "#D4AF37" : "#0F172A" }}
          aria-expanded={open}
        >
          {open ? "Close" : "Learn More"}
          <ChevronDown
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        {/* ── Inline expanding dropdown ── */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: open ? "1fr" : "0fr",
            transition: "grid-template-rows 0.38s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                marginTop: "16px",
                borderRadius: "8px",
                background: "rgba(15, 23, 42, 0.88)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(212, 175, 55, 0.28)",
                boxShadow: "0 6px 28px rgba(15,23,42,0.22)",
                padding: "18px 18px 14px",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "12.5px",
                  lineHeight: "1.65",
                  fontStyle: "italic",
                  borderLeft: "3px solid #D4AF37",
                  paddingLeft: "10px",
                  marginBottom: "14px",
                }}
              >
                {service.dialog.headline}
              </p>

              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "10.5px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {service.dialog.servicesLabel}
              </p>

              <ul style={{ marginBottom: "14px", paddingLeft: 0, listStyle: "none" }}>
                {service.dialog.services.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "12.5px",
                      lineHeight: "1.6",
                      marginBottom: "5px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#D4AF37",
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  background: "rgba(212,175,55,0.10)",
                  border: "1px solid rgba(212,175,55,0.22)",
                  borderRadius: "6px",
                  padding: "10px 12px",
                }}
              >
                <p
                  style={{
                    color: "#D4AF37",
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  Typical Impact
                </p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", lineHeight: "1.6" }}>
                  {service.dialog.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatWeOffer() {
  return (
    <div className="bg-white">
      {/* ── Hero Header with Aurora ── */}
      <div className="relative bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Aurora
            colorStops={["#0F172A", "#D4AF37", "#0F172A"]}
            blend={0.4}
            amplitude={0.8}
            speed={0.5}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex items-center">
          <div
            className="inline-block px-10 py-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            }}
          >
            <h1 className="text-white font-bold text-[32px] sm:text-5xl mb-3">What We Offer</h1>
            <div className="w-20 h-[3px] bg-[#D4AF37]" />
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* ── Why Choose Us with Aurora ── */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0 bg-[#0F172A]">
            <Aurora
              colorStops={["#0F172A", "#D4AF37", "#0F172A"]}
              blend={0.3}
              amplitude={0.6}
              speed={0.4}
            />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-white font-bold text-[32px] mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Outcomes First",
                  desc: "We measure our success by your success. Our frameworks have generated USD 50M+ in documented cost savings and margin improvements.",
                },
                {
                  title: "Senior-Level Execution",
                  desc: "No junior associates learning on your time. Every project is led and executed by seasoned industry veterans.",
                },
                {
                  title: "African Context Expertise",
                  desc: "Deeply rooted networks and operational understanding across key African markets including Kenya, Nigeria, Tanzania, and the DRC.",
                },
                {
                  title: "Hands-On Approach",
                  desc: "We don't just deliver slide decks. We stand shoulder-to-shoulder with your teams on the factory floor and in the boardroom.",
                },
              ].map((point, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-white font-semibold text-[20px] mb-3">{point.title}</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center bg-[#F59E0B] text-[#0F172A] px-8 py-4 rounded font-bold text-lg hover:bg-[#d97706] transition-colors gap-2"
              >
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}