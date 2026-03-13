# AI Sentiment Analysis Web App

## Tên đề bài
Đề 5: Phân Tích Cảm Xúc Phản Hồi Khách Hàng

## Mô tả
Ứng dụng web đơn giản giúp phân tích cảm xúc phản hồi của khách hàng.

Người dùng nhập phản hồi và hệ thống sẽ phân tích cảm xúc:
- Tích cực
- Tiêu cực
- Trung lập

## Công nghệ sử dụng
HTML  
CSS  
JavaScript  
GitHub  
Vercel  
Docker  

## Demo Website
https://ai-sentiment-analysis-nine.vercel.app

## GitHub Repository
https://github.com/nguyenngocbinhphuong/ai-sentiment-analysis

## Chạy ứng dụng cục bộ

Clone repository

git clone https://github.com/nguyenngocbinhphuong/ai-sentiment-analysis

Mở file

index.html

bằng trình duyệt.

## Chạy bằng Docker

Build Docker image

docker build -t sentiment-app .

Run container

docker run -p 8080:80 sentiment-app

Sau đó mở trình duyệt:

http://localhost:8080

## AI Function

Ứng dụng sử dụng thuật toán phân tích từ khóa đơn giản để mô phỏng chức năng AI Sentiment Analysis.

Lưu ý: Trong môi trường production, API Key không nên được nhúng trực tiếp vào mã nguồn frontend.
