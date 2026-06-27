[🇺🇸 English](./README.md) | 🇻🇳 Tiếng Việt

# Scribd PDF Downloader - Chrome Extension (Tiếng Việt)

Một tiện ích mở rộng Chrome (Manifest V3) hiện đại, sạch sẽ và tối ưu hóa để tải tài liệu Scribd dưới dạng PDF chất lượng cao hoàn toàn miễn phí.

Extension tự động chuyển hướng các trang tài liệu thường sang liên kết nhúng sạch, tự động cuộn trang để tải tất cả hình ảnh, tài nguyên SVG, công thức toán học MathJax/LaTeX, áp dụng căn lề chính xác bằng CSS, và kích hoạt trình in PDF mặc định của Chrome.

---

## Tính năng nổi bật

- **Tải xuống 1-Click:** Chỉ cần nhấp vào biểu tượng Extension trên bất kỳ trang tài liệu Scribd nào để bắt đầu.
- **Tự động chuyển hướng:** Tự động phát hiện và chuyển các trang tài liệu dạng thường (`/document/...` và `/doc/...`) sang giao diện nhúng sạch (`/embeds/.../content`).
- **Bộ đếm trang chính xác:** Nhận diện và đếm chính xác số lượng trang bằng cách phát hiện các thẻ wrapper thực tế (`.outer_page` hoặc `.newpage`), khắc phục triệt để lỗi đếm trùng lặp.
- **Khổ trang in động (Dynamic CSS Sizing):** Tự động đo kích thước trang tài liệu theo inch và tiêm cấu hình `@page` tương ứng, giúp file PDF xuất ra khớp hoàn hảo với bố cục tài liệu gốc.
- **Loại bỏ trang trắng thừa:** Reset toàn bộ lề/khoảng đệm của container về 0 và ẩn các thẻ tải ngầm, đảm bảo không tạo ra trang trắng trống ở cuối PDF.
- **Giao diện Glassmorphism hiện đại:** Màn hình chờ Dark Mode mờ ảo hiển thị trạng thái, phần trăm tiến trình, và số trang đang xử lý.
- **Vượt rào chặn chuyển hướng:** Hiển thị nút "Quay lại trang tài liệu" thủ công sau khi in xong để vượt qua cơ chế bảo mật chống tự động chuyển hướng khi chưa có tương tác của Chrome.
- **Không cần đăng nhập:** Sử dụng ngay lập tức mà không cần tài khoản Scribd.

---

## Hướng dẫn cài đặt

Vì đây là tiện ích chưa đóng gói (unpacked), bạn có thể cài đặt thủ công vào Google Chrome theo các bước sau:

1. Truy cập vào trang **[Releases](../../releases)** của kho lưu trữ này và tải về tệp tin `scribd-pdf-downloader-v1.0.0.zip` mới nhất.
2. Giải nén tệp ZIP vừa tải về thành một thư mục trên máy tính của bạn.
3. Mở trình duyệt Google Chrome và truy cập vào đường dẫn: `chrome://extensions/`.
4. Bật **Chế độ dành cho nhà phát triển** (Developer mode) ở góc trên cùng bên phải.
5. Nhấp vào nút **Tải tiện ích đã giải nén** (Load unpacked) ở góc trên cùng bên trái.
6. Chọn thư mục đã giải nén (thư mục này chứa tệp `manifest.json`).

---

## Hướng dẫn sử dụng

1. Truy cập vào bất kỳ trang tài liệu Scribd nào (Ví dụ: `https://www.scribd.com/document/123456789/Document-Title`).
2. Nhấp vào biểu tượng tiện ích **Scribd PDF Downloader** trên thanh công cụ của trình duyệt (bạn có thể nhấn vào biểu tượng mảnh ghép để ghim nó ra ngoài).
3. (Tùy chọn) Điều chỉnh thanh **Scroll Delay** (Thời gian chờ cuộn, mặc định là 150ms) nếu mạng của bạn yếu.
4. Nhấp vào nút **Start Downloader**.
5. Đợi tiện ích tự động cuộn trang và tải toàn bộ dữ liệu.
6. Tại hộp thoại in của Chrome, đảm bảo phần **Máy in đích** (Destination) chọn là **Lưu dưới dạng PDF** (Save as PDF), sau đó bấm **Lưu** (Save).
7. Nhấp vào nút **Return to Document Page** trên màn hình chờ để quay lại trang tài liệu ban đầu.

---

## Giấy phép

Dự án này được cấp phép theo các điều khoản của Giấy phép MIT - xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.

---

## Tuyên bố từ chối trách nhiệm

Tiện ích này chỉ được phát triển cho mục đích giáo dục và học tập. Vui lòng tôn trọng quyền sở hữu trí tuệ và Điều khoản dịch vụ của Scribd. Chỉ tải xuống các tài liệu mà bạn có quyền truy cập hợp pháp.
