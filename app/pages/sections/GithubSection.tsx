'use client';

import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GitHubSection() {
  return (
    <div className="w-full max-w-full">
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
        GitHub Activity
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-max">
          <GitHubCalendar
            username="AndyAtmadja03S"
            blockSize={10}
            blockMargin={8}
            fontSize={14}
            year={2026}
            colorScheme="light"
            showMonthLabels
          />
        </div>
      </div>
    </div>
  );
}