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
    name: 'Chriss',
    amount: '500',
    badge: 'bg-emerald-400',
    avatar: '/images/crown.jpg',
  },
  {
    rank: 2,
    name: 'Someone',
    amount: '200',
    badge: 'bg-yellow-300',
    avatar: '/images/find-image',
  },
  {
    rank: 3,
    name: 'someone',
    amount: '0',
    badge: 'bg-pink-400',
    avatar: '/images/find-image',
  },
  {
    rank: 4,
    name: 'Someone',
    amount: '0',
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
  dateRange: 'October 3rd - 10th',
};
