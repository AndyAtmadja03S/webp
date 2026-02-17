'use client';

import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () =>
    import('react-github-calendar').then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function GitHubSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">GitHub Activity</h2>

      <GitHubCalendar
        username="AndyAtmadja03S"
        blockSize={10}
        blockMargin={8}
        fontSize={14}
        year={2026}
        colorScheme='light'
        showMonthLabels={true}
      />
    </div>
  );
}
