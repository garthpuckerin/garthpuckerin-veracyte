export const COLORS = {
  navy: "#0a2240",
  navyLight: "#0d2d57",
  teal: "#00a89d",
  tealLight: "#00c4b8",
  tealDim: "#007d75",
  white: "#ffffff",
  offWhite: "#f7f9fc",
  lightGray: "#eef1f6",
  midGray: "#c8d0dc",
  textDark: "#0a2240",
  textMid: "#3d5a7a",
  textLight: "#6b85a0",
  accent: "#e8703a",
  accentLight: "#f59b6c",
  border: "#dde4ef",
  cardBg: "#ffffff",
  success: "#00a89d",
} as const;

export type ColorKey = keyof typeof COLORS;

export const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: "◎" },
  { id: "alignment", label: "Requirements Alignment", icon: "⊞" },
  { id: "experience", label: "Experience", icon: "◈" },
  { id: "ai-vision", label: "AI Transformation Vision", icon: "⟡" },
  { id: "approach", label: "90-Day Approach", icon: "◷" },
] as const;

export type NavId = (typeof NAV_ITEMS)[number]["id"];
