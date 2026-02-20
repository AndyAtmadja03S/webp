'use client'

import { useEffect, useState } from "react"

const api = "https://leetcode-api-pied.vercel.app/user/ilikekimchiiiz123"

const TOTAL = { Easy: 849, Medium: 1788, Hard: 775 }
const COLORS = { Easy: "#00b8a3", Medium: "#ffc01e", Hard: "#ff375f" }
const BG = { Easy: "#003b36", Medium: "#3d2e00", Hard: "#3d0014" }

function DonutRing({ solved, total, color, bgColor, radius, strokeWidth, cx, cy }) {
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(solved / total, 1)
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(progress), 200)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <>
      <circle
        cx={cx} cy={cy} r={radius}
        fill="none"
        stroke={bgColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={cx} cy={cy} r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - animated)}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
      />
    </>
  )
}

export default function LeetcodeSection() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(api)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const stats = data?.submitStats?.acSubmissionNum
  const easy = stats?.find(s => s.difficulty === "Easy")?.count ?? 0
  const medium = stats?.find(s => s.difficulty === "Medium")?.count ?? 0
  const hard = stats?.find(s => s.difficulty === "Hard")?.count ?? 0
  const total = stats?.find(s => s.difficulty === "All")?.count ?? 0
  const totalAll = TOTAL.Easy + TOTAL.Medium + TOTAL.Hard

  const cx = 100, cy = 100

  return (
    <div style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#1a1a1a",
      borderRadius: "16px",
      padding: "24px",
      gap: "20px",
      fontFamily: "'SF Mono', 'Fira Code', monospace",
      minWidth: "280px",
      boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
    }}>
      {/* Wheel */}
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* Outer: Hard */}
          <DonutRing solved={hard} total={TOTAL.Hard} color={COLORS.Hard} bgColor={BG.Hard} radius={88} strokeWidth={10} cx={cx} cy={cy} />
          {/* Middle: Medium */}
          <DonutRing solved={medium} total={TOTAL.Medium} color={COLORS.Medium} bgColor={BG.Medium} radius={74} strokeWidth={10} cx={cx} cy={cy} />
          {/* Inner: Easy */}
          <DonutRing solved={easy} total={TOTAL.Easy} color={COLORS.Easy} bgColor={BG.Easy} radius={60} strokeWidth={10} cx={cx} cy={cy} />
        </svg>

        {/* Center text */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 2,
        }}>
          {loading ? (
            <span style={{ color: "#888", fontSize: 13 }}>...</span>
          ) : (
            <>
              <span style={{ color: "#fff", fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{total}</span>
              <span style={{ color: "#888", fontSize: 11 }}>/ {totalAll}</span>
              <span style={{ color: "#888", fontSize: 10, marginTop: 2 }}>Solved</span>
            </>
          )}
        </div>
      </div>

      {/* Stats rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
        {[
          { label: "Easy", solved: easy, total: TOTAL.Easy, color: COLORS.Easy },
          { label: "Medium", solved: medium, total: TOTAL.Medium, color: COLORS.Medium },
          { label: "Hard", solved: hard, total: TOTAL.Hard, color: COLORS.Hard },
        ].map(({ label, solved, total: t, color }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color, fontSize: 12, fontWeight: 600, width: 48 }}>{label}</span>
            <div style={{ flex: 1, height: 4, background: "#2a2a2a", borderRadius: 2, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${(solved / t) * 100}%`,
                background: color,
                borderRadius: 2,
                transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
              }} />
            </div>
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, width: 28, textAlign: "right" }}>{solved}</span>
            <span style={{ color: "#555", fontSize: 11, width: 38 }}>/{t}</span>
          </div>
        ))}
      </div>

      {/* Acceptance rate */}
      <div style={{ color: "#555", fontSize: 11, textAlign: "center" }}>
        Acceptance rate:{" "}
        <span style={{ color: "#888" }}>
          {data
            ? `${((data.submitStats.acSubmissionNum.find(s => s.difficulty === "All")?.count ?? 0) /
              (data.submitStats.totalSubmissionNum.find(s => s.difficulty === "All")?.count ?? 1) * 100).toFixed(1)}%`
            : "—"}
        </span>
      </div>
    </div>
  )
}