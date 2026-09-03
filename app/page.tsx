'use client';

import Link from 'next/link';
import { useState } from 'react';
import SiteHeader from './components/SiteHeader';

export default function Home() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const donationTiers = [
    { value: '1000', label: '1k RWF'},
    { value: '2000', label: '2k RWF'},
    { value: '3000', label: '3k RWF'},
    { value: '5000', label: '5k RWF'},
    { value: '10000', label: '10k RWF'},
    { value: '15000', label: '15k RWF'},
  ];

  const MOMO_PAY_CODE = '387483';

  const handleDonate = (amount: string) => {
    setSelectedAmount(amount);
    console.log(`Donation amount selected: RWF ${amount}`);
  };

  const initiateUSSDPayment = () => {
    if (!selectedAmount && !customAmount) return;
    
    const amount = customAmount || selectedAmount;
    const ussdCode = `*182*8*1*${MOMO_PAY_CODE}*${amount}#`;
    const telLink = `tel:${ussdCode}`;
    
    // Open phone dialer with USSD code
    window.location.href = telLink;
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen w-full px-4 py-6 sm:px-6 sm:py-8 flex flex-col">

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col mx-auto max-w-md w-full">
        {/* Campaign Info Card */}
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden mb-6 sm:mb-8">
          <div className="px-6 sm:px-8 py-6 sm:py-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base sm:text-lg font-black text-emerald-600">
                  22k / 50k RWF
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-linear-to-r from-emerald-400 to-emerald-500 h-full rounded-full" style={{ width: '44%' }} />
              </div>
            </div>
            <p className="text-center text-xs sm:text-sm text-gray-600">
              44% funded
            </p>
          </div>
        </div>

        {/* Donation Tiers */}
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden mb-6 sm:mb-8">
          <div className="bg-slate-50 px-6 sm:px-8 py-6 sm:py-8 border-b border-gray-100">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Choose Amount
            </h3>
          </div>

          <div className="px-6 sm:px-8 py-6 sm:py-8 grid grid-cols-3 gap-3 sm:gap-4">
            {donationTiers.map((tier) => (
              <button
                key={tier.value}
                onClick={() => handleDonate(tier.value)}
                className={`p-4 sm:p-5 rounded-2xl font-bold text-sm sm:text-base transition-all active:scale-95 border-2 ${
                  selectedAmount === tier.value
                    ? 'border-blue-500 bg-gray-100 text-slate-900 shadow-lg scale-105'
                    : 'border-transparent bg-gray-100 text-slate-900 hover:bg-gray-200'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 border-t border-gray-100">
            <div className="flex gap-2 sm:gap-3 mb-4">
              <div className="flex-1 relative">
                <input
                  type="number"
                  placeholder="Type amount ..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none text-sm sm:text-base font-semibold"
                />
              </div>
              <button
                onClick={() => customAmount && handleDonate(customAmount)}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-yellow-300 text-black font-bold rounded-xl active:scale-95 text-sm sm:text-base"
              >
                Set
              </button>
            </div>
            <button
              onClick={initiateUSSDPayment}
              disabled={!selectedAmount && !customAmount}
              className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base ${
                selectedAmount || customAmount
                  ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Donate Now
            </button>
          </div>
        </div>

        {/* Leaderboard Link */}
        <Link href="/board">
          <button className="w-full rounded-3xl bg-white shadow-2xl px-6 sm:px-8 py-5 sm:py-6 text-center hover:shadow-lg transition-all active:scale-95">
            <p className="text-lg sm:text-xl font-black text-slate-900">
              View Leaderboard
            </p>
          </button>
        </Link>
      </div>

      {/* Mobile Safe Area Padding */}
      <div className="h-6 sm:h-8" />
      </main>
    </>
  );
}
