import { ImageResponse } from "next/og"
import { profile } from "@/data/profile"

export const runtime = "edge"
export const alt = `${profile.name} — ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fbfaf7",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "monospace",
            fontSize: 24,
            color: "#6b6b65",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "3px solid #111111",
              borderRadius: 12,
              padding: "6px 14px",
              background: "#f15bb5",
              color: "#111111",
              fontWeight: 800,
            }}
          >
            {profile.initials}{"//"}LAB
          </div>
          <span>{profile.location}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#4b4b46",
              marginTop: 16,
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 28,
            }}
          >
            {["Web3", "Full-Stack", "Systems (C)", "Bots"].map((tag, i) => {
              const colors = ["#f15bb5", "#00bbf9", "#00f5d4", "#fee440"]
              return (
                <div
                  key={tag}
                  style={{
                    border: "3px solid #111111",
                    background: colors[i],
                    color: "#111111",
                    padding: "8px 16px",
                    borderRadius: 14,
                    fontSize: 24,
                    fontWeight: 800,
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    ),
    size
  )
}