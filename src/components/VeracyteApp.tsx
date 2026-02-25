"use client";

import { useEffect, useState } from "react";

import { AIVisionPage } from "@/components/AIVisionPage";
import { AlignmentPage } from "@/components/AlignmentPage";
import { ApproachPage } from "@/components/ApproachPage";
import { ExperiencePage } from "@/components/ExperiencePage";
import { OverviewPage } from "@/components/OverviewPage";

import { COLORS, NAV_ITEMS } from "@/lib/constants";
import type { NavId } from "@/lib/constants";

const PAGES: Record<NavId, React.ReactNode> = {
  overview: <OverviewPage />,
  alignment: <AlignmentPage />,
  experience: <ExperiencePage />,
  "ai-vision": <AIVisionPage />,
  approach: <ApproachPage />,
};

export function VeracyteApp() {
  const [activeNav, setActiveNav] = useState<NavId>("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        background: COLORS.offWhite,
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(10, 34, 64, 0.97)" : COLORS.navy,
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${scrolled ? "rgba(0,168,157,0.3)" : "transparent"}`,
          transition: "all 0.2s",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: "56px",
            gap: "16px",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                background: COLORS.teal,
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: COLORS.white, fontWeight: 900, fontSize: "14px" }}>G</span>
            </div>
            <span style={{ color: COLORS.white, fontWeight: 700, fontSize: "14px" }}>
              Garth Puckerin
            </span>
            <span style={{ color: "#4a7a9b", fontSize: "14px" }}>×</span>
            <span style={{ color: COLORS.tealLight, fontWeight: 700, fontSize: "14px" }}>
              Veracyte
            </span>
          </div>
          <nav
            role="navigation"
            aria-label="Main navigation"
            style={{
              display: "flex",
              gap: "4px",
              flex: 1,
              minWidth: 0,
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                aria-current={activeNav === item.id ? "page" : undefined}
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
          <div style={{ display: "flex", gap: "8px", flexShrink: 0, whiteSpace: "nowrap" }}>
            <a
              href="mailto:garth.puckerin@me.com"
              style={{
                padding: "8px 16px",
                background: COLORS.teal,
                color: COLORS.white,
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                transition: "background 0.15s",
              }}
            >
              Contact
            </a>
            <a
              href="/Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf"
              download
              style={{
                padding: "8px 16px",
                background: "transparent",
                color: COLORS.tealLight,
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                border: `1px solid ${COLORS.tealLight}`,
                transition: "all 0.15s",
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 32px" }}>
        {PAGES[activeNav]}
      </main>

      <footer
        style={{
          background: COLORS.navy,
          padding: "32px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p style={{ color: "#4a7a9b", fontSize: "13px", margin: 0 }}>
          Garth Puckerin · AI-Native Enablement & Learning Systems Architect · Built specifically
          for Veracyte Manager, L&D
        </p>
      </footer>
    </div>
  );
}
