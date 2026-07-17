# ☕ Cà Phê Hôm Nay

**Cà Phê Hôm Nay** là website cập nhật giá cà phê trong nước, giá cà phê thế giới, dữ liệu thị trường, tin tức và kiến thức canh tác dành cho người trồng cà phê, đại lý thu mua, doanh nghiệp và người quan tâm đến ngành cà phê Việt Nam.

🌐 Website chính: [https://caphehomnay.com](https://caphehomnay.com)

---

## Giới thiệu

Website được xây dựng nhằm giúp người dùng:

- Theo dõi giá cà phê hôm nay tại các vùng thu mua trọng điểm.
- Xem biến động giá cà phê trong nước và thế giới.
- Tra cứu giá Robusta London, Arabica New York và Arabica Brazil.
- Cập nhật tin tức, phân tích và diễn biến thị trường cà phê.
- Tham khảo kiến thức trồng, chăm sóc và phát triển cây cà phê.
- Sử dụng các công cụ hỗ trợ tính toán doanh thu.
- Kết nối người mua và người bán thông qua chuyên mục rao vặt.

---

## Nội dung nổi bật

### Giá cà phê trong nước

Cập nhật giá tại các khu vực trọng điểm:

- Đắk Lắk
- Gia Lai
- Lâm Đồng
- Đắk Nông

### Giá cà phê thế giới

Theo dõi các thị trường và sản phẩm tham chiếu:

- Robusta London
- Arabica New York
- Arabica Brazil
- Tỷ giá USD/VND

### Tin tức thị trường

Tổng hợp các nội dung liên quan đến:

- Diễn biến giá cà phê
- Xuất khẩu cà phê
- Nguồn cung và nhu cầu
- Thời tiết tại vùng trồng
- Tỷ giá và các yếu tố kinh tế
- Phân tích xu hướng thị trường

### Cẩm nang nuôi trồng

Chia sẻ kiến thức thực tế về:

- Kỹ thuật trồng cà phê
- Chăm sóc cây cà phê
- Dinh dưỡng và phân bón
- Phòng trừ sâu bệnh
- Chăm sóc sau thu hoạch
- Nâng cao năng suất và chất lượng

### Rao vặt nông sản

Hỗ trợ kết nối nhu cầu:

- Mua bán cà phê
- Mua bán nông sản
- Đăng tin tìm mua
- Đăng tin cần bán

---

## Tính năng của phiên bản GitHub Pages

Phiên bản trong repository này là bản giao diện tĩnh được dựng lại để chạy trên GitHub Pages.

Các tính năng chính:

- Giao diện responsive trên máy tính, máy tính bảng và điện thoại.
- Thanh thông tin giá thị trường.
- Menu điều hướng responsive.
- Biểu đồ biến động giá.
- Thẻ giá theo từng tỉnh.
- Khu vực giá cà phê thế giới.
- Công cụ tính doanh thu tham khảo.
- Khu vực tin tức và cẩm nang.
- Chuyên mục rao vặt.
- Form đăng ký nhận bản tin.
- Các liên kết điều hướng trỏ về website chính.

> Phiên bản GitHub Pages chủ yếu dùng để trình diễn giao diện. Dữ liệu cập nhật trực tiếp và các chức năng nghiệp vụ đầy đủ được cung cấp tại website chính.

---

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript thuần
- SVG
- GitHub Pages
- GitHub Actions

---

## Cấu trúc thư mục

```text
.
├── index.html
├── README.md
├── .nojekyll
├── assets/
│   ├── styles.css
│   └── app.js
└── .github/
    └── workflows/
        └── pages.yml
```

---

## Chạy website trên máy tính

Bạn có thể mở trực tiếp file:

```text
index.html
```

Hoặc chạy bằng một máy chủ cục bộ.

### Sử dụng Python

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

### Sử dụng Visual Studio Code

Cài extension **Live Server**, sau đó nhấn chuột phải vào `index.html` và chọn:

```text
Open with Live Server
```

---

## Triển khai trên GitHub Pages

1. Upload toàn bộ source code vào repository GitHub.
2. Đảm bảo `index.html` nằm ở thư mục gốc.
3. Vào:

```text
Settings → Pages
```

4. Tại **Source**, chọn:

```text
GitHub Actions
```

5. Chờ workflow triển khai hoàn tất trong tab **Actions**.

Website sẽ có địa chỉ dạng:

```text
https://USERNAME.github.io/TEN-REPOSITORY/
```

---

## Cập nhật website

Sau khi thay đổi nội dung hoặc giao diện, chạy:

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Actions sẽ tự động triển khai lại phiên bản mới.

---

## Liên kết chính

- Trang chủ: [https://caphehomnay.com](https://caphehomnay.com)
- Bảng giá cà phê: [https://caphehomnay.com/gia-ca-phe](https://caphehomnay.com/gia-ca-phe)
- Tin tức thị trường: [https://caphehomnay.com/tin-tuc](https://caphehomnay.com/tin-tuc)
- Cẩm nang nuôi trồng: [https://caphehomnay.com/cam-nang](https://caphehomnay.com/cam-nang)
- Rao vặt: [https://caphehomnay.com/rao-vat](https://caphehomnay.com/rao-vat)
- Liên hệ: [https://caphehomnay.com/lien-he](https://caphehomnay.com/lien-he)

---

## Lưu ý về dữ liệu

Thông tin giá và dữ liệu trên phiên bản trình diễn có thể không phản ánh dữ liệu mới nhất tại thời điểm truy cập.

Để xem dữ liệu cập nhật, vui lòng truy cập:

[https://caphehomnay.com](https://caphehomnay.com)

Các nội dung phân tích và công cụ tính toán chỉ mang tính tham khảo, không phải khuyến nghị mua, bán hoặc giữ hàng.

---

## Bản quyền

© 2026 **Cà Phê Hôm Nay**. All rights reserved.

Việc sử dụng lại nội dung, dữ liệu, hình ảnh hoặc thương hiệu cần có sự đồng ý của chủ sở hữu website.
