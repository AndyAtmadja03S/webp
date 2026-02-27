'use client'

import { useEffect, useState } from "react"

const api = "https://leetcode-api-pied.vercel.app/user/ilikekimchiiiz123"

const TOTAL = { Easy: 849, Medium: 1788, Hard: 775 }
const COLORS = { Easy: "#00b8a3", Medium: "#ffc01e", Hard: "#ff375f" }
const BG = { Easy: "#e6fffb", Medium: "#fff6d6", Hard: "#ffe3ea" }

type Difficulty = "Easy" | "Medium" | "Hard" | "All"

interface SubmissionStat {
  difficulty: Difficulty
  count: number
}

interface LeetCodeData {
  submitStats?: {
    acSubmissionNum: SubmissionStat[]
  }
}

interface DonutRingProps {
  solved: number
  total: number
  color: string
  bgColor: string
  radius: number
  strokeWidth: number
  cx: number
  cy: number
}

function DonutRing({
  solved,
  total,
  color,
  bgColor,
  radius,
  strokeWidth,
  cx,
  cy,
}: DonutRingProps) {
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
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={bgColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - animated)}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{
          transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </>
  )
}

export default function LeetcodeSection() {
  const [data, setData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(api)
      .then((r) => r.json())
      .then((d: LeetCodeData) => {
        setData(d)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const stats = data?.submitStats?.acSubmissionNum
  console.log(stats)

  const easy =
    stats?.find((s) => s.difficulty === "Easy")?.count ?? 0
  const medium =
    stats?.find((s) => s.difficulty === "Medium")?.count ?? 0
  const hard =
    stats?.find((s) => s.difficulty === "Hard")?.count ?? 0
  const total =
    stats?.find((s) => s.difficulty === "All")?.count ?? 0

  const totalAll = TOTAL.Easy + TOTAL.Medium + TOTAL.Hard

  const cx = 100
  const cy = 100

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="font-bold text-3xl">
        Leetcodes
      </p>
      <div className="relative w-[200px] h-[200px]">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <DonutRing
            solved={hard}
            total={TOTAL.Hard}
            color={COLORS.Hard}
            bgColor={BG.Hard}
            radius={88}
            strokeWidth={10}
            cx={cx}
            cy={cy}
          />
          <DonutRing
            solved={medium}
            total={TOTAL.Medium}
            color={COLORS.Medium}
            bgColor={BG.Medium}
            radius={74}
            strokeWidth={10}
            cx={cx}
            cy={cy}
          />
          <DonutRing
            solved={easy}
            total={TOTAL.Easy}
            color={COLORS.Easy}
            bgColor={BG.Easy}
            radius={60}
            strokeWidth={10}
            cx={cx}
            cy={cy}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          {loading ? (
            <span className="text-gray-400 text-sm">...</span>
          ) : (
            <>
              <span className="text-2xl font-semibold text-black">
                {total}
              </span>
              <span className="text-xs text-gray-400">
                / {totalAll}
              </span>
              <span className="text-[10px] text-gray-400">
                Solved
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}