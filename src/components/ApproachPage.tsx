import { COLORS } from "@/lib/constants";

import { Section } from "./Section";

const PHASES = [
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
    ],
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
    ],
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
    ],
  },
];

export function ApproachPage() {
  return (
    <div>
      <Section title="90-Day Approach" subtitle="How I'd get to impact quickly">
        <div style={{ position: "relative" }}>
          {PHASES.map((phase, i) => (
            <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
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
                  }}
                >
                  {i + 1}
                </div>
                {i < PHASES.length - 1 && (
                  <div
                    style={{ width: "2px", flex: 1, background: COLORS.border, margin: "8px 0" }}
                  />
                )}
              </div>
              <div style={{ flex: 1, paddingTop: "8px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: phase.color,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {phase.days}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: COLORS.navy,
                    fontFamily: "'DM Sans', sans-serif",
                    margin: "0 0 14px 0",
                  }}
                >
                  {phase.title}
                </h3>
                {phase.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
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
                    }}
                  >
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
}
