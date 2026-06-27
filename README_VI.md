<p align="center">
  <img src="assets/logo.png" alt="Logo Scribd PDF Downloader" width="128">
</p>

<h1 align="center">Scribd PDF Downloader</h1>

<p align="center">
  <b>Một tiện ích mở rộng Chrome Manifest V3 hiện đại, gọn nhẹ và được tối ưu hóa cao, cho phép tải tài liệu Scribd dưới dạng PDF chất lượng cao hoàn toàn miễn phí.</b>
</p>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  </a>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/Chrome-Manifest%20v3-orange.svg" alt="Chrome MV3">
</p>

<p align="center">
  <a href="./README.md">English</a> | <strong>Tiếng Việt</strong>
</p>

<p align="center">
  <img src="assets/preview.png" alt="Xem trước tiện ích" width="320">
</p>

## Tính năng

- **Tải chỉ với 1 lần nhấp:** Chỉ cần nhấn vào biểu tượng tiện ích trên bất kỳ tài liệu Scribd nào để bắt đầu.
- **Tự động chuyển hướng:** Tự động chuyển các liên kết `/document/...` và `/doc/...` sang giao diện `/embeds/.../content` để tải xuống dễ dàng hơn.
- **Đếm số trang chính xác:** Theo dõi và hiển thị chính xác tổng số trang bằng cách phát hiện động các lớp (`.outer_page` hoặc `.newpage`).
- **Tự động tính kích thước PDF:** Tự động đo kích thước từng trang tài liệu (theo inch) và chèn quy tắc `@page`, giúp file PDF xuất ra giữ nguyên bố cục gốc.
- **Loại bỏ trang trắng thừa:** Đặt lại margin/padding về 0 và ẩn các phần tử tải cuối trang để tránh xuất hiện trang trắng ở cuối PDF.
- **Giao diện tiến trình Glassmorphism:** Hiển thị lớp phủ tối hiện đại với trạng thái tải, phần trăm hoàn thành và số lượng trang.
- **Không bị chặn chuyển hướng:** Sau khi hoàn thành, hiển thị nút **"Quay lại trang tài liệu"**, giúp vượt qua giới hạn chuyển hướng không có thao tác của Chrome.
- **Không cần đăng nhập:** Hoạt động ngay lập tức mà không cần tài khoản Scribd.

## Cài đặt

Đây là tiện ích dạng **unpacked extension**, vì vậy bạn cần cài đặt thủ công trên Google Chrome:

1. Truy cập trang **[Releases](../../releases)** của repository này và tải tệp `scribd-pdf-downloader-v1.0.0.zip` mới nhất.
2. Giải nén tệp ZIP vừa tải về vào một thư mục trên máy tính.
3. Mở Google Chrome và truy cập `chrome://extensions/`.
4. Bật **Developer mode** ở góc trên bên phải.
5. Nhấn **Load unpacked** ở góc trên bên trái.
6. Chọn thư mục vừa giải nén (thư mục chứa tệp `manifest.json`).

## Cách sử dụng

1. Mở bất kỳ trang tài liệu Scribd nào (ví dụ: `https://www.scribd.com/document/123456789/Document-Title`).
2. Nhấn vào biểu tượng **Scribd PDF Downloader** trên thanh công cụ của trình duyệt (nếu chưa thấy, hãy nhấn biểu tượng mảnh ghép để ghim tiện ích).
3. Điều chỉnh thanh **Scroll Delay** (mặc định: 150ms) nếu kết nối Internet của bạn chậm.
4. Nhấn **Start Downloader**.
5. Chờ tiện ích cuộn hết tài liệu và hoàn tất quá trình chuẩn bị.
6. Trong hộp thoại in của Chrome, đặt **Destination** thành **Save as PDF**, sau đó nhấn **Save**.
7. Sau khi hoàn tất, nhấn **Return to Document Page** trên cửa sổ nổi để quay lại trang tài liệu ban đầu.

## Giấy phép

Dự án này được phát hành theo giấy phép MIT. Xem chi tiết trong tệp [LICENSE](LICENSE).

## Tuyên bố miễn trừ trách nhiệm

Tiện ích này chỉ được phát triển cho mục đích học tập và nghiên cứu. Vui lòng tuân thủ luật bản quyền và Điều khoản dịch vụ của Scribd. Chỉ tải xuống những tài liệu mà bạn có quyền truy cập.
