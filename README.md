# kqbd-Funr
Xây dựng web kết quả bóng đá bằng Node.js giống website: https://cubabevcorp.com

## Giới thiệu
Dự án này là phiên bản mẫu bằng Node.js với Express + EJS, tập trung vào các tính năng chính của một website bóng đá:
- Trang chủ hiển thị trận đang diễn ra, kết quả mới nhất và tin tức
- Trang lịch thi đấu theo từng giải
- Trang bảng xếp hạng
- Trang chi tiết bài viết
- API JSON cho kết quả, BXH và tin tức

## Cài đặt
```bash
npm install
```

## Chạy ứng dụng
```bash
npm start
```

Mở trình duyệt tại: http://localhost:3000

## API
- GET /api/matches
- GET /api/standings
- GET /api/news
