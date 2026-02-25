import { COLORS } from "@/lib/constants";

type MatchLevel = "strong" | "good" | "adjacent";

const MATCH_STYLES: Record<MatchLevel, { bg: string; text: string; icon: string }> = {
  strong: { bg: "#e0f5f4", text: COLORS.tealDim, icon: "✓✓" },
  good: { bg: "#e8edf5", text: COLORS.navy, icon: "✓" },
  adjacent: { bg: "#fdf0e8", text: "#c25a20", icon: "~" },
};

interface AlignRowProps {
  req: string;
  evidence: string;
  match?: MatchLevel;
}

export function AlignRow({ req, evidence, match = "strong" }: AlignRowProps) {
  const m = MATCH_STYLES[match];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr auto",
        gap: "16px",
        padding: "14px 16px",
        borderBottom: `1px solid ${COLORS.border}`,
        alignItems: "start",
      }}
    >
      <div style={{ fontSize: "13px", color: COLORS.textDark, fontWeight: 500 }}>{req}</div>
      <div style={{ fontSize: "13px", color: COLORS.textMid, lineHeight: 1.5 }}>{evidence}</div>
      <div
        style={{
          padding: "3px 10px",
          borderRadius: "4px",
          fontSize: "11px",
          fontWeight: 700,
          backgroundColor: m.bg,
          color: m.text,
          whiteSpace: "nowrap",
          alignSelf: "start",
        }}
      >
        {m.icon}
      </div>
    </div>
  );
}
