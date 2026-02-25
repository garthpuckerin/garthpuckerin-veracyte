"use client";

import { useState } from "react";

import { COLORS } from "@/lib/constants";

interface RoleCardProps {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

export function RoleCard({ title, company, period, highlights }: RoleCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "12px",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          padding: "16px 20px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: open ? COLORS.offWhite : COLORS.cardBg,
          transition: "background 0.2s",
          border: "none",
          width: "100%",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              color: COLORS.navy,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: "13px", color: COLORS.textMid, marginTop: "2px" }}>
            {company} · {period}
          </div>
        </div>
        <span
          style={{
            color: COLORS.teal,
            fontSize: "18px",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "16px 20px",
            borderTop: `1px solid ${COLORS.border}`,
            background: COLORS.offWhite,
          }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "10px",
                fontSize: "13px",
                color: COLORS.textMid,
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: COLORS.teal, flexShrink: 0, marginTop: "2px" }}>→</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
