'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GitHubSection() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
        GitHub Activity
      </h2>

      <div className="relative mb-4">
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="appearance-none px-4 py-1.5 pr-8 rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          {Array.from({ length: currentYear - 2023 }, (_, i) => currentYear - i).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs">▾</span>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-max">
          <GitHubCalendar
            username="AndyAtmadja03S"
            blockSize={10}
            blockMargin={8}
            fontSize={14}
            year={year}
            colorScheme="light"
            showMonthLabels
          />
        </div>
      </div>
    </div>
  );
}