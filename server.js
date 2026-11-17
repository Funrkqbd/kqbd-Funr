const express = require('express');
const path = require('path');
const { matches, standings, news, leagues } = require('./data/sportsData');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.locals.siteName = 'KQBD Funr';

app.get('/', (req, res) => {
  const liveMatches = matches.filter((match) => match.status === 'Live');
  res.render('home', {
    title: 'Trang chủ',
    matches,
    liveMatches,
    standings,
    news,
    leagues
  });
});

app.get('/matches', (req, res) => {
  const selectedLeague = req.query.league || 'All';
  const data = selectedLeague === 'All'
    ? matches
    : matches.filter((match) => match.league === selectedLeague);

  res.render('matches', {
    title: 'Lịch thi đấu',
    matches: data,
    leagues,
    selectedLeague
  });
});

app.get('/standings', (req, res) => {
  const table = [...standings].sort((a, b) => b.points - a.points || b.gd - a.gd);
  res.render('standings', {
    title: 'BXH',
    standings: table
  });
});

app.get('/news/:slug', (req, res) => {
  const article = news.find((item) => item.slug === req.params.slug);

  if (!article) {
    return res.status(404).render('404', { title: 'Không tìm thấy bài viết' });
  }

  res.render('news', {
    title: article.title,
    article,
    related: news.filter((item) => item.slug !== article.slug).slice(0, 2)
  });
});

app.get('/api/matches', (req, res) => {
  res.json(matches);
});

app.get('/api/standings', (req, res) => {
  res.json(standings);
});

app.get('/api/news', (req, res) => {
  res.json(news);
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Không tìm thấy trang' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
