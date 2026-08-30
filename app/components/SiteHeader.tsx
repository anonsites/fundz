'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const pathname = usePathname();
  const isDonate = pathname === '/';
  const isLeaderboard = pathname === '/board';

  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto max-w-md px-4 py-0">
        <div className="flex">
          <Link href="/" className="flex-1">
            <button
              className={`w-full py-4 px-4 text-center font-black text-sm sm:text-base transition-colors border-b-4 ${
                isDonate
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Donate
            </button>
          </Link>
          <Link href="/board" className="flex-1">
            <button
              className={`w-full py-4 px-4 text-center font-black text-sm sm:text-base transition-colors border-b-4 ${
                isLeaderboard
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Leaderboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
