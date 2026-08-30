'use client';

import Image from 'next/image';
import Link from 'next/link';
import { leaderboardData, campaignInfo } from '@/data/contributors';
import SiteHeader from '../components/SiteHeader';

export default function Leaderboard() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen w-full px-4 py-6 sm:px-6 sm:py-8">

      {/* Hero Section with Avatars - Mobile First */}
      <div className="mb-8 sm:mb-12">
        <div className="relative mx-auto max-w-sm">
          {/* Dark gradient background card */}
          <div className="rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
            </div>

            {/* Avatar Container */}
            <div className="relative flex justify-start items-center gap-4 sm:gap-6 h-32 sm:h-40 mb-4 sm:mb-6 pl-4 sm:pl-6">
              {/* Center Avatar (Rank 1) - Larger */}
              <div className="flex flex-col items-center z-10">
                <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full border-4 border-emerald-400 bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-2xl">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-slate-800 flex items-center justify-center">
                    <Image
                    src={leaderboardData[0].avatar}
                    alt={leaderboardData[0].name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                <div className="absolute bottom-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-400 rounded-full border-4 border-emerald-300 flex items-center justify-center font-bold text-black text-lg sm:text-xl shadow-lg">
                  1
                </div>
              </div>
              
              {/* Contributor Info */}
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white">
                  {leaderboardData[0].name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-black text-emerald-400">
                    {leaderboardData[0].amount} RWF
                  </span>
                  <span className="text-lg sm:text-xl">🦋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Card - Mobile First */}
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden">
          {/* Leaderboard Entries */}
          <div className="divide-y divide-gray-100">
            {leaderboardData.slice(1).map((entry) => (
              <div
                key={entry.rank}
                className="px-6 sm:px-8 py-4 sm:py-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Rank Badge and Name */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div
                      className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${entry.badge} flex items-center justify-center font-bold text-black text-lg sm:text-xl shadow-lg`}
                    >
                      {entry.rank}
                    </div>
                    <span className="font-bold text-slate-900 text-sm sm:text-base truncate">
                      {entry.name}
                    </span>
                  </div>

                  {/* Amount */}
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <span className="font-black text-slate-900 text-base sm:text-lg">
                      {entry.amount}
                    </span>
                    <span className="text-emerald-400 text-base sm:text-lg">🦋</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center">
              <span className="text-gray-400 text-xs sm:text-sm font-medium">
                {campaignInfo.dateRange}
              </span>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-6 sm:px-8 py-4 sm:py-6 text-center">
            <Link href="/">
              <button className="w-full bg-blue-500 text-white font-bold py-3 sm:py-4 rounded-lg hover:shadow-lg transition-all active:scale-95 text-base sm:text-lg">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Safe Area Padding */}
      <div className="h-6 sm:h-8" />
      </main>
    </>
  );
}