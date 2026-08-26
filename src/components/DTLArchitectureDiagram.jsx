import { useState } from "react";

const SAGE = "#5C7A5C";
const SAGE_LIGHT = "#E8F0E8";
const SAGE_MID = "#87A878";
const WHITE = "#FFFFFF";
const OFF_WHITE = "#F8F8F5";
const GRAY = "#6B7280";
const DARK = "#1F2937";

const Box = ({ title, items, accent, onClick, active }) => (
  <div
    onClick={onClick}
    style={{
      background: WHITE,
      border: `2px solid ${active ? SAGE : SAGE_MID}`,
      borderRadius: 12,
      padding: "16px 20px",
      width: "100%",
      maxWidth: 400,
      boxShadow: active ? "0 4px 16px rgba(92,122,92,0.15)" : "0 2px 8px rgba(0,0,0,0.07)",
      cursor: "pointer",
      transition: "all 0.2s",
      transform: active ? "scale(1.02)" : "scale(1)"
    }}
  >
    <div style={{
      background: active ? SAGE : SAGE_MID,
      color: WHITE,
      borderRadius: 6,
      padding: "4px 10px",
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 10,
      textAlign: "center",
      letterSpacing: 0.5
    }}>{title}</div>
    {items.map((item, i) => (
      <div key={i} style={{
        fontSize: 12,
        color: item.muted ? GRAY : DARK,
        padding: "3px 0",
        borderBottom: i < items.length - 1 ? `1px solid ${SAGE_LIGHT}` : "none",
        fontStyle: item.muted ? "italic" : "normal"
      }}>
        {item.icon && <span style={{ marginRight: 5 }}>{item.icon}</span>}
        {item.label}
      </div>
    ))}
  </div>
);

const DownArrow = ({ label }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px 0",
    gap: 2
  }}>
    <div style={{ width: 2, height: 16, background: SAGE_MID }} />
    {label && (
      <div style={{
        fontSize: 10,
        color: SAGE,
        fontWeight: 600,
        background: SAGE_LIGHT,
        padding: "2px 8px",
        borderRadius: 4,
        whiteSpace: "nowrap",
        border: `1px solid ${SAGE_MID}`
      }}>{label}</div>
    )}
    <div style={{ width: 2, height: 16, background: SAGE_MID }} />
    <div style={{
      width: 0,
      height: 0,
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: `10px solid ${SAGE_MID}`,
    }} />
  </div>
);

const Badge = ({ text }) => (
  <span style={{
    background: SAGE_LIGHT,
    color: SAGE,
    borderRadius: 20,
    padding: "2px 8px",
    fontSize: 11,
    fontWeight: 600,
    marginRight: 4,
    marginBottom: 4,
    display: "inline-block",
    border: `1px solid ${SAGE_MID}`
  }}>{text}</span>
);

export default function DTLArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = {
    frontend: {
      title: "What the spec defined",
      content: "Session-based state management with no persistent user profiles. Badge state held client-side. Module completion validated locally before API call. No login screen, no account creation, no email required."
    },
    api: {
      title: "What the spec defined",
      content: "Three core endpoints: POST /session/start, POST /module/complete, GET /badge/status. All session-scoped. No user ID in any request or response. Token expires after 24 hours."
    },
    db: {
      title: "What the spec defined",
      content: "No student PII stored at any point. Sessions identified by anonymous tokens. Badge and completion state stored against session not user. Schema designed so it is structurally impossible to identify any individual student from the data."
    }
  };

  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      background: OFF_WHITE,
      borderRadius: 16,
      padding: 32,
      maxWidth: 500,
      margin: "0 auto"
    }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: SAGE, marginBottom: 4 }}>
          DTL Platform: Architecture from Spec
        </div>
        <div style={{ fontSize: 13, color: GRAY }}>
          Click any layer to see what the planning document defined for that area
        </div>
      </div>

      {/* Vertical stack */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        marginBottom: 24
      }}>

        <Box
          title="React Frontend"
          active={activeNode === "frontend"}
          onClick={() => setActiveNode(activeNode === "frontend" ? null : "frontend")}
          items={[
            { label: "Badge progression UI", icon: "🏅" },
            { label: "Module completion flow", icon: "📋" },
            { label: "Champion status display", icon: "⭐" },
            { label: "No login or account creation", icon: "🚫", muted: true },
            { label: "No student PII collected", icon: "🔒", muted: true },
          ]}
        />

        <DownArrow label="Session token only, no PII" />

        <Box
          title="Node.js API Layer"
          active={activeNode === "api"}
          onClick={() => setActiveNode(activeNode === "api" ? null : "api")}
          items={[
            { label: "POST /session/start", icon: "▶" },
            { label: "POST /module/complete", icon: "✓" },
            { label: "GET /badge/status", icon: "🏅" },
            { label: "No user ID in any request", icon: "🚫", muted: true },
            { label: "Token expires after 24h", icon: "⏱", muted: true },
          ]}
        />

        <DownArrow label="Anonymous session ID only" />

        <Box
          title="PostgreSQL Database"
          active={activeNode === "db"}
          onClick={() => setActiveNode(activeNode === "db" ? null : "db")}
          items={[
            { label: "sessions table", icon: "📦" },
            { label: "module_completions table", icon: "📦" },
            { label: "badge_awards table", icon: "📦" },
            { label: "No name, email, or ID stored", icon: "🚫", muted: true },
            { label: "Anonymised by design", icon: "🔒", muted: true },
          ]}
        />

      </div>

      {/* Active node detail */}
      {activeNode && (
        <div style={{
          background: WHITE,
          border: `2px solid ${SAGE}`,
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: 24,
          transition: "all 0.2s"
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: SAGE, marginBottom: 6 }}>
            {nodes[activeNode].title}
          </div>
          <div style={{ fontSize: 13, color: DARK, lineHeight: 1.6 }}>
            {nodes[activeNode].content}
          </div>
        </div>
      )}

      {/* Key constraint callout */}
      <div style={{
        background: SAGE_LIGHT,
        border: `1px solid ${SAGE_MID}`,
        borderRadius: 10,
        padding: "12px 16px",
        marginBottom: 20
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: SAGE, marginBottom: 6 }}>
          The constraint that drove everything
        </div>
        <div style={{ fontSize: 12, color: DARK, lineHeight: 1.6 }}>
          Safeguarding requirements meant no student PII could be stored at any point. Rather than treating this as a limitation, the spec defined an anonymised-by-design architecture from the start. The constraint simplified the system and made school deployment significantly easier.
        </div>
      </div>

      {/* Tech stack badges */}
      <div>
        <div style={{ fontSize: 12, color: GRAY, marginBottom: 6, fontWeight: 600 }}>Built with</div>
        <div>
          <Badge text="React" />
          <Badge text="Node.js" />
          <Badge text="PostgreSQL" />
          <Badge text="Claude Code" />
          <Badge text="Cursor" />
        </div>
      </div>
    </div>
  );
}
