import { COLORS } from "@/lib/constants";

import { MetricCard } from "./MetricCard";
import { Section } from "./Section";
import { Tag } from "./Tag";

const VALUE_PROPS = [
  {
    title: "Healthcare & life sciences credibility you can use immediately",
    body: "Coordinating the Epic Go-Live at Montefiore Hospital for 25,000+ users across 7 locations, plus administering the LMS at Medidata Solutions (Dassault Systèmes) for clinical trial software — I bring direct healthcare and life sciences adjacency that bridges to Veracyte's genomic diagnostics context. Boehringer Ingelheim adds GxP-compliant pharmaceutical training to the mix.",
  },
  {
    title: "AI transformation is my current practice, not my next goal",
    body: "While most L&D professionals are still learning to use AI tools, I'm actively building AI-native systems — Mimir², a knowledge graph engine for adaptive learning content; Aether SDK, a dual-architecture integration platform; and Janus, a multi-modal AI content engine. Your 2026 AI automation roadmap needs someone who's already shipping these systems.",
  },
  {
    title: "LMS ownership isn't adjacent to this role — it's the spine of it",
    body: "Your JD explicitly requires LMS configuration, content structure, and ongoing administration. I've owned Docebo at Entrust (10,000+ users), Medidata, and Citadel Credit Union; SuccessFactors at Montefiore; SumTotal at American Express; and integrated Workday Learning at Federal Home Loan Bank — as the architect, not a power user.",
  },
  {
    title: "Global scope requires a systems thinker, not just a facilitator",
    body: "Building learning experiences for diverse global audiences (US + Israel operations) requires the same discipline as multi-audience LMS architecture — separate personas, localized pathways, consistent quality standards. At Entrust, I managed Docebo across three distinct audiences: internal employees, enterprise customers, and partners.",
  },
];

export function OverviewPage() {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 60%, #0f3a6e 100%)`,
          borderRadius: "14px",
          padding: "clamp(24px, 5vw, 48px)",
          marginBottom: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: "60%",
            background: `radial-gradient(ellipse at 80% 50%, ${COLORS.teal}22 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
            <Tag color="teal" size="md">
              Manager, Learning & Development
            </Tag>
            <Tag color="accent" size="md">
              Application
            </Tag>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 900,
              color: COLORS.white,
              fontFamily: "'DM Sans', sans-serif",
              margin: "0 0 8px 0",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Garth Puckerin
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#a8c4e0",
              margin: "0 0 24px 0",
              fontWeight: 500,
            }}
          >
            AI-Native Enablement & Learning Systems Architect · 13+ Years Enterprise L&D
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#c8ddf0",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: 0,
            }}
          >
            I design the systems that govern learning content — not just the content itself. With
            13+ years operating enterprise learning platforms and a deep technical background in
            APIs and integrations, I build AI-native enablement architectures where training
            materials are modular, adaptive, and maintainable at scale.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <MetricCard value="25K+" label="Users Supported" sub="Epic Go-Live, Montefiore" />
        <MetricCard value="13+" label="Years in L&D" sub="Enterprise LMS & enablement" />
        <MetricCard value="10K+" label="Users at Entrust" sub="Global Docebo LMS" />
        <MetricCard value="5" label="LMS Platforms" sub="Docebo, Workday, SF, SumTotal, LXP" />
      </div>

      <Section id="case" title="Why Garth × Veracyte">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {VALUE_PROPS.map((item, i) => (
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
                  width: "32px",
                  height: "3px",
                  background: COLORS.teal,
                  borderRadius: "2px",
                  marginBottom: "12px",
                }}
              />
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: COLORS.navy,
                  margin: "0 0 10px 0",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: COLORS.textMid,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
