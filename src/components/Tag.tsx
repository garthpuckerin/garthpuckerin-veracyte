import { COLORS } from "@/lib/constants";

type TagColor = "teal" | "navy" | "accent" | "gray" | "green";

const TAG_STYLES: Record<TagColor, { bg: string; text: string; border: string }> = {
  teal: { bg: "#e0f5f4", text: COLORS.tealDim, border: "#b3e8e5" },
  navy: { bg: "#e8edf5", text: COLORS.navy, border: "#c5cfe3" },
  accent: { bg: "#fdf0e8", text: "#c25a20", border: "#f5c9a8" },
  gray: { bg: COLORS.lightGray, text: COLORS.textMid, border: COLORS.border },
  green: { bg: "#e8f5e9", text: "#2e7d32", border: "#a5d6a7" },
};

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  size?: "sm" | "md";
}

export function Tag({ children, color = "teal", size = "sm" }: TagProps) {
  const s = TAG_STYLES[color];
  return (
    <span
      style={{
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
      }}
    >
      {children}
    </span>
  );
}
