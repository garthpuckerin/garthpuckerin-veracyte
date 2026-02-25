import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AlignRow } from "@/components/AlignRow";
import { MetricCard } from "@/components/MetricCard";
import { RoleCard } from "@/components/RoleCard";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";

describe("Tag", () => {
  it("renders children text", () => {
    render(<Tag>Test Label</Tag>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });
});

describe("MetricCard", () => {
  it("renders value, label, and optional sub", () => {
    render(<MetricCard value="25K+" label="Users" sub="Epic Go-Live" />);
    expect(screen.getByText("25K+")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Epic Go-Live")).toBeInTheDocument();
  });

  it("renders without sub", () => {
    render(<MetricCard value="10" label="Years" />);
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Years")).toBeInTheDocument();
  });
});

describe("AlignRow", () => {
  it("renders requirement and evidence", () => {
    render(<AlignRow req="5 years experience" evidence="10+ years across healthcare" />);
    expect(screen.getByText("5 years experience")).toBeInTheDocument();
    expect(screen.getByText("10+ years across healthcare")).toBeInTheDocument();
  });
});

describe("Section", () => {
  it("renders title and children", () => {
    render(
      <Section title="Test Section">
        <p>Section content</p>
      </Section>
    );
    expect(screen.getByText("Test Section")).toBeInTheDocument();
    expect(screen.getByText("Section content")).toBeInTheDocument();
  });

  it("renders optional subtitle", () => {
    render(
      <Section title="Title" subtitle="A subtitle">
        <div />
      </Section>
    );
    expect(screen.getByText("A subtitle")).toBeInTheDocument();
  });
});

describe("RoleCard", () => {
  const props = {
    title: "LMS Administrator",
    company: "Entrust Corporation",
    period: "2021–2024",
    highlights: ["Owned full Docebo implementation", "Designed certification programs"],
  };

  it("renders title and company", () => {
    render(<RoleCard {...props} />);
    expect(screen.getByText("LMS Administrator")).toBeInTheDocument();
    expect(screen.getByText(/Entrust Corporation/)).toBeInTheDocument();
  });

  it("expands highlights on click", async () => {
    const user = userEvent.setup();
    render(<RoleCard {...props} />);
    expect(screen.queryByText("Owned full Docebo implementation")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Owned full Docebo implementation")).toBeInTheDocument();
  });

  it("collapses highlights on second click", async () => {
    const user = userEvent.setup();
    render(<RoleCard {...props} />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Owned full Docebo implementation")).toBeInTheDocument();

    await user.click(screen.getByRole("button"));
    expect(screen.queryByText("Owned full Docebo implementation")).not.toBeInTheDocument();
  });
});
