import { useState, useEffect, useRef } from "react";

const COLORS = {
  navy: "#0a2240",
  navyLight: "#0d2d57",
  teal: "#00a89d",
  tealLight: "#00c4b8",
  tealDim: "#007d75",
  white: "#ffffff",
  offWhite: "#f7f9fc",
  lightGray: "#eef1f6",
  midGray: "#c8d0dc",
  textDark: "#0a2240",
  textMid: "#3d5a7a",
  textLight: "#6b85a0",
  accent: "#e8703a",
  accentLight: "#f59b6c",
  border: "#dde4ef",
  cardBg: "#ffffff",
  success: "#00a89d",
};

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: "◎" },
  { id: "alignment", label: "Requirements Alignment", icon: "⊞" },
  { id: "experience", label: "Experience", icon: "◈" },
  { id: "ai-vision", label: "AI Transformation Vision", icon: "⟡" },
  { id: "approach", label: "90-Day Approach", icon: "◷" },
];

const Tag = ({ children, color = "teal", size = "sm" }) => {
  const styles = {
    teal: { bg: "#e0f5f4", text: COLORS.tealDim, border: "#b3e8e5" },
    navy: { bg: "#e8edf5", text: COLORS.navy, border: "#c5cfe3" },
    accent: { bg: "#fdf0e8", text: "#c25a20", border: "#f5c9a8" },
    gray: { bg: COLORS.lightGray, text: COLORS.textMid, border: COLORS.border },
    green: { bg: "#e8f5e9", text: "#2e7d32", border: "#a5d6a7" },
  };
  const s = styles[color];
  return (
    <span style={{
      display: "inline-block",
      padding: size === "sm" ? "3px 10px" : "5px 14px",
      borderRadius: "4px",
      fontSize: size === "sm" ? "11px" : "13px",
      fontWeight: 600,
      letterSpacing: "0.03em",
      backgroundColor: s.bg,
      color: s.text,
      border: `1px solid ${s.border}`,
      marginRight: "6px",
      marginBottom: "6px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {children}
    </span>
  );
};

const MetricCard = ({ value, label, sub }) => (
  <div style={{
    background: COLORS.cardBg,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "10px",
    padding: "20px 24px",
    borderTop: `3px solid ${COLORS.teal}`,
  }}>
    <div style={{ fontSize: "32px", fontWeight: 800, color: COLORS.navy, fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.teal, marginTop: "6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
    {sub && <div style={{ fontSize: "12px", color: COLORS.textLight, marginTop: "4px" }}>{sub}</div>}
  </div>
);

const AlignRow = ({ req, evidence, match = "strong" }) => {
  const matchColors = {
    strong: { bg: "#e0f5f4", text: COLORS.tealDim, icon: "✓✓" },
    good: { bg: "#e8edf5", text: COLORS.navy, icon: "✓" },
    adjacent: { bg: "#fdf0e8", text: "#c25a20", icon: "~" },
  };
  const m = matchColors[match];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr auto",
      gap: "16px",
      padding: "14px 16px",
      borderBottom: `1px solid ${COLORS.border}`,
      alignItems: "start",
    }}>
      <div style={{ fontSize: "13px", color: COLORS.textDark, fontWeight: 500 }}>{req}</div>
      <div style={{ fontSize: "13px", color: COLORS.textMid, lineHeight: 1.5 }}>{evidence}</div>
      <div style={{
        padding: "3px 10px",
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: 700,
        backgroundColor: m.bg,
        color: m.text,
        whiteSpace: "nowrap",
        alignSelf: "start",
      }}>{m.icon}</div>
    </div>
  );
};

const RoleCard = ({ title, company, period, highlights }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: COLORS.cardBg,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "12px",
    }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "16px 20px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: open ? COLORS.offWhite : COLORS.cardBg,
          transition: "background 0.2s",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: COLORS.navy, fontFamily: "'DM Sans', sans-serif" }}>{title}</div>
          <div style={{ fontSize: "13px", color: COLORS.textMid, marginTop: "2px" }}>{company} · {period}</div>
        </div>
        <span style={{ color: COLORS.teal, fontSize: "18px", transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </div>
      {open && (
        <div style={{ padding: "16px 20px", borderTop: `1px solid ${COLORS.border}`, background: COLORS.offWhite }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", fontSize: "13px", color: COLORS.textMid, lineHeight: 1.6 }}>
              <span style={{ color: COLORS.teal, flexShrink: 0, marginTop: "2px" }}>→</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} style={{ marginBottom: "64px" }}>
    <div style={{ marginBottom: "28px", paddingBottom: "16px", borderBottom: `2px solid ${COLORS.border}` }}>
      <h2 style={{
        fontSize: "22px",
        fontWeight: 800,
        color: COLORS.navy,
        fontFamily: "'DM Sans', sans-serif",
        margin: 0,
        letterSpacing: "-0.02em",
      }}>{title}</h2>
      {subtitle && <p style={{ fontSize: "14px", color: COLORS.textLight, marginTop: "6px", margin: "6px 0 0 0" }}>{subtitle}</p>}
    </div>
    {children}
  </section>
);

// ─── PAGE COMPONENTS ──────────────────────────────────────────────────────────

const OverviewPage = () => (
  <div>
    <div style={{
      background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 60%, #0f3a6e 100%)`,
      borderRadius: "14px",
      padding: "48px",
      marginBottom: "40px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, left: "60%",
        background: `radial-gradient(ellipse at 80% 50%, ${COLORS.teal}22 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
          <Tag color="teal" size="md">Manager, Learning & Development</Tag>
          <Tag color="accent" size="md">Application</Tag>
        </div>
        <h1 style={{
          fontSize: "44px",
          fontWeight: 900,
          color: COLORS.white,
          fontFamily: "'DM Sans', sans-serif",
          margin: "0 0 8px 0",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}>Garth Puckerin</h1>
        <p style={{ fontSize: "18px", color: "#a8c4e0", margin: "0 0 24px 0", fontWeight: 500 }}>
          AI-Native Learning Systems Architect · 10+ Years Enterprise L&D
        </p>
        <p style={{
          fontSize: "15px",
          color: "#c8ddf0",
          lineHeight: 1.7,
          maxWidth: "640px",
          margin: 0,
        }}>
          You're building a global learning infrastructure that can keep pace with an AI transformation roadmap.
          I've spent a decade doing exactly this — architecting learning systems across healthcare, life sciences,
          and financial services, now reimagined with the AI-native toolset your 2025–2026 roadmap demands.
        </p>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "40px" }}>
      <MetricCard value="25K+" label="Users Trained" sub="Epic Go-Live, Montefiore" />
      <MetricCard value="10+" label="Years LMS Admin" sub="Docebo, Workday, SF LMS" />
      <MetricCard value="7,000+" label="Partners Enabled" sub="Multi-audience LMS, Entrust" />
      <MetricCard value="6" label="Platforms Owned" sub="Enterprise implementations" />
    </div>

    <Section id="case" title="Why Garth × Veracyte">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {[
          {
            title: "Healthcare credibility you can use immediately",
            body: "Managing the Epic Go-Live training program for 25,000+ users across 7 Montefiore hospital locations isn't just an LMS story — it's clinical workflow translation, change management under pressure, and cross-functional coordination at scale. Medidata Solutions adds the clinical trials / life sciences dimension that bridges directly to Veracyte's genomic diagnostics context."
          },
          {
            title: "AI transformation is my current practice, not my next goal",
            body: "While most L&D professionals are still learning to use AI tools, I'm actively building AI-native enterprise learning platforms — including Mimir², an AI memory system processing 95K knowledge chunks, and Connex, an integration layer bridging LMS platforms with enterprise systems via API. Your 2026 AI automation roadmap needs someone who's already ahead of it."
          },
          {
            title: "LMS ownership isn't adjacent to this role — it's the spine of it",
            body: "Your JD explicitly requires LMS configuration, content structure, and ongoing administration. I've owned Docebo, Workday Learning, and SuccessFactors implementations end-to-end — not as a power user, but as the architect responsible for how learning is structured, accessed, and measured across entire organizations."
          },
          {
            title: "Global scope requires a systems thinker, not just a facilitator",
            body: "Building learning experiences for diverse global audiences (US + Israel operations) requires the same discipline as multi-audience LMS architecture — separate personas, localized pathways, consistent quality standards. The Entrust Corporation engagement, where I built separate learning tracks for 7,000+ partner organizations, is the direct analog."
          }
        ].map((item, i) => (
          <div key={i} style={{
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "10px",
            padding: "22px",
          }}>
            <div style={{
              width: "32px",
              height: "3px",
              background: COLORS.teal,
              borderRadius: "2px",
              marginBottom: "12px",
            }} />
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: COLORS.navy, margin: "0 0 10px 0", fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
            <p style={{ fontSize: "13px", color: COLORS.textMid, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const AlignmentPage = () => (
  <div>
    <Section
      title="Requirements Alignment"
      subtitle="Every requirement from the job posting mapped to direct experience"
    >
      <div style={{
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "10px",
        overflow: "hidden",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr auto",
          gap: "16px",
          padding: "12px 16px",
          background: COLORS.navy,
        }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.tealLight, letterSpacing: "0.08em", textTransform: "uppercase" }}>Requirement</div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.tealLight, letterSpacing: "0.08em", textTransform: "uppercase" }}>Garth's Evidence</div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.tealLight, letterSpacing: "0.08em", textTransform: "uppercase" }}>Match</div>
        </div>

        <AlignRow
          req="5 years L&D or Corporate Training experience"
          evidence="10+ years across healthcare, financial services, education, and enterprise SaaS — Montefiore, Entrust, Federal Home Loan Bank, Success Academy, American Express"
          match="strong"
        />
        <AlignRow
          req="LMS platform experience: configuration, content structure, administration"
          evidence="End-to-end ownership of Docebo, Workday Learning, and SuccessFactors — not power user, but platform architect responsible for structure and governance"
          match="strong"
        />
        <AlignRow
          req="Leadership and technical training program design"
          evidence="Designed multi-audience certification programs and onboarding curricula across all major roles; Epic Go-Live instructor training for 120+ facilitators at Montefiore"
          match="strong"
        />
        <AlignRow
          req="Global learning experiences for diverse audiences"
          evidence="Entrust: separate learning tracks for employees, customers, and 7,000+ partner organizations across geographies; localization and persona-based pathways"
          match="strong"
        />
        <AlignRow
          req="Executive communication and presenting program outcomes"
          evidence="Reported LMS performance metrics to C-suite at Federal Home Loan Bank; delivered enrollment and completion analytics to VP and Director stakeholders at multiple organizations"
          match="strong"
        />
        <AlignRow
          req="AI transformation — lead strategy and execution"
          evidence="Currently building AI-native enterprise platforms: Mimir² (AI memory/knowledge system), Connex (LMS-enterprise integration), PipelineOS (agent orchestration). Actively applying AI to L&D workflows."
          match="strong"
        />
        <AlignRow
          req="Career architecture and competency frameworks"
          evidence="Designed competency-based learning pathways tied to role progression at multiple organizations; partnered with HRBPs on skills gap analysis"
          match="good"
        />
        <AlignRow
          req="Biotech or life sciences industry background"
          evidence="Medidata Solutions (clinical trial SaaS platform) and Montefiore Hospital provide direct healthcare/life sciences adjacency"
          match="good"
        />
        <AlignRow
          req="Internship / early-career program management"
          evidence="Adjacent experience managing large multi-cohort onboarding programs; not a direct internship program background"
          match="adjacent"
        />
      </div>

      <div style={{ marginTop: "32px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: COLORS.navy, fontFamily: "'DM Sans', sans-serif", marginBottom: "16px" }}>Core platforms & tools</h3>
        <div>
          {[
            { label: "LMS Platforms", tags: ["Docebo", "Workday Learning", "SuccessFactors LMS", "Cornerstone"] },
            { label: "AI & Dev Tools", tags: ["Claude", "ChatGPT", "Cursor", "GitHub Copilot"] },
            { label: "Instructional Design", tags: ["Articulate 360", "Elucidat", "iSpring", "Camtasia"] },
            { label: "Enterprise Integration", tags: ["REST API", "Webhooks", "SSO/SAML", "SCORM/xAPI"] },
            { label: "Analytics & Reporting", tags: ["LMS dashboards", "Power BI", "Excel/Sheets analytics", "Custom reporting"] },
          ].map((group, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "12px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: COLORS.textLight, width: "140px", flexShrink: 0, paddingTop: "5px", letterSpacing: "0.02em" }}>{group.label}</div>
              <div>{group.tags.map(t => <Tag key={t} color="navy">{t}</Tag>)}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

const ExperiencePage = () => (
  <div>
    <Section title="Experience" subtitle="Click any role to expand details">
      <RoleCard
        title="AI-Native Learning Systems Architect"
        company="Independent / Portfolio"
        period="2024–Present"
        highlights={[
          "Building Connex — an enterprise integration platform bridging LMS systems (Docebo, Workday Learning, LinkedIn Learning) with HRIS/HCM platforms via API orchestration",
          "Architecting Mimir², an AI-powered knowledge management system processing 95K+ document chunks across 7,400+ files for organizational memory and learning continuity",
          "Developing PipelineOS, an agent orchestration platform for enterprise AI workflow automation — directly applicable to Veracyte's 2026 AI automation roadmap",
          "Building Janus, a persona and behavioral engine for adaptive learning path personalization at scale",
          "Identified and scoped a $200K+ integration opportunity at a credit union client where Connex would solve multi-platform learning data challenges"
        ]}
      />
      <RoleCard
        title="LMS Administrator / Learning Systems Manager"
        company="Entrust Corporation"
        period="2021–2024"
        highlights={[
          "Owned full Docebo implementation serving three distinct audiences: internal employees, enterprise customers, and 7,000+ partner organizations — each with separate learning paths, permissions, and content governance",
          "Designed and maintained multi-tiered certification programs with automated enrollment, progress tracking, and completion reporting",
          "Built and managed API integrations connecting Docebo to HRIS and CRM systems, automating user provisioning and enrollment triggers",
          "Produced executive-level reporting on completion rates, engagement metrics, and certification compliance for VP and C-suite stakeholders",
          "Led change management and training rollouts for new platform features affecting all three audience tiers simultaneously"
        ]}
      />
      <RoleCard
        title="LMS Administrator / Training Coordinator"
        company="Montefiore Health System"
        period="2019–2021"
        highlights={[
          "Managed Epic Go-Live training program for 25,000+ clinical and administrative users across 7 hospital locations and affiliated practices",
          "Coordinated 120+ instructors and training staff across a compressed, high-stakes deployment timeline with zero margin for error",
          "Designed role-based learning pathways for 40+ distinct Epic modules, mapping clinical workflow competencies to training milestones",
          "Built LMS-based tracking infrastructure to monitor completion compliance and flag at-risk users before go-live dates",
          "Delivered daily progress reports to project management and clinical leadership throughout the deployment period"
        ]}
      />
      <RoleCard
        title="Learning Systems Manager"
        company="Federal Home Loan Bank of Chicago"
        period="2017–2019"
        highlights={[
          "Administered Workday Learning implementation for a regulated financial services organization with strict compliance and audit requirements",
          "Designed competency-based learning frameworks tied to role progression and annual performance review cycles",
          "Partnered with HRBPs on skills gap analysis and succession planning data, informing L&D investment priorities",
          "Presented LMS performance analytics and program effectiveness metrics to VP-level stakeholders quarterly"
        ]}
      />
      <RoleCard
        title="LMS Administrator / Instructional Designer"
        company="Medidata Solutions"
        period="2015–2017"
        highlights={[
          "Managed SuccessFactors LMS for a clinical trial SaaS company, serving both internal employees and external clinical research customers",
          "Designed technical product training curricula translating complex clinical trial software workflows into role-appropriate learning modules",
          "Built customer onboarding programs that accelerated time-to-competency for new platform users",
          "Supported global rollouts of platform updates with synchronized training content across multiple regions"
        ]}
      />
      <RoleCard
        title="Training Manager / LMS Administrator"
        company="Success Academy Charter Schools"
        period="2013–2015"
        highlights={[
          "Built and managed learning infrastructure for a rapidly scaling K-12 education organization growing from a handful of schools to 40+ locations",
          "Designed teacher onboarding and development programs supporting a nationally recognized instructional model",
          "Implemented LMS infrastructure from scratch, establishing content governance and reporting standards organization-wide"
        ]}
      />
    </Section>
  </div>
);

const AIVisionPage = () => (
  <div>
    <Section
      title="AI Transformation Vision"
      subtitle="How I'd approach Veracyte's 2026 AI and automation roadmap"
    >
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, #0f3560 100%)`,
        borderRadius: "14px",
        padding: "36px",
        marginBottom: "32px",
        color: COLORS.white,
      }}>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#c8ddf0", margin: 0 }}>
          Most L&D professionals are approaching AI as a new tool to add to their toolkit.
          I'm approaching it as a fundamental shift in how learning systems are architected —
          where AI isn't a feature, it's the infrastructure. That's the difference Veracyte needs
          for a transformation roadmap, not an upgrade cycle.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
        {[
          {
            phase: "Months 1–2",
            title: "Audit → Architecture",
            items: [
              "Deep audit of existing learning content, systems, and delivery mechanisms",
              "Map skills gaps against where AI/automation is heading — not just where the org is today",
              "Identify high-ROI automation opportunities: content refresh cycles, enrollment workflows, progress notifications",
              "Establish baseline metrics for time-to-productivity and program effectiveness",
            ]
          },
          {
            phase: "Months 3–4",
            title: "Infrastructure Modernization",
            items: [
              "Implement AI-assisted content development workflow (reduce production time by 60–70%)",
              "Build automated onboarding milestone tracking with proactive intervention triggers",
              "Connect LMS to HRIS for intelligent enrollment automation and skills gap surfacing",
              "Establish content governance framework that scales without constant manual curation",
            ]
          },
          {
            phase: "Months 5–6",
            title: "Leadership Development Layer",
            items: [
              "Launch competency-based leadership development program for first-time managers",
              "Implement 360° feedback loops connecting performance data to learning recommendations",
              "Build AI-powered coaching nudge system for managers between formal training touchpoints",
              "Establish executive dashboard: program ROI, skills coverage, leadership pipeline health",
            ]
          },
          {
            phase: "Ongoing",
            title: "Change Management Engine",
            items: [
              "Proactive training launch protocol for every new technology deployment — no post-launch scramble",
              "Continuous needs assessment cadence tied to product roadmap milestones",
              "Learning content that evolves with the platform, not six months behind it",
              "Quarterly executive presentations: data-driven program outcomes and strategic recommendations",
            ]
          }
        ].map((card, i) => (
          <div key={i} style={{
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "10px",
            padding: "22px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: COLORS.teal, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{card.phase}</div>
            <h3 style={{ fontSize: "16px", fontWeight: 800, color: COLORS.navy, fontFamily: "'DM Sans', sans-serif", margin: "0 0 14px 0" }}>{card.title}</h3>
            {card.items.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "8px", fontSize: "13px", color: COLORS.textMid, lineHeight: 1.5 }}>
                <span style={{ color: COLORS.teal, flexShrink: 0 }}>◆</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        background: COLORS.offWhite,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "10px",
        padding: "24px",
      }}>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: COLORS.navy, fontFamily: "'DM Sans', sans-serif", margin: "0 0 12px 0" }}>
          Why this matters for a diagnostics company specifically
        </h3>
        <p style={{ fontSize: "14px", color: COLORS.textMid, lineHeight: 1.7, margin: 0 }}>
          Veracyte's value proposition is giving clinicians the insights they need to make life-changing decisions.
          The same precision standard applies internally — your team needs learning that is accurate, timely,
          and decision-relevant. Generic L&D content won't prepare people for the specificity of genomic
          diagnostics workflows. AI-assisted content development, when done right, actually improves that
          precision by allowing continuous updates as the science and the platform evolve, rather than
          waiting for annual curriculum refresh cycles.
        </p>
      </div>
    </Section>
  </div>
);

const ApproachPage = () => (
  <div>
    <Section title="90-Day Approach" subtitle="How I'd get to impact quickly">
      <div style={{ position: "relative" }}>
        {[
          {
            days: "Days 1–15",
            title: "Listen and map",
            color: COLORS.teal,
            items: [
              "1:1s with every key stakeholder: VP of Patient Care, HRBPs, team leads, care ops",
              "Audit existing training content — what's working, what's outdated, what's missing",
              "Get inside the LMS: understand current architecture, content structure, and reporting gaps",
              "Shadow onboarding for a new care team member to understand the actual experience vs. the intended one",
              "Review 2026 AI/automation roadmap with Product and Care Ops — understand what's coming and when",
            ]
          },
          {
            days: "Days 16–45",
            title: "Establish infrastructure and quick wins",
            color: COLORS.navy,
            items: [
              "Document current state: skills gaps, completion data, time-to-productivity benchmarks",
              "Propose LMS structural improvements — content taxonomy, learning paths, reporting dashboards",
              "Launch first AI-assisted content production pilot: take one high-priority update and demonstrate accelerated cycle time",
              "Draft milestone-based onboarding framework for care team, circulate for stakeholder review",
              "Identify the one leadership development gap causing the most pain and begin program design",
            ]
          },
          {
            days: "Days 46–90",
            title: "Build, deliver, measure",
            color: COLORS.accent,
            items: [
              "Deliver revamped onboarding program for care team — milestone-based, measurable",
              "Launch first leadership development module for first-time managers",
              "Present 90-day findings and 6-month roadmap to VP of Patient Care and executive stakeholders",
              "Establish recurring change management protocol for technology launches — never behind the product team again",
              "Define the success metrics that will govern L&D investment decisions for the next 12 months",
            ]
          }
        ].map((phase, i) => (
          <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: phase.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.white,
                fontWeight: 800,
                fontSize: "13px",
                flexShrink: 0,
              }}>{i + 1}</div>
              {i < 2 && <div style={{ width: "2px", flex: 1, background: COLORS.border, margin: "8px 0" }} />}
            </div>
            <div style={{ flex: 1, paddingTop: "8px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: phase.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{phase.days}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: COLORS.navy, fontFamily: "'DM Sans', sans-serif", margin: "0 0 14px 0" }}>{phase.title}</h3>
              {phase.items.map((item, j) => (
                <div key={j} style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: COLORS.textMid,
                  lineHeight: 1.6,
                  background: COLORS.offWhite,
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: `1px solid ${COLORS.border}`,
                }}>
                  <span style={{ color: phase.color, flexShrink: 0 }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function VeracyteApp() {
  const [activeNav, setActiveNav] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = {
    overview: <OverviewPage />,
    alignment: <AlignmentPage />,
    experience: <ExperiencePage />,
    "ai-vision": <AIVisionPage />,
    approach: <ApproachPage />,
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: COLORS.offWhite, minHeight: "100vh", margin: 0 }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10, 34, 64, 0.97)" : COLORS.navy,
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${scrolled ? "rgba(0,168,157,0.3)" : "transparent"}`,
        transition: "all 0.2s",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", height: "56px", gap: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "16px" }}>
            <div style={{ width: "28px", height: "28px", background: COLORS.teal, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: COLORS.white, fontWeight: 900, fontSize: "14px" }}>G</span>
            </div>
            <span style={{ color: COLORS.white, fontWeight: 700, fontSize: "14px" }}>Garth Puckerin</span>
            <span style={{ color: "#4a7a9b", fontSize: "14px" }}>×</span>
            <span style={{ color: COLORS.tealLight, fontWeight: 700, fontSize: "14px" }}>Veracyte</span>
          </div>
          <nav style={{ display: "flex", gap: "4px", flex: 1, overflowX: "auto" }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                style={{
                  padding: "6px 14px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: activeNav === item.id ? 700 : 500,
                  color: activeNav === item.id ? COLORS.white : "#7aa0c0",
                  background: activeNav === item.id ? COLORS.teal : "transparent",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="mailto:garth@example.com"
            style={{
              padding: "8px 20px",
              background: COLORS.teal,
              color: COLORS.white,
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
              flexShrink: 0,
              transition: "background 0.15s",
            }}
          >
            Contact Garth
          </a>
        </div>
      </div>

      {/* Main content */}
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 32px" }}>
        {pages[activeNav]}
      </main>

      {/* Footer */}
      <footer style={{
        background: COLORS.navy,
        padding: "32px",
        textAlign: "center",
        marginTop: "40px",
      }}>
        <p style={{ color: "#4a7a9b", fontSize: "13px", margin: 0 }}>
          Garth Puckerin · AI-Native Learning Systems Architect · Built specifically for Veracyte Manager, L&D
        </p>
      </footer>
    </div>
  );
}
