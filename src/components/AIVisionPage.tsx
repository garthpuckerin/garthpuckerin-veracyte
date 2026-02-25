import { COLORS } from "@/lib/constants";

import { Section } from "./Section";

const PHASES = [
  {
    phase: "Months 1–2",
    title: "Audit → Architecture",
    items: [
      "Deep audit of existing learning content, systems, and delivery mechanisms",
      "Map skills gaps against where AI/automation is heading — not just where the org is today",
      "Identify high-ROI automation opportunities: content refresh cycles, enrollment workflows, progress notifications",
      "Establish baseline metrics for time-to-productivity and program effectiveness",
    ],
  },
  {
    phase: "Months 3–4",
    title: "Infrastructure Modernization",
    items: [
      "Implement AI-assisted content development workflow (reduce production time by 60–70%)",
      "Build automated onboarding milestone tracking with proactive intervention triggers",
      "Connect LMS to HRIS for intelligent enrollment automation and skills gap surfacing",
      "Establish content governance framework that scales without constant manual curation",
    ],
  },
  {
    phase: "Months 5–6",
    title: "Leadership Development Layer",
    items: [
      "Launch competency-based leadership development program for first-time managers",
      "Implement 360° feedback loops connecting performance data to learning recommendations",
      "Build AI-powered coaching nudge system for managers between formal training touchpoints",
      "Establish executive dashboard: program ROI, skills coverage, leadership pipeline health",
    ],
  },
  {
    phase: "Ongoing",
    title: "Change Management Engine",
    items: [
      "Proactive training launch protocol for every new technology deployment — no post-launch scramble",
      "Continuous needs assessment cadence tied to product roadmap milestones",
      "Learning content that evolves with the platform, not six months behind it",
      "Quarterly executive presentations: data-driven program outcomes and strategic recommendations",
    ],
  },
];

export function AIVisionPage() {
  return (
    <div>
      <Section
        title="AI Transformation Vision"
        subtitle="How I'd approach Veracyte's 2026 AI and automation roadmap"
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${COLORS.navy} 0%, #0f3560 100%)`,
            borderRadius: "14px",
            padding: "36px",
            marginBottom: "32px",
            color: COLORS.white,
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#c8ddf0", margin: 0 }}>
            Most L&D professionals are approaching AI as a new tool to add to their toolkit.
            I&apos;m approaching it as a fundamental shift in how learning systems are architected —
            where AI isn&apos;t a feature, it&apos;s the infrastructure. That&apos;s the difference
            Veracyte needs for a transformation roadmap, not an upgrade cycle.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {PHASES.map((card, i) => (
            <div
              key={i}
              style={{
                background: COLORS.cardBg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "10px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: COLORS.teal,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {card.phase}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: COLORS.navy,
                  fontFamily: "'DM Sans', sans-serif",
                  margin: "0 0 14px 0",
                }}
              >
                {card.title}
              </h3>
              {card.items.map((item, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                    fontSize: "13px",
                    color: COLORS.textMid,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: COLORS.teal, flexShrink: 0 }}>◆</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            background: COLORS.offWhite,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: COLORS.navy,
              fontFamily: "'DM Sans', sans-serif",
              margin: "0 0 12px 0",
            }}
          >
            Why this matters for a diagnostics company specifically
          </h3>
          <p style={{ fontSize: "14px", color: COLORS.textMid, lineHeight: 1.7, margin: 0 }}>
            Veracyte&apos;s value proposition is giving clinicians the insights they need to make
            life-changing decisions. The same precision standard applies internally — your team
            needs learning that is accurate, timely, and decision-relevant. Generic L&D content
            won&apos;t prepare people for the specificity of genomic diagnostics workflows.
            AI-assisted content development, when done right, actually improves that precision by
            allowing continuous updates as the science and the platform evolve, rather than waiting
            for annual curriculum refresh cycles.
          </p>
        </div>
      </Section>
    </div>
  );
}
