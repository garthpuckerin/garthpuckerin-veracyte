import { COLORS } from "@/lib/constants";

interface MetricCardProps {
  value: string;
  label: string;
  sub?: string;
}

export function MetricCard({ value, label, sub }: MetricCardProps) {
  return (
    <div
      style={{
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: "10px",
        padding: "20px 24px",
        borderTop: `3px solid ${COLORS.teal}`,
      }}
    >
      <div
        style={{
          fontSize: "32px",
          fontWeight: 800,
          color: COLORS.navy,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: COLORS.teal,
          marginTop: "6px",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      {sub && (
        <div style={{ fontSize: "12px", color: COLORS.textLight, marginTop: "4px" }}>{sub}</div>
      )}
    </div>
  );
}
