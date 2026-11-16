-- ==============================================================
-- GIFT SHOP DATABASE - SQL SERVER / SSMS
-- Nguon du lieu: DeTaiLyThuyet_GiftShop-master.zip
-- San pham va danh muc lay dung tu Scripts/js/main.js
-- Bang nghiep vu (tai khoan, gio, don hang, lien he) duoc de xuat
-- dua tren cac giao dien va truong localStorage trong project.
-- Chay toan bo script bang F5 trong SQL Server Management Studio.
-- Khong xoa database / bang / du lieu cu khi chay lai.
-- ==============================================================

IF DB_ID(N'GiftShopDB') IS NULL
BEGIN
    CREATE DATABASE GiftShopDB;
END;
GO
USE GiftShopDB;
GO

-- 1. Danh muc (ma trung voi loai trong JavaScript)
IF OBJECT_ID(N'dbo.DanhMuc', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.DanhMuc
    (
        DanhMucID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_DanhMuc PRIMARY KEY,
        MaLoai NVARCHAR(20) NOT NULL CONSTRAINT UQ_DanhMuc_MaLoai UNIQUE,
        TenDanhMuc NVARCHAR(100) NOT NULL
    );
END;
GO

-- 2. San pham (ID, ten, gia, hinh, mo ta giu nguyen tu main.js)
IF OBJECT_ID(N'dbo.SanPham', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.SanPham
    (
        SanPhamID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_SanPham PRIMARY KEY,
        DanhMucID INT NOT NULL,
        TenSanPham NVARCHAR(200) NOT NULL,
        HinhAnh NVARCHAR(255) NULL,
        Gia DECIMAL(18,2) NOT NULL CONSTRAINT CK_SanPham_Gia CHECK (Gia >= 0),
        MoTa NVARCHAR(MAX) NULL,
        SoLuongTon INT NOT NULL CONSTRAINT DF_SanPham_SoLuongTon DEFAULT (100)
            CONSTRAINT CK_SanPham_SoLuongTon CHECK (SoLuongTon >= 0),
        DangBan BIT NOT NULL CONSTRAINT DF_SanPham_DangBan DEFAULT (1),
        CONSTRAINT FK_SanPham_DanhMuc FOREIGN KEY (DanhMucID)
            REFERENCES dbo.DanhMuc(DanhMucID)
    );
    CREATE INDEX IX_SanPham_DanhMucID ON dbo.SanPham(DanhMucID);
END;
GO

-- 3. Tai khoan khach hang. MatKhauHash phai tao tu ma backend.
-- KHONG luu mat khau dang van ban ro.
IF OBJECT_ID(N'dbo.TaiKhoan', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.TaiKhoan
    (
        TaiKhoanID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_TaiKhoan PRIMARY KEY,
        HoTen NVARCHAR(150) NOT NULL,
        Email NVARCHAR(255) NOT NULL CONSTRAINT UQ_TaiKhoan_Email UNIQUE,
        MatKhauHash NVARCHAR(512) NOT NULL,
        SoDienThoai NVARCHAR(20) NULL,
        DiaChi NVARCHAR(500) NULL,
        VaiTro NVARCHAR(20) NOT NULL CONSTRAINT DF_TaiKhoan_VaiTro DEFAULT (N'KhachHang'),
        NgayTao DATETIME2(0) NOT NULL CONSTRAINT DF_TaiKhoan_NgayTao DEFAULT (SYSDATETIME()),
        DangHoatDong BIT NOT NULL CONSTRAINT DF_TaiKhoan_DangHoatDong DEFAULT (1)
    );
END;
GO

-- 4. Gio hang: gan voi tai khoan hoac session khach vang lai
IF OBJECT_ID(N'dbo.GioHang', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.GioHang
    (
        GioHangID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_GioHang PRIMARY KEY,
        TaiKhoanID INT NULL,
        MaPhien NVARCHAR(100) NULL,
        NgayCapNhat DATETIME2(0) NOT NULL CONSTRAINT DF_GioHang_NgayCapNhat DEFAULT (SYSDATETIME()),
        CONSTRAINT FK_GioHang_TaiKhoan FOREIGN KEY (TaiKhoanID)
            REFERENCES dbo.TaiKhoan(TaiKhoanID),
        CONSTRAINT CK_GioHang_Owner CHECK (
            (TaiKhoanID IS NOT NULL AND MaPhien IS NULL)
            OR (TaiKhoanID IS NULL AND MaPhien IS NOT NULL)
        )
    );
    CREATE UNIQUE INDEX UX_GioHang_TaiKhoanID ON dbo.GioHang(TaiKhoanID)
        WHERE TaiKhoanID IS NOT NULL;
    CREATE UNIQUE INDEX UX_GioHang_MaPhien ON dbo.GioHang(MaPhien)
        WHERE MaPhien IS NOT NULL;
END;
GO

-- 5. Chi tiet gio hang
IF OBJECT_ID(N'dbo.GioHangChiTiet', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.GioHangChiTiet
    (
        GioHangID INT NOT NULL,
        SanPhamID INT NOT NULL,
        SoLuong INT NOT NULL CONSTRAINT CK_GioHangChiTiet_SoLuong CHECK (SoLuong > 0),
        CONSTRAINT PK_GioHangChiTiet PRIMARY KEY (GioHangID, SanPhamID),
        CONSTRAINT FK_GioHangChiTiet_GioHang FOREIGN KEY (GioHangID)
            REFERENCES dbo.GioHang(GioHangID) ON DELETE CASCADE,
        CONSTRAINT FK_GioHangChiTiet_SanPham FOREIGN KEY (SanPhamID)
            REFERENCES dbo.SanPham(SanPhamID)
    );
    CREATE INDEX IX_GioHangChiTiet_SanPhamID ON dbo.GioHangChiTiet(SanPhamID);
END;
GO

-- 6. Don hang: snapshot thong tin giao hang tu giao dien ThanhToan.cshtml
IF OBJECT_ID(N'dbo.DonHang', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.DonHang
    (
        DonHangID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_DonHang PRIMARY KEY,
        -- ID = 1 tuong ung ma hien thi DH1001, ID = 2 -> DH1002
        MaDonHang AS (N'DH' + CONVERT(NVARCHAR(20), (DonHangID + 1000))) PERSISTED,
        TaiKhoanID INT NOT NULL,
        NgayDat DATETIME2(0) NOT NULL CONSTRAINT DF_DonHang_NgayDat DEFAULT (SYSDATETIME()),
        TenNguoiNhan NVARCHAR(150) NOT NULL,
        SoDienThoai NVARCHAR(20) NOT NULL,
        DiaChiGiaoHang NVARCHAR(500) NOT NULL,
        PhuongThucThanhToan NVARCHAR(100) NOT NULL,
        TrangThai NVARCHAR(50) NOT NULL CONSTRAINT DF_DonHang_TrangThai DEFAULT (N'Cho xu ly'),
        TongTien DECIMAL(18,2) NOT NULL CONSTRAINT CK_DonHang_TongTien CHECK (TongTien >= 0),
        CONSTRAINT FK_DonHang_TaiKhoan FOREIGN KEY (TaiKhoanID)
            REFERENCES dbo.TaiKhoan(TaiKhoanID)
    );
    CREATE INDEX IX_DonHang_TaiKhoanID_NgayDat ON dbo.DonHang(TaiKhoanID, NgayDat DESC);
END;
GO

-- 7. Chi tiet don hang: luu gia/ten tai thoi diem mua,
-- khong bi thay doi theo gia san pham ve sau.
IF OBJECT_ID(N'dbo.DonHangChiTiet', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.DonHangChiTiet
    (
        DonHangChiTietID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_DonHangChiTiet PRIMARY KEY,
        DonHangID INT NOT NULL,
        SanPhamID INT NOT NULL,
        TenSanPham NVARCHAR(200) NOT NULL,
        DonGia DECIMAL(18,2) NOT NULL CONSTRAINT CK_DonHangChiTiet_DonGia CHECK (DonGia >= 0),
        SoLuong INT NOT NULL CONSTRAINT CK_DonHangChiTiet_SoLuong CHECK (SoLuong > 0),
        ThanhTien AS (CONVERT(DECIMAL(18,2), DonGia * SoLuong)) PERSISTED,
        CONSTRAINT UQ_DonHangChiTiet_DonHangID_SanPhamID UNIQUE (DonHangID, SanPhamID),
        CONSTRAINT FK_DonHangChiTiet_DonHang FOREIGN KEY (DonHangID)
            REFERENCES dbo.DonHang(DonHangID) ON DELETE CASCADE,
        CONSTRAINT FK_DonHangChiTiet_SanPham FOREIGN KEY (SanPhamID)
            REFERENCES dbo.SanPham(SanPhamID)
    );
END;
GO

-- 8. Tin nhan lien he tu trang LienHe.cshtml
IF OBJECT_ID(N'dbo.LienHe', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.LienHe
    (
        LienHeID INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_LienHe PRIMARY KEY,
        HoTen NVARCHAR(150) NOT NULL,
        Email NVARCHAR(255) NOT NULL,
        NoiDung NVARCHAR(MAX) NOT NULL,
        NgayGui DATETIME2(0) NOT NULL CONSTRAINT DF_LienHe_NgayGui DEFAULT (SYSDATETIME()),
        DaXuLy BIT NOT NULL CONSTRAINT DF_LienHe_DaXuLy DEFAULT (0)
    );
END;
GO

-- Du lieu mau: 5 danh muc (goc tu main.js)
INSERT INTO dbo.DanhMuc (MaLoai, TenDanhMuc)
SELECT v.MaLoai, v.TenDanhMuc
FROM (VALUES
    (N'so', N'Sổ tay'),
    (N'but', N'Bút'),
    (N'dungcu', N'Dụng cụ'),
    (N'qua', N'Quà lưu niệm'),
    (N'combo', N'Combo')
) AS v(MaLoai, TenDanhMuc)
WHERE NOT EXISTS (SELECT 1 FROM dbo.DanhMuc d WHERE d.MaLoai = v.MaLoai);
GO

-- Du lieu mau: 16 san pham goc (12 san pham le + 4 combo)
-- Chi chen san pham chua co ID; chay lai khong tao ban sao.
SET IDENTITY_INSERT dbo.SanPham ON;
INSERT INTO dbo.SanPham (SanPhamID, TenSanPham, HinhAnh, Gia, DanhMucID, MoTa)
SELECT p.SanPhamID, p.TenSanPham, p.HinhAnh, p.Gia, d.DanhMucID, p.MoTa
FROM (VALUES
(1, N'Sổ tay bìa da A5', N'1.jpg', 65000, N'so', N'Bìa da, khổ A5, 200 trang giấy kem.'),
(2, N'Sổ lò xo kẻ ngang', N'2.jpg', 25000, N'so', N'Gáy lò xo, 80 trang kẻ ngang, dễ lật.'),
(3, N'Sổ planner', N'3.jpg', 80000, N'so', N'Sổ lên kế hoạch theo tuần, tháng, có trang mục tiêu.'),
(4, N'Bút bi xanh', N'4.jpg', 5000, N'but', N'Mực xanh, viết êm, ngòi 0.5 mm.'),
(5, N'Bút gel đen', N'5.jpg', 8000, N'but', N'Mực gel đen, nét đều, khô nhanh.'),
(6, N'Bộ bút highlight nhiều màu', N'6.jpg', 45000, N'but', N'Bộ bút dạ quang nhiều màu để đánh dấu ghi chú.'),
(7, N'Hộp bút vải', N'7.jpg', 35000, N'dungcu', N'Hộp bút vải có khóa kéo, đựng được nhiều bút.'),
(8, N'Thước kẻ và Ê-ke', N'8.jpg', 20000, N'dungcu', N'Bộ thước kẻ và ê-ke nhựa trong.'),
(9, N'Kéo và băng keo trang trí', N'9.jpg', 30000, N'dungcu', N'Kéo nhỏ và băng keo họa tiết để trang trí sổ.'),
(10, N'Móc khóa gấu bông', N'10.jpg', 25000, N'qua', N'Móc khóa gấu bông nhỏ xinh, treo túi hoặc chìa khóa.'),
(11, N'Hộp quà mini', N'11.jpg', 40000, N'qua', N'Hộp quà mini, dùng để gói quà tặng.'),
(12, N'Cốc sứ in hình', N'12.jpg', 55000, N'qua', N'Cốc sứ in hình dễ thương, dung tích khoảng 300 ml.'),
(101, N'Combo Back to School', N'101.jpg', 150000, N'combo', N'Combo đồ dùng học tập cho năm học mới: sổ, bút, hộp bút, thước.'),
(102, N'Combo Văn phòng', N'102.jpg', 180000, N'combo', N'Combo cho bàn làm việc: sổ planner, bút, kéo, băng keo.'),
(103, N'Combo Quà tặng', N'103.jpg', 200000, N'combo', N'Combo quà tặng: hộp quà, cốc sứ, móc khóa gấu bông.'),
(104, N'Combo Sinh viên', N'104.jpg', 120000, N'combo', N'Combo cho sinh viên: sổ lò xo, bút bi, bút gel, bút highlight.')
) AS p(SanPhamID, TenSanPham, HinhAnh, Gia, MaLoai, MoTa)
INNER JOIN dbo.DanhMuc AS d ON d.MaLoai = p.MaLoai
WHERE NOT EXISTS (SELECT 1 FROM dbo.SanPham s WHERE s.SanPhamID = p.SanPhamID);
SET IDENTITY_INSERT dbo.SanPham OFF;
GO

-- Kiem tra ket qua
SELECT d.MaLoai, d.TenDanhMuc, COUNT(s.SanPhamID) AS SoSanPham
FROM dbo.DanhMuc AS d
LEFT JOIN dbo.SanPham AS s ON s.DanhMucID = d.DanhMucID
GROUP BY d.MaLoai, d.TenDanhMuc
ORDER BY d.MaLoai;

SELECT s.SanPhamID, s.TenSanPham, s.Gia, s.HinhAnh, d.TenDanhMuc
FROM dbo.SanPham s
JOIN dbo.DanhMuc d ON d.DanhMucID = s.DanhMucID
ORDER BY s.SanPhamID;
GO
