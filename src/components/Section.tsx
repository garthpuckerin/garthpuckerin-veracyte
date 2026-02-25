import { COLORS } from "@/lib/constants";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} style={{ marginBottom: "64px" }}>
      <div
        style={{
          marginBottom: "28px",
          paddingBottom: "16px",
          borderBottom: `2px solid ${COLORS.border}`,
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: COLORS.navy,
            fontFamily: "'DM Sans', sans-serif",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: "14px", color: COLORS.textLight, margin: "6px 0 0 0" }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
