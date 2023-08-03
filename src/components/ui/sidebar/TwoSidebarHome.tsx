import { Divider } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface list {
  label: string;
  link: string;
}

const list: list[] = [
  { label: 'pebl — a free cloud platform!', link: '/home' },
  {
    label:
      '🚀Taking Observability to the Next Level:\n' +
      "Explore New Relic's Free Tier for",
    link: '/home',
  },
  {
    label:
      'How we run hackathons inside Discord\n' +
      'at Autocode',
    link: '/home',
  },
  {
    label:
      '🚀Taking Observability to the Next Level:\n' +
      "Explore New Relic's Free Tier for",
    link: '/home',
  },
  {
    label:
      '🚀 Build your first app with React &\n' +
      'Next.js! Start the online course for free\n' +
      'today!',
    link: '/home',
  },
  {
    label:
      'Open source APM: OpenTelemetry\n' +
      'traces, metrics, and logs',
    link: '/home',
  },
];
const TwoSidebarHome: FC = () => {
  return (
    <div className="bg-white rounded-[4px]">
      <div className="flex justify-between py-3 px-4 items-center">
        <h3 className="font-bold">List</h3>
        <p className="text-xs text-blue">See all</p>
      </div>
      <Divider variant="middle" light />
      <ul>
        {list.map((item) => (
          <>
            <li key={item.label} className="py-4 px-4">
              <Link href={item.label}>{item.label}</Link>
            </li>
            <Divider variant="middle" light />
          </>
        ))}
      </ul>
    </div>
  );
};

export default TwoSidebarHome;
