import { Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Aurora from "../components/Aurora";
import Perspective1 from "../../assets/Perspective1.png";
import Perspective2 from "../../assets/Perspective2.png";
import Perspective3 from "../../assets/Perspective3.png";

const articles = [
  {
    number: "01",
    category: "Operational Transformation",
    date: "April 2026",
    readTime: "8 min read",
    image: Perspective1,
    imageAlt: "Operations team reviewing performance metrics on screens",
    title: "Why Most Operational Transformation Programs Fail in Africa — And What Actually Works",
    intro:
      "Across Africa, organizations are investing heavily in operational transformation. ERP systems are implemented, consultants are hired, strategy decks are produced, and ambitious targets are announced. Yet, despite these efforts, many transformation programs fail to deliver lasting value. Costs remain high, service levels stagnate, working capital remains trapped, and teams often revert to old habits once external support exits.",
    sections: [
      {
        heading: "The Root Causes of Failure",
        type: "numbered",
        items: [
          { title: "Imported Playbooks, Local Reality Ignored", body: "Many transformation programs are designed using frameworks borrowed from Europe or North America. These models assume stable infrastructure, mature supplier ecosystems, reliable data, and consistent governance. In African markets, these assumptions often collapse due to incomplete data, uneven supplier capability, infrastructure constraints, and informality embedded in daily operations. When transformation designs ignore these realities, execution breaks down immediately." },
          { title: "Strategy Without Execution Muscle", body: "Transformation often stops at strategy definition. KPIs are defined, roadmaps are approved, but operating rhythms, accountability, and decision rights are never embedded. The failure point is rarely the strategy itself — it is the absence of execution discipline once complexity increases." },
          { title: "Technology Before Process Discipline", body: "ERP and digital tools are frequently deployed before core processes are stabilized. Inefficiency is automated instead of eliminated. Systems go live, dashboards look impressive, yet operational performance barely shifts." },
          { title: "No Capability Transfer", body: "Many programs rely heavily on external consultants. When they exit, results fade. Transformation without capability transfer is not transformation — it is dependency." },
        ],
      },
      {
        heading: "What Actually Works in African Contexts",
        type: "bullets",
        items: [
          { title: "Diagnosis Before Prescription", body: "Successful programs begin with rapid, evidence-based diagnostics that establish baselines and prioritize realistic interventions." },
          { title: "Execution-Led Design", body: "Governance, RACI structures, decision cadence, and performance rhythms are embedded from day one. Where execution mechanisms are institutionalized early, momentum consistently sustains beyond the initial program phase." },
          { title: "Pragmatic Technology Sequencing", body: "Technology follows process stabilization — not the other way around." },
          { title: "Hands-On Delivery and Capability Transfer", body: "The most effective programs involve side-by-side execution, with ownership deliberately transferred to internal teams." },
        ],
      },
    ],
    closing: "Operational transformation in Africa does not fail due to lack of capability. It fails because execution complexity is underestimated. Transformation works when it is context-aware, execution-led, and capability-driven. These perspectives are informed by two decades of hands-on operational leadership and advisory work across African markets.",
  },
  {
    number: "02",
    category: "M&A & Due Diligence",
    date: "March 2026",
    readTime: "9 min read",
    image: Perspective2,
    imageAlt: "Business executives shaking hands after a deal",
    title: "Operational Due Diligence Is Not a Checklist: How Investors Lose (or Unlock) Value After the Deal",
    intro: "In many African transactions, due diligence is treated as a compliance exercise. Financials are reviewed, legal risks are flagged, and deals move forward. Then the surprises begin: margins disappoint, systems fail to integrate, key staff exit, and synergies remain theoretical. The most damaging risks often become visible only after closing — when operational reality replaces financial assumptions.",
    sections: [
      { heading: "Why Financial Diligence Is Not Enough", type: "prose", body: "Financial statements describe what happened. They rarely explain why it happened or whether performance is sustainable. Across multiple transactions, operational fragility has been hidden behind manual workarounds, heroic individual effort, deferred maintenance, informal supplier relationships, and unrecorded execution risk. Without deep operational insight, investors acquire risk without realizing it." },
      {
        heading: "Common Operational Blind Spots",
        type: "bullets",
        items: [
          { title: "Supply Chain Fragility", body: "Availability may look stable only because of excessive buffers or emergency purchasing. Supply chain risk often surfaces as the earliest value destroyer." },
          { title: "Systems and Data Integrity", body: "ERP systems exist, but data quality is poor and reporting unreliable." },
          { title: "Governance Gaps", body: "Decision rights are unclear, escalation paths are informal, and governance exists on paper but not in practice." },
          { title: "People and Capability Risk", body: "Critical knowledge sits with a few individuals. When they exit, operational stability erodes rapidly." },
        ],
      },
      { heading: "What Strong Operational Due Diligence Looks Like", type: "prose", body: "Effective operational diligence examines process stability, execution capability, governance effectiveness, integration readiness, and first-100-day risk. It asks a simple question: Can this organization sustain and improve performance under new ownership?" },
      { heading: "Unlocking Value After the Deal", type: "prose", body: "Where investors engage early with operational leaders who have lived through multiple integrations, outcomes change. Integration stabilizes faster, credibility improves, and value capture accelerates. These outcomes are rarely accidental — they are the product of experience gained across multiple deal cycles." },
    ],
    closing: "Investors do not lose value because deals are bad. They lose value because execution risk is underestimated. These insights are shaped by years of exposure to post-deal environments where execution pressure is highest and tolerance for error is lowest.",
  },
  {
    number: "03",
    category: "Strategic Execution",
    date: "February 2026",
    readTime: "7 min read",
    image: Perspective3,
    imageAlt: "Leadership team in a strategic planning session",
    title: "From Strategy to Results: The Missing Middle in Operational Excellence Programs",
    intro: "Most organizations are not short on strategy. They are short on results. Across Africa, executives approve ambitious strategies, operational excellence programs, and performance initiatives — yet execution stalls somewhere between the boardroom and the frontline. This gap is the missing middle.",
    sections: [
      { heading: "What Is the Missing Middle?", type: "prose", body: "The missing middle sits between strategic intent and operational reality. It includes governance structures, operating rhythms, decision rights, capability development, and accountability mechanisms. When this layer is weak, even the best strategies fail." },
      {
        heading: "Why the Gap Persists",
        type: "bullets",
        items: [
          { title: "KPIs Without Consequence", body: "Metrics are tracked, but underperformance has no owner." },
          { title: "Overloaded Leadership Teams", body: "Transformation becomes everyone's job and no one's responsibility." },
          { title: "Frontline Exclusion", body: "Operational teams are asked to execute strategies they did not help shape." },
          { title: "Consultant-Led Execution", body: "External teams drive change, but internal ownership remains weak." },
        ],
      },
      { heading: "Closing the Gap", type: "prose", body: "Organizations that close the strategy-execution gap embed governance alongside metrics, translate strategy into executable work, build capability through real delivery, and stay engaged until results become routine." },
    ],
    closing: "Operational excellence is not achieved through intent alone. It is achieved through disciplined execution systems.",
  },
];

function ArticleSection({ section }: { section: any }) {
  if (section.type === "prose") {
    return (
      <div className="mb-8">
        <h4 className="text-[#0F172A] font-bold text-[18px] mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#F59E0B] rounded-full inline-block" />
          {section.heading}
        </h4>
        <p className="text-[#1F2937] text-[15px] leading-relaxed pl-3">{section.body}</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h4 className="text-[#0F172A] font-bold text-[18px] mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-[#F59E0B] rounded-full inline-block" />
        {section.heading}
      </h4>
      <div className="space-y-4 pl-3">
        {section.items.map((item: any, i: number) => (
          <div key={i} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              {section.type === "numbered" ? (
                <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-[#0F172A] text-[11px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 block" />
              )}
            </div>
            <div>
              <span className="text-[#0F172A] font-semibold text-[15px]">{item.title}: </span>
              <span className="text-[#1F2937] text-[15px] leading-relaxed">{item.body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ article, align }: { article: any; align: "left" | "right" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
      <article
        className="w-full md:w-[78%] bg-white rounded-xl border border-[#0F172A]/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
        style={{
          borderLeft: align === "left" ? "4px solid #F59E0B" : undefined,
          borderRight: align === "right" ? "4px solid #F59E0B" : undefined,
        }}
      >
        {/* Article image */}
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
          <span className="absolute bottom-3 left-4 bg-[#F59E0B] text-[#0F172A] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        <button
          onClick={() => setExpanded((e) => !e)}
          className="w-full text-left p-8 md:p-10 flex items-start justify-between gap-6 group"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[#0F172A]/40 text-[12px] font-bold">#{article.number}</span>
              <span className="flex items-center gap-1 text-[#1F2937]/50 text-[12px]">
                <Calendar className="w-3 h-3" /> {article.date}
              </span>
              <span className="flex items-center gap-1 text-[#1F2937]/50 text-[12px]">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>

            <h2 className="text-[#0F172A] font-bold text-[22px] sm:text-[26px] leading-snug group-hover:text-[#F59E0B] transition-colors">
              {article.title}
            </h2>

            <p className="text-[#1F2937] text-[15px] leading-relaxed mt-4 max-w-3xl">
              {article.intro}
            </p>
          </div>

          <div className="flex-shrink-0 mt-1">
            <div
              className="w-9 h-9 rounded-full border-2 border-[#0F172A]/20 flex items-center justify-center group-hover:border-[#F59E0B]"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
            >
              <ChevronDown className="w-4 h-4 text-[#0F172A] group-hover:text-[#F59E0B]" />
            </div>
          </div>
        </button>

        <div style={{ display: "grid", gridTemplateRows: expanded ? "1fr" : "0fr", transition: "0.4s" }}>
          <div style={{ overflow: "hidden" }}>
            <div className="px-8 md:px-10 pb-10 border-t border-[#0F172A]/8">
              <div className="pt-8">
                {article.sections.map((section: any, i: number) => (
                  <ArticleSection key={i} section={section} />
                ))}
                <div className="mt-8 p-6 bg-[#0F172A] rounded-xl">
                  <p className="text-[#F59E0B] font-semibold text-[13px] uppercase tracking-widest mb-2">
                    The Bottom Line
                  </p>
                  <p className="text-white/85 text-[15px] leading-relaxed">{article.closing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function Perspectives() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Aurora colorStops={["#0F172A", "#F59E0B", "#0F172A"]} blend={0.4} amplitude={0.8} speed={0.5} />
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
            <h1 className="text-white font-bold text-[32px] sm:text-5xl mb-3">Our Perspectives</h1>
            <div className="w-20 h-[3px] bg-[#F59E0B]" />
          </div>
        </div>
      </div>

      {/* Articles — zigzag */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <p className="text-[#1F2937] text-[17px] leading-relaxed mb-12 max-w-2xl">
          Insights and thought leadership on operational excellence, strategic execution, and transformational change in African markets.
        </p>
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} align={idx % 2 === 0 ? "left" : "right"} />
        ))}
      </div>

      {/* Footer Aurora */}
      <div className="relative overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Aurora colorStops={["#0F172A", "#F59E0B", "#0F172A"]} blend={0.3} amplitude={0.6} speed={0.4} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <h2 className="text-white font-bold text-[26px] mb-4">Stay Informed</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on operational excellence, strategic execution, and market trends across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
            <button className="bg-[#F59E0B] text-[#0F172A] px-8 py-3 rounded font-bold hover:bg-[#d97706] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}