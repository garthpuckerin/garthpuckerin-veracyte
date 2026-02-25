"use client";

import { RoleCard } from "./RoleCard";
import { Section } from "./Section";

const ROLES = [
  {
    title: "AI-Native Enablement & Learning Systems Architect",
    company: "Independent / Portfolio",
    period: "2024 – Present",
    highlights: [
      "Building Mimir² — a persistent knowledge graph engine managing learning content at the component level, enabling contextual reassembly and propagation of updates across interconnected materials (Neo4j, Python, FastAPI, Docker)",
      "Architecting Aether SDK — a dual-architecture integration platform: Aether Lite (FastAPI) for lightweight integrations and Aether Pro (NATS + Temporal) for enterprise-scale workflows with BI/Analytics",
      "Developing Janus — a multi-modal AI content engine governed by persona rules, generating images, video, voice, and presentations at scale while maintaining consistency and brand alignment (Claude API, OpenAI)",
    ],
  },
  {
    title: "L&D Specialist (Interim LMS Administrator)",
    company: "Citadel Credit Union",
    period: "Aug 2025 – Nov 2025",
    highlights: [
      "Provided temporary coverage for LMS team during maternity leave, ensuring business continuity",
      "Assisted in UAT testing and content validation for Docebo platform updates",
    ],
  },
  {
    title: "Learning Management & Integration Consultant",
    company: "Federal Home Loan Bank of Chicago",
    period: "Aug 2025 – Oct 2025",
    highlights: [
      "Directed integration efforts between Docebo, Udemy, Outlook, Teams, SSO, and SharePoint",
      "Authored UAT test scripts and executed content validation in sandbox and production environments",
      "Collaborated with HRIS and IT teams to configure authentication and permissions for pilot cohorts",
    ],
  },
  {
    title: "Business Systems Analyst – LMS",
    company: "Entrust Corporation",
    period: "Jun 2022 – Mar 2025",
    highlights: [
      "Managed global Docebo LMS configuration supporting 10,000+ users across internal teams, partners, and customers",
      "Integrated Workday, Salesforce, QuickSight, and LinkedIn Learning to automate data flows and reporting",
      "Led Tier I/II incident triage alongside vendors and security teams",
      "Created performance dashboards, system metrics, and test plans for feature releases and audits",
      "Directed content implementation across three organizational branches under compliance requirements",
    ],
  },
  {
    title: "LMS Administrator",
    company: "Medidata Solutions (Dassault Systèmes)",
    period: "Nov 2020 – Jun 2022",
    highlights: [
      "Implemented Docebo LMS deployment with Okta SSO integration and minimal operational disruption",
      "Developed training guides and admin workshops for self-service governance",
      "Produced monthly enablement scorecards and analytics linking adoption to Sales pipeline performance",
    ],
  },
  {
    title: "Learning Experience Platform Manager",
    company: "Success Academy Charter Schools",
    period: "Feb 2019 – Nov 2019",
    highlights: [
      "Introduced xAPI-compliant LXP tools for data tracking and analytics",
      "Automated cohort assignments, notifications, and reporting through custom API orchestration",
    ],
  },
  {
    title: "LMS Associate",
    company: "Boehringer Ingelheim Pharmaceuticals",
    period: "Oct 2016 – Jul 2018",
    highlights: [
      "Administered GxP-compliant training programs and resolved SCORM content issues",
      "Coordinated with QA/legal partners to maintain audit-ready documentation",
    ],
  },
  {
    title: "Project Coordinator",
    company: "Montefiore Hospital",
    period: "Oct 2015 – Jul 2016",
    highlights: [
      "Managed Epic Go-Live supporting 25,000+ users utilizing SuccessFactors LMS",
      "Coordinated training logistics across 7 locations with 120+ instructors",
    ],
  },
  {
    title: "Regulatory Compliance Training Analyst",
    company: "American Express",
    period: "Feb 2012 – Oct 2015",
    highlights: [
      "Oversaw enterprise-wide compliance training programs and regulatory alignment",
      "Migrated compliance workflows to SharePoint and SumTotal for improved reporting",
    ],
  },
];

export function ExperiencePage() {
  return (
    <div>
      <Section title="Experience" subtitle="Click any role to expand details">
        {ROLES.map((role, i) => (
          <RoleCard key={i} {...role} />
        ))}
      </Section>
    </div>
  );
}
