import backgroundImage from "figma:asset/9c68f740e147cb00716b257202afa9d4b0e280bb.png";
import heroImage from "figma:asset/93c9acae6e5f149af6b71b4457b53d5eeb3f258f.png";

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section - FIXED: Height defined and object-cover enforced */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-[#0F172A]">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={heroImage}
            alt="Team Collaboration"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/90"></div>
        </div>

        {/* Title Content with Glass Effect */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 inline-block shadow-2xl">
            <h1 className="text-white font-bold text-[36px] sm:text-5xl lg:text-6xl mb-3">About Us</h1>
            <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
          </div>
        </div>
      </div>

      {/* Section 1: Who We Are */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F9FAFB] to-white opacity-60"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="bg-white/60 backdrop-blur-sm border border-[#0F172A]/10 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-[#0F172A] font-bold text-[32px] md:text-[40px] mb-8 pb-4 border-b-2 border-[#D4AF37]/30">
              Who We Are
            </h2>
            <div className="space-y-6">
              <p className="text-[#1F2937] text-[17px] leading-relaxed">
                Muigai Kamau Consulting & Advisory (MK Co.) is a strategy-led, execution-focused management consulting
                firm specializing in operational transformation, supply chain optimization, performance improvement, ERP
                and digital delivery governance, and post-M&A integration across Africa's fastest-growing markets.
              </p>
              <p className="text-[#1F2937] text-[17px] leading-relaxed">
                Founded by Muigai Kamau - a civil engineer with 20+ years of senior executive and board-level leadership
                across FMCG, financial services, telecommunications, oil & gas, and infrastructure - MK Co. converts
                operational complexity into predictable, measurable, and sustained performance gains.
              </p>
              <p className="text-[#1F2937] text-[17px] leading-relaxed">
                We deliver clarity, discipline, and durable results through rapid diagnosis, evidence-backed planning, and
                hands-on execution. Our work is appointment-based, scope-driven, and built on pragmatic governance and
                measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Vision, Mission, Purpose */}
      <div className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1a2332] to-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold text-[40px] md:text-[48px] mb-4">
              Vision, Mission & Purpose
            </h2>
            <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Vision */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
                </div>
                <h3 className="text-[#D4AF37] font-bold text-[24px] mb-4">Vision</h3>
              </div>
              <p className="text-white/90 text-[16px] leading-relaxed">
                To be Africa's premier global consultancy—and a trusted global partner—transforming businesses into
                agile, resilient, and high-performing organizations through innovative supply chain, operations, and
                business transformation solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
                </div>
                <h3 className="text-[#D4AF37] font-bold text-[24px] mb-4">Mission</h3>
              </div>
              <p className="text-white/90 text-[16px] leading-relaxed">
                To empower businesses through innovative, expert-driven solutions that unlock value, boost efficiency,
                and deliver measurable transformation across supply chains, operations, and enterprise functions.
              </p>
            </div>

            {/* Purpose */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
                </div>
                <h3 className="text-[#D4AF37] font-bold text-[24px] mb-4">Purpose</h3>
              </div>
              <p className="text-white/90 text-[16px] leading-relaxed">
                To turn operational complexity into durable competitive advantage across Africa by pairing rigorous
                diagnosis with hands-on execution that delivers measurable outcomes and builds long-term organizational
                capability.
              </p>
            </div>
          </div>

          {/* Core Differentiator */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-lg border border-[#D4AF37]/30 rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-3 h-3 bg-[#D4AF37] rounded-full mt-2 shadow-lg shadow-[#D4AF37]/50"></div>
              <div>
                <h3 className="text-[#D4AF37] font-bold text-[20px] mb-3">Core Differentiator</h3>
                <p className="text-white text-[17px] leading-relaxed">
                  <span className="font-semibold">Diagnosis + Execution + Durability</span>—ensuring your transformation
                  outlasts our engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Guiding Principles */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] font-bold text-[40px] md:text-[48px] mb-4">
              Guiding Principles
            </h2>
            <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full shadow-lg shadow-[#D4AF37]/50 mb-6"></div>
            <p className="text-[#1F2937] text-[17px] leading-relaxed max-w-4xl mx-auto">
              These principles are the backbone of our execution discipline—driving clarity, precision, and results that
              endure long after the engagement ends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Clarity First",
                description: "Defining measurable outcomes, risks, and decision frameworks before recommending solutions. Every engagement is scoped with precision."
              },
              {
                title: "Evidence-Driven Decisions",
                description: "Diagnosis and recommendations are rooted in data, KPIs, and operational reality, not assumptions."
              },
              {
                title: "Hands-On Execution",
                description: "We stay involved until benefits are realized, stabilized, and transferred. Delivery matters as much as the plan."
              },
              {
                title: "Practicality Over Theory",
                description: "Solutions must work in real operational contexts - cross borders, teams, and systems."
              },
              {
                title: "Transparent Governance",
                description: "Using RACI frameworks, steering committees, weekly rhythms, and KPI dashboards to ensure change is controlled, predictable, and measurable."
              },
              {
                title: "Timeliness & Responsiveness",
                description: "One-business-day response SLA. All consultations are appointment-based."
              },
              {
                title: "Capability Transfer",
                description: "Developing internal leadership and teams so improvements last beyond the engagement."
              }
            ].map((principle, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm border border-[#0F172A]/10 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-[#D4AF37]/5 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#D4AF37] rounded-full mt-2 shadow-md shadow-[#D4AF37]/50 group-hover:scale-150 transition-transform duration-500"></div>
                  <div>
                    <h3 className="text-[#0F172A] font-bold text-[20px] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-[#1F2937] text-[15px] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Africa-Rooted Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-[#0F172A] text-[32px] md:text-[36px] font-bold mb-6">
                To be Africa's premier global consultancy.
              </h2>
              <p className="text-[#1F2937] text-[16px] leading-relaxed mb-8">
                Our vision is to build an institution that outlasts us, standardizing operational excellence across the
                African continent and providing indigenous expertise that competes on the global stage.
              </p>
              <ul className="space-y-4">
                {[
                  "Excellence in every deliverable.",
                  "Uncompromising integrity.",
                  "Deep commitment to client outcomes.",
                  "Nurturing local talent for global impact.",
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-md shadow-[#D4AF37]/50 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-[#1F2937] text-[16px] group-hover:text-[#0F172A] transition-colors duration-300">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-[#0F172A] rounded-2xl overflow-hidden relative shadow-2xl hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 w-full h-full z-0">
                  <img
                    src={backgroundImage}
                    alt="Professional Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/75 via-[#0F172A]/70 to-[#0F172A]/80"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-2xl">
                    <h2 className="text-[#D4AF37] text-3xl lg:text-4xl xl:text-5xl font-bold text-center leading-tight">
                      Africa-Rooted. <br />
                      <span className="text-white">Global Standards.</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1a2332] to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold text-[40px] md:text-[48px] mb-4">How We Work</h2>
            <div className="w-32 h-1.5 bg-[#D4AF37] mx-auto rounded-full shadow-lg shadow-[#D4AF37]/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Rapid Diagnosis",
                duration: "2-4 Weeks",
                desc: "Comprehensive assessment of operational state. We identify critical KPIs, operational bottlenecks, and hidden enterprise risks.",
              },
              {
                num: "02",
                title: "Scoped Delivery",
                duration: "Execution Phase",
                desc: "We co-create detailed roadmaps with your team and execute with precision. No bloat. Just targeted implementation.",
              },
              {
                num: "03",
                title: "Stabilize & Transfer",
                duration: "Sustainability Phase",
                desc: "We ensure capability uplift within your organization. We embed standardized processes and hand over a stabilized engine.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:bg-white/15 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <div className="text-[#D4AF37] font-bold text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                  {step.num}
                </div>
                <h3 className="text-white font-bold text-[22px] mb-3">{step.title}</h3>
                <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 shadow-lg group-hover:bg-[#D4AF37]/30 transition-all duration-300">
                  {step.duration}
                </div>
                <p className="text-white/90 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}