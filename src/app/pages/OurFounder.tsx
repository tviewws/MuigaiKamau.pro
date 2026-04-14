import { Briefcase, Target, GraduationCap, TrendingUp, Award, Users, Star } from "lucide-react";
import founderImage from "figma:asset/db4c97b8071fc071791f2320051afd36c4649cba.png";
import Aurora from "../components/Aurora";
import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

// Animated counter — counts up when scrolled into view
function Counter({ end, duration = 2, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * end;
      setCount(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, decimals]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : count}</span>;
}

export function OurFounder() {
  const impactMetrics = [
    {
      prefix: "KES ",
      end: 8.2,
      decimals: 1,
      suffix: "Bn",
      label: "Cost Savings Delivered",
      sub: "across large-scale transformation programmes",
    },
    {
      prefix: "US$",
      end: 31,
      decimals: 0,
      suffix: "M+",
      label: "OPEX Reductions",
      sub: "achieved in a single year at Airtel / Zain Group",
    },
    {
      prefix: "",
      end: 95,
      decimals: 0,
      suffix: "%+",
      label: "SLA Compliance",
      sub: "improved from below 20% in client environments",
    },
    {
      prefix: "",
      end: 22,
      decimals: 0,
      suffix: "+",
      label: "Operating Companies",
      sub: "SOPs and risk frameworks deployed across",
    },
    {
      prefix: "",
      end: 6,
      decimals: 0,
      suffix: "+",
      label: "African Markets",
      sub: "Kenya, Nigeria, Tanzania, DRC, Rwanda & more",
    },
    {
      prefix: "US$",
      end: 7,
      decimals: 0,
      suffix: "M+",
      label: "Logistics Savings",
      sub: "from warehouse consolidation and infrastructure rollouts",
    },
  ];

  const careerHighlights = [
    {
      role: "Founder & Principal Consultant",
      org: "MK Consulting & Advisory",
      period: "2024 – Present",
      contribution:
        "Delivering business transformation clinics, ERP & digital roadmaps, M&A integration playbooks, governance/SOP frameworks, and operational turnaround programmes for mid- to large-sized organizations across Africa.",
    },
    {
      role: "Consultant, Operations & Business Transformation",
      org: "IFSS Group",
      period: "Jan – Sep 2025",
      contribution:
        "Orchestrated company-wide operational transformation supporting service diversification into smart building technologies; drove ERP implementation integrating operations, finance, and field services.",
    },
    {
      role: "Group Director, Administration",
      org: "Equity Group Holdings PLC",
      period: "2017 – 2024",
      contribution:
        "Delivered KES 8.2Bn in cost savings; led M&A integration of Equity BCDC (DRC) and Equity Rwanda; digitized procurement and facilities achieving 95% SLA performance; oversaw Group-wide rebrand and branch rollout.",
    },
    {
      role: "Head of Supply Chain",
      org: "Telkom Kenya",
      period: "2016 – 2017",
      contribution:
        "Raised vendor compliance to 80% within 6 months; cut operating costs by 11% (~US$200k) through logistics and warehousing streamlining.",
    },
    {
      role: "Supply Chain Director",
      org: "Helios Towers Tanzania",
      period: "2014 – 2016",
      contribution:
        "Built supply chain function from ground up; delivered US$6M+ in savings via warehouse consolidation, vendor renegotiation, and analytics-driven site logistics.",
    },
    {
      role: "Ag. Head of Procurement & Category Lead",
      org: "East African Breweries / Diageo",
      period: "2012 – 2014",
      contribution:
        "Unlocked £1.4M in annual savings through warehouse consolidation; established risk frameworks improving Africa-wide compliance and audit outcomes.",
    },
    {
      role: "Supply Chain Director",
      org: "Airtel / Zain Nigeria & Zain Group",
      period: "2006 – 2012",
      contribution:
        "Achieved US$31M in OPEX reduction in a single year; designed a Group-wide spend analytics platform adopted across 22 OpCos; rolled out SOPs raising governance maturity to >80%.",
    },
    {
      role: "Procurement Services Advisor",
      org: "Mobil Oil Kenya (ExxonMobil)",
      period: "2000 – 2006",
      contribution:
        "Delivered US$700k in OPEX savings; standardized procurement controls and led successful audits across East & Southern Africa.",
    },
  ];

  const expertise = [
    "Enterprise Transformation & Operational Excellence",
    "ERP & Digital Enablement Roadmaps",
    "Procurement & Supply Chain Leadership",
    "Strategy Execution & Change Management",
    "SOP / Governance Framework Development",
    "M&A Integration & Post-Acquisition Optimization",
    "C-Suite & Board-Level Advisory",
    "KPI Dashboard Design & Performance Management",
    "Real Estate, Infrastructure & Facilities Management",
    "Strategic Partnerships & Stakeholder Engagement",
  ];

  const boardRoles = [
    {
      role: "Founder & Principal Consultant",
      org: "MK Consulting & Advisory",
      period: "Feb 2024 – Present",
      scope:
        "Provides strategic advisory and enterprise transformation services to organizations across Africa, spanning operational excellence, ERP/digital strategy, governance frameworks, and M&A integration.",
    },
    {
      role: "Advisory Board Member",
      org: "FinityEdge",
      period: "Aug 2024 – Present | Beau Plan, Mauritius",
      scope:
        "Serves on the Advisory Board of FinityEdge, contributing expertise in business strategy and leadership to guide the company's growth and strategic direction.",
    },
    {
      role: "Member of the Management Board",
      org: "Mangu High School",
      period: "Jun 2022 – May 2025 | Thika, Kiambu",
      scope:
        "Served a three-year term contributing leadership and business strategy expertise to institutional governance and development.",
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Header with Aurora ── */}
      <div className="relative py-10 md:py-8 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Aurora
            colorStops={["#0F172A", "#D4AF37", "#0F172A"]}
            blend={0.4}
            amplitude={0.8}
            speed={0.5}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 inline-block shadow-2xl">
            <h1 className="text-white font-bold text-[36px] sm:text-5xl lg:text-6xl mb-3">Our Founder</h1>
            <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
          </div>
        </div>
      </div>

      {/* ── Founder Profile ── */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image */}
            <div className="w-full lg:w-2/5 shrink-0">
              <div className="bg-white/80 backdrop-blur-sm border border-[#0F172A]/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 sticky top-24">
                <div className="aspect-[3/4] bg-[#0F172A] rounded-xl overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Muigai Kamau - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-[#0F172A] text-[28px] font-bold mb-1">Muigai Kamau</h2>
                  <p className="text-[#D4AF37] font-bold text-[16px] uppercase tracking-wider">
                    Founder & Principal Consultant
                  </p>
                  <p className="text-[#4B5563] text-[14px] mt-1">MK Consulting & Advisory</p>
                </div>
              </div>
            </div>

            {/* Executive Profile */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#F9FAFB] to-white border border-[#0F172A]/10 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-[#0F172A] font-bold text-[32px] mb-6 pb-4 border-b-2 border-[#D4AF37]/30">
                  Executive Profile
                </h3>
                <p className="text-[#1F2937] text-[17px] leading-relaxed mb-5">
                  Muigai Kamau is a Civil Engineer by training and a highly accomplished Transformation & Operations
                  Leader with over <span className="text-[#D4AF37] font-bold">20 years</span> of senior and executive
                  experience across multinational organizations in Africa. He is a trusted advisor and execution partner
                  to boards and C-suites, known for his rare ability to bridge strategic intent with operational
                  delivery — translating complex transformation mandates into measurable, sustainable outcomes.
                </p>
                <p className="text-[#1F2937] text-[17px] leading-relaxed mb-5">
                  Throughout his career, Muigai has held Group-level and country-level executive roles spanning
                  financial services, fintech, telecommunications, FMCG, and oil & gas — operating across high-growth
                  markets including <span className="font-semibold text-[#0F172A]">Kenya, Nigeria, Tanzania, the DRC, and Rwanda</span>.
                  His work has consistently encompassed enterprise-wide restructuring, supply chain transformation, ERP
                  and digital enablement, governance and SOP standardization, and post-acquisition integration.
                </p>
                <p className="text-[#1F2937] text-[17px] leading-relaxed">
                  In 2024, Muigai founded <span className="font-bold text-[#0F172A]">MK Consulting & Advisory</span>, an
                  independent practice delivering enterprise transformation, operational excellence, and strategic
                  advisory services to organizations across Africa. He is currently engaged on a major enterprise
                  transformation and execution acceleration programme for a leading financial services group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Career Impact Metrics ── */}
      <div className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-[#0F172A] font-bold text-[32px]">Cumulative Career Impact</h3>
              <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full mt-2 shadow-md shadow-[#D4AF37]/50"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white border border-[#0F172A]/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
              >
                <p className="text-[#D4AF37] font-bold text-[28px] mb-1">
                  {metric.prefix}
                  <Counter end={metric.end} decimals={metric.decimals} duration={2} />
                  {metric.suffix}
                </p>
                <p className="text-[#0F172A] font-semibold text-[16px] mb-2">{metric.label}</p>
                <p className="text-[#6B7280] text-[13px] leading-snug">{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Core Expertise ── */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Title */}
            <div className="w-full lg:w-2/5">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-[32px]">Areas of Expertise</h3>
                </div>
                <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full shadow-md shadow-[#D4AF37]/50"></div>
                <p className="text-[#6B7280] text-[15px] mt-4 leading-relaxed">
                  A breadth of specialisms built over two decades of hands-on executive leadership across Africa.
                </p>
              </div>
            </div>

            {/* Expertise Tags */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#F9FAFB] to-white border border-[#0F172A]/10 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item, i) => (
                    <span
                      key={i}
                      className="bg-[#0F172A] text-white text-[13px] font-medium px-4 py-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-md hover:shadow-[#D4AF37]/20 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Career Highlights ── */}
      <div className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-[#0F172A] font-bold text-[32px]">Selected Career Highlights</h3>
              <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full mt-2 shadow-md shadow-[#D4AF37]/50"></div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#D4AF37]/30 ml-[7px] hidden lg:block"></div>

            <div className="space-y-6">
              {careerHighlights.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  {/* Dot */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-white shadow-md shadow-[#D4AF37]/40 shrink-0 mt-5 group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-[#0F172A]/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <p className="text-[#0F172A] font-bold text-[16px]">{item.role}</p>
                        <p className="text-[#D4AF37] font-semibold text-[14px]">{item.org}</p>
                      </div>
                      <span className="text-[#6B7280] text-[13px] font-medium bg-[#F3F4F6] px-3 py-1 rounded-full shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[#4B5563] text-[14px] leading-relaxed">{item.contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Board & Advisory Roles ── */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            {/* Title */}
            <div className="w-full lg:w-2/5">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-[32px]">Board & Advisory Roles</h3>
                </div>
                <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full shadow-md shadow-[#D4AF37]/50"></div>
                <p className="text-[#6B7280] text-[15px] mt-4 leading-relaxed">
                  Muigai is currently advising <span className="font-semibold text-[#0F172A]">CPF Financial Services Group</span> on
                  the CPF Enterprise Transformation and Execution Acceleration Programme.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="flex-1 space-y-5">
              {boardRoles.map((role, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#F9FAFB] to-white border border-[#0F172A]/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <p className="text-[#0F172A] font-bold text-[16px]">{role.role}</p>
                      <p className="text-[#D4AF37] font-semibold text-[14px]">{role.org}</p>
                    </div>
                    <span className="text-[#6B7280] text-[12px] font-medium bg-[#F3F4F6] px-3 py-1 rounded-full shrink-0">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-[#4B5563] text-[14px] leading-relaxed">{role.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Education & Certifications ── */}
      <div className="relative py-12 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Aurora
            colorStops={["#0F172A", "#D4AF37", "#0F172A"]}
            blend={0.3}
            amplitude={0.6}
            speed={0.4}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Title */}
            <div className="w-full lg:w-2/5">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white font-bold text-[32px]">Education & Credentials</h3>
                </div>
                <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-5">
              {[
                {
                  degree: "Executive MBA",
                  institution: "Strathmore Business School",
                  detail: null,
                },
                {
                  degree: "Certificate of Specialization in Strategy",
                  institution: "Harvard Business School Online",
                  detail: "Disruptive Strategy · Sustainable Business Strategy · Strategy Execution",
                },
                {
                  degree: "B.Sc. Civil Engineering",
                  institution: "Jomo Kenyatta University of Agriculture & Technology (JKUAT)",
                  detail: null,
                },
                {
                  degree: "Professional Memberships",
                  institution: "CIPS (Affiliate Member) · KISM (Associate Member)",
                  detail: null,
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500"
                >
                  <p className="text-[#D4AF37] font-bold text-[16px] mb-1">{edu.degree}</p>
                  <p className="text-white font-semibold text-[15px]">{edu.institution}</p>
                  {edu.detail && (
                    <p className="text-white/60 text-[13px] mt-2 leading-relaxed">{edu.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}