export interface Contributor {
  rank: number;
  name: string;
  amount: string;
  badge: string;
  avatar: string;
}

export const leaderboardData: Contributor[] = [
  {
    rank: 1,
    name: 'Alto',
    amount: '5K',
    badge: 'bg-emerald-400',
    avatar: '/images/crown-icon.png',
  },
  {
    rank: 2,
    name: 'Smith',
    amount: '4K',
    badge: 'bg-yellow-300',
    avatar: '/images/find-image',
  },
  {
    rank: 3,
    name: 'Chriss',
    amount: '1K',
    badge: 'bg-pink-400',
    avatar: '/images/find-image',
  },
  {
    rank: 4,
    name: 'Someone',
    amount: '500',
    badge: 'bg-blue-400',
    avatar: '/images/find-image',
  },
  {
    rank: 5,
    name: 'Someone',
    amount: '0',
    badge: 'bg-purple-400',
    avatar: '/images/find-image',
  },
  {
    rank: 6,
    name: 'You',
    amount: '0',
    badge: 'bg-pink-400',
    avatar: '/images/find-image',
  },
];

export const campaignInfo = {
  title: 'Leaderboard',
  dateRange: 'September 1st - 6th',
};
