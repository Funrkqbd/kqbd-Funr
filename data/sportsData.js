const matches = [
  {
    id: 1,
    league: 'Premier League',
    home: 'Arsenal',
    away: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    status: 'Live',
    minute: 68,
    kickoff: '18:30',
    stadium: 'Emirates Stadium',
    summary: 'Arsenal đang áp đảo trận đấu nhờ các pha lên bóng sắc sảo.'
  },
  {
    id: 2,
    league: 'Premier League',
    home: 'Liverpool',
    away: 'Manchester City',
    homeScore: 1,
    awayScore: 1,
    status: 'FT',
    minute: 90,
    kickoff: '20:00',
    stadium: 'Anfield',
    summary: 'Hai đội chia điểm sau một trận đấu rất cân bằng.'
  },
  {
    id: 3,
    league: 'La Liga',
    home: 'Real Madrid',
    away: 'Barcelona',
    homeScore: 3,
    awayScore: 2,
    status: 'FT',
    minute: 90,
    kickoff: '22:00',
    stadium: 'Santiago Bernabéu',
    summary: 'Real Madrid thắng sát nút trong một trận El Clásico hấp dẫn.'
  },
  {
    id: 4,
    league: 'Serie A',
    home: 'Juventus',
    away: 'Inter Milan',
    homeScore: 0,
    awayScore: 2,
    status: 'FT',
    minute: 90,
    kickoff: '21:30',
    stadium: 'Allianz Stadium',
    summary: 'Inter Milan kiểm soát tốt thế trận và giành chiến thắng.'
  },
  {
    id: 5,
    league: 'Ligue 1',
    home: 'Paris Saint-Germain',
    away: 'Marseille',
    homeScore: 2,
    awayScore: 0,
    status: 'FT',
    minute: 90,
    kickoff: '19:45',
    stadium: 'Parc des Princes',
    summary: 'PSG tạo ra nhiều cơ hội và giữ sạch lưới.'
  }
];

const standings = [
  { team: 'Arsenal', played: 13, wins: 10, draws: 2, losses: 1, gf: 27, ga: 9, gd: 18, points: 32 },
  { team: 'Liverpool', played: 13, wins: 9, draws: 3, losses: 1, gf: 30, ga: 10, gd: 20, points: 30 },
  { team: 'Manchester City', played: 13, wins: 8, draws: 3, losses: 2, gf: 26, ga: 14, gd: 12, points: 27 },
  { team: 'Chelsea', played: 13, wins: 7, draws: 4, losses: 2, gf: 21, ga: 13, gd: 8, points: 25 },
  { team: 'Real Madrid', played: 12, wins: 9, draws: 1, losses: 2, gf: 30, ga: 12, gd: 18, points: 28 },
  { team: 'Barcelona', played: 12, wins: 8, draws: 2, losses: 2, gf: 24, ga: 10, gd: 14, points: 26 },
  { team: 'Inter Milan', played: 13, wins: 8, draws: 3, losses: 2, gf: 24, ga: 9, gd: 15, points: 27 },
  { team: 'Juventus', played: 13, wins: 7, draws: 3, losses: 3, gf: 19, ga: 11, gd: 8, points: 24 }
];

const news = [
  {
    slug: 'arsenal-nhanh-chong-cua-doi-bong',
    title: 'Arsenal vẫn giữ nhịp đua ngôi đầu nhờ sự ổn định của hàng công',
    category: 'Bóng đá Anh',
    excerpt: 'Một loạt màn trình diễn ấn tượng giúp đội chủ sân Emirates duy trì vị thế dẫn đầu giải đấu.',
    date: '17/11/2026',
    author: 'Phong Vũ'
  },
  {
    slug: 'real-madrid-gap-doi-thu-trong-khu-vuc',
    title: 'Real Madrid tiếp tục rút ngắn khoảng cách với các đối thủ ở La Liga',
    category: 'La Liga',
    excerpt: 'Sau chiến thắng thuyết phục trước Barcelona, Real Madrid đang có phong độ rất cao.',
    date: '16/11/2026',
    author: 'Minh Tuấn'
  },
  {
    slug: 'inter-milan-dan-dau-cho-chi-khuan',
    title: 'Inter Milan rời sân với chiến thắng quan trọng trước Juventus',
    category: 'Serie A',
    excerpt: 'Inter Milan chứng tỏ họ là một trong những ứng cử viên sáng giá cho ngôi vô địch.',
    date: '15/11/2026',
    author: 'Huyền My'
  }
];

const leagues = ['All', 'Premier League', 'La Liga', 'Serie A', 'Ligue 1'];

module.exports = {
  matches,
  standings,
  news,
  leagues
};
