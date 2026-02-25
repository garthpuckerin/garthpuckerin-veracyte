import { COLORS } from "@/lib/constants";

import { AlignRow } from "./AlignRow";
import { Section } from "./Section";
import { Tag } from "./Tag";

const TOOL_GROUPS = [
  {
    label: "Learning Systems",
    tags: ["Docebo", "Workday Learning", "SuccessFactors", "SumTotal", "SCORM/xAPI"],
  },
  {
    label: "Development",
    tags: [
      "Python/FastAPI",
      "React/Tailwind",
      "REST APIs/OAuth2",
      "PostgreSQL/Docker",
      "Git/GitHub",
    ],
  },
  {
    label: "Integration & APIs",
    tags: ["SSO/SAML (Okta)", "Workday", "Salesforce", "LinkedIn Learning", "QuickSight"],
  },
  {
    label: "Enterprise & AI",
    tags: ["Claude API", "AI-Augmented Workflows", "Neo4j", "NATS", "Temporal"],
  },
];

export function AlignmentPage() {
  return (
    <div>
      <Section
        title="Requirements Alignment"
        subtitle="Every requirement from the job posting mapped to direct experience"
      >
        <div
          style={{
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              gap: "16px",
              padding: "12px 16px",
              background: COLORS.navy,
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: COLORS.tealLight,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Requirement
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: COLORS.tealLight,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Garth&apos;s Evidence
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: COLORS.tealLight,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Match
            </div>
          </div>

          <AlignRow
            req="5 years L&D or Corporate Training experience"
            evidence="13+ years across healthcare, pharma, financial services, education, and enterprise SaaS — American Express, Montefiore, Boehringer Ingelheim, Medidata, Success Academy, Entrust, FHLB, Citadel CU"
            match="strong"
          />
          <AlignRow
            req="LMS platform experience: configuration, content structure, administration"
            evidence="Owned Docebo at Entrust (10K+ users), Medidata, FHLB, and Citadel CU; SuccessFactors at Montefiore; SumTotal at American Express; xAPI-compliant LXP at Success Academy"
            match="strong"
          />
          <AlignRow
            req="Leadership and technical training program design"
            evidence="Epic Go-Live training across 7 locations with 120+ instructors at Montefiore; GxP-compliant programs at Boehringer Ingelheim; enterprise compliance training at American Express"
            match="strong"
          />
          <AlignRow
            req="Global learning experiences for diverse audiences"
            evidence="Entrust: managed Docebo across three distinct audiences — internal employees, enterprise customers, and partners. Directed content implementation across three organizational branches."
            match="strong"
          />
          <AlignRow
            req="Executive communication and presenting program outcomes"
            evidence="Created performance dashboards and system metrics at Entrust; produced monthly enablement scorecards linking adoption to Sales pipeline at Medidata; enablement analytics at multiple orgs"
            match="strong"
          />
          <AlignRow
            req="AI transformation — lead strategy and execution"
            evidence="Building Mimir² (knowledge graph engine for adaptive learning), Aether SDK (enterprise integration platform), and Janus (multi-modal AI content engine). Active builder using AI-assisted development workflows."
            match="strong"
          />
          <AlignRow
            req="Integration and systems architecture"
            evidence="Integrated Workday, Salesforce, QuickSight, LinkedIn Learning, Okta SSO at Entrust; directed Docebo-Udemy-Outlook-Teams-SSO-SharePoint integrations at FHLB"
            match="strong"
          />
          <AlignRow
            req="Biotech or life sciences industry background"
            evidence="Medidata Solutions / Dassault Systèmes (clinical trial SaaS), Boehringer Ingelheim Pharmaceuticals (GxP-compliant training), and Montefiore Hospital — direct healthcare and pharma experience"
            match="strong"
          />
          <AlignRow
            req="Internship / early-career program management"
            evidence="Adjacent experience: automated cohort assignments and onboarding at Success Academy; managed multi-cohort Go-Live training at Montefiore"
            match="adjacent"
          />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: COLORS.navy,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "16px",
            }}
          >
            Core platforms & tools
          </h3>
          <div>
            {TOOL_GROUPS.map((group, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: COLORS.textLight,
                    width: "140px",
                    flexShrink: 0,
                    paddingTop: "5px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {group.label}
                </div>
                <div>
                  {group.tags.map((t) => (
                    <Tag key={t} color="navy">
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
