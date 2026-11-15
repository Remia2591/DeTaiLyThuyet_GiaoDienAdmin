/* loai: so = Sổ tay | but = Bút | dungcu = Dụng cụ | qua = Quà lưu niệm | combo = Combo */
var SAN_PHAM = [
    {
        ma: "1", ten: "Sổ tay bìa da A5", loai: "so", gia: 89000, giaGoc: 119000, daBan: 120, hinh: "1.jpg",
        thuongHieu: "Gift Classic", chatLieu: "Bìa giả da PU, ruột giấy 100gsm", kichThuoc: "14,8 x 21 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 240,
        mota: "Sổ tay bìa da A5 sang trọng, giấy dày không lem mực.",
        dacDiem: ["Bìa giả da PU mềm, chống nước nhẹ", "192 trang giấy kem dịu mắt, định lượng 100gsm", "Dây thun cài và dây đánh dấu trang tiện dụng", "Gáy may chắc chắn, mở phẳng 180 độ"],
        chiTiet: ["Sổ tay bìa da A5 là lựa chọn quen thuộc của sinh viên và nhân viên văn phòng. Bìa giả da PU màu trầm tạo cảm giác chắc chắn, chuyên nghiệp mỗi khi mở ra ghi chép.", "Ruột sổ dùng giấy kem 100gsm, viết bút gel, bút bi hay bút máy đều không bị lem hoặc thấm sang mặt sau. Gáy sổ được may chỉ nên mở phẳng hoàn toàn.", "Sổ phù hợp ghi chép bài giảng, họp công việc, viết nhật ký hoặc làm quà tặng."]
    },
    {
        ma: "2", ten: "Sổ lò xo Pastel", loai: "so", gia: 59000, giaGoc: 79000, daBan: 85, hinh: "2.jpg",
        thuongHieu: "Pastel Dream", chatLieu: "Bìa nhựa mờ, giấy 80gsm", kichThuoc: "A5 (14,8 x 21 cm)", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 310,
        mota: "Sổ lò xo màu pastel, 120 trang kẻ ngang, bìa nhựa bền đẹp.",
        dacDiem: ["Gáy lò xo kép, lật trang mượt", "120 trang kẻ ngang, giấy trắng 80gsm", "Bìa nhựa mờ chống nước, nhiều màu pastel", "Gọn nhẹ, bỏ vừa balo và túi xách"],
        chiTiet: ["Sổ lò xo Pastel gây ấn tượng bởi dải màu nhẹ nhàng: hồng, xanh, tím và be.", "Gáy lò xo kép giúp gập mặt sau ra phía trước khi viết, tiết kiệm diện tích. Giấy trắng 80gsm kẻ ngang đều.", "Bìa nhựa mờ chống nước, chống trầy nên giữ sổ mới lâu dù mang theo hằng ngày."]
    },
    {
        ma: "3", ten: "Sổ planner 2027", loai: "so", gia: 99000, giaGoc: 129000, daBan: 64, hinh: "3.jpg",
        thuongHieu: "Plan It", chatLieu: "Bìa cứng, giấy 90gsm", kichThuoc: "A5 (14,8 x 21 cm)", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 150,
        mota: "Sổ planner lập kế hoạch theo tuần, tháng và mục tiêu năm 2027.",
        dacDiem: ["Lịch năm, lịch tháng và 52 trang kế hoạch tuần", "Trang mục tiêu, thói quen, theo dõi chi tiêu", "Giấy 90gsm, hạn chế lem mực", "Có kèm bộ sticker đánh dấu"],
        chiTiet: ["Sổ planner 2027 giúp bạn sắp xếp công việc rõ ràng ngay từ đầu năm.", "Phần cuối sổ có các trang theo dõi thói quen, chi tiêu và mục tiêu dài hạn.", "Giấy 90gsm dày vừa phải, kèm sticker để đánh dấu sự kiện quan trọng."]
    },
    {
        ma: "4", ten: "Bộ bút gel 10 màu", loai: "but", gia: 45000, giaGoc: 60000, daBan: 210, hinh: "4.jpg",
        thuongHieu: "Color Pen", chatLieu: "Thân nhựa, mực gel", kichThuoc: "Dài 14 cm, ngòi 0,5 mm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 500,
        mota: "Bộ 10 bút gel nhiều màu, mực ra đều, nét 0,5 mm.",
        dacDiem: ["10 màu tươi rõ, ít lem", "Ngòi 0,5 mm cho nét chữ thanh", "Thân bút tròn, cầm êm tay", "Mực khô nhanh, hợp người viết tay trái"],
        chiTiet: ["Bộ bút gel 10 màu dành cho những ai thích ghi chú nhiều màu, làm mind map hoặc trang trí sổ.", "Ngòi 0,5 mm cho nét chữ mảnh, rõ ràng. Mực gel chảy đều, khô nhanh.", "Bộ bút đựng trong túi trong suốt, tiện mang theo hoặc làm quà tặng."]
    },
    {
        ma: "5", ten: "Bút bi mực đen (hộp 20)", loai: "but", gia: 70000, giaGoc: 90000, daBan: 150, hinh: "5.jpg",
        thuongHieu: "Thiên Long", chatLieu: "Thân nhựa, mực dầu", kichThuoc: "Dài 14,5 cm, ngòi 0,7 mm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 400,
        mota: "Hộp 20 bút bi viết êm tay, mực đều, dùng cho học tập và văn phòng.",
        dacDiem: ["Hộp 20 cây tiết kiệm", "Ngòi bi 0,7 mm trơn tru", "Mực dầu khô nhanh, bền màu", "Nắp bút có kẹp chắc chắn"],
        chiTiet: ["Hộp 20 bút bi dành cho trường học, văn phòng và gia đình.", "Ngòi bi 0,7 mm cho nét chữ rõ ràng, phù hợp viết bài thi, ký giấy tờ.", "Mua theo hộp rẻ hơn mua lẻ, thích hợp cho lớp học hoặc phòng ban."]
    },
    {
        ma: "6", ten: "Bút highlight 6 màu", loai: "but", gia: 39000, giaGoc: 52000, daBan: 98, hinh: "6.jpg",
        thuongHieu: "Soft Mark", chatLieu: "Thân nhựa, mực gốc nước", kichThuoc: "Dài 13,5 cm, đầu hai nét", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 260,
        mota: "Bộ 6 bút dạ quang màu pastel, đầu bút hai nét.",
        dacDiem: ["6 màu pastel dịu mắt", "Một đầu dẹt 4 mm, một đầu nhỏ 1 mm", "Mực gốc nước, không thấm sang trang sau", "Nắp bút có kẹp tránh lăn"],
        chiTiet: ["Bút highlight màu pastel giúp bạn đánh dấu ý chính mà không làm chữ bên dưới bị tối.", "Một đầu dẹt dùng gạch cả dòng, đầu nhỏ dùng gạch chân hoặc ghi chú.", "Phù hợp học bài, ôn thi, đọc tài liệu và trang trí sổ tay."]
    },
    {
        ma: "7", ten: "Hộp bút vải", loai: "dungcu", gia: 55000, giaGoc: 75000, daBan: 77, hinh: "7.jpg",
        thuongHieu: "Gift Classic", chatLieu: "Vải canvas dày, khóa kéo kim loại", kichThuoc: "20 x 9 x 6 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 180,
        mota: "Hộp bút vải dung tích lớn, có khóa kéo bền chắc.",
        dacDiem: ["Vải canvas dày, chống bám bụi", "Dung tích lớn, đựng 30 bút", "Khóa kéo trơn, bền", "Có thể giặt tay"],
        chiTiet: ["Hộp bút vải canvas với dung tích lớn, đựng được bút, thước, gôm và nhiều phụ kiện nhỏ.", "Khóa kéo kim loại trượt êm, đường may chắc nên dùng lâu không bung chỉ.", "Kiểu dáng đơn giản, hợp cho học sinh, sinh viên và nhân viên văn phòng."]
    },
    {
        ma: "8", ten: "Bộ thước kẻ và compa học sinh", loai: "dungcu", gia: 35000, giaGoc: 48000, daBan: 60, hinh: "8.jpg",
        thuongHieu: "Study Set", chatLieu: "Nhựa trong, kim loại", kichThuoc: "Thước 20 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 220,
        mota: "Bộ thước kẻ, êke và compa cho học sinh, sinh viên.",
        dacDiem: ["Gồm thước 20 cm, êke, thước đo độ và compa", "Vạch chia rõ, khó bay màu", "Nhựa trong dẻo, không dễ gãy", "Hộp đựng nhỏ gọn"],
        chiTiet: ["Bộ dụng cụ vẽ hình cơ bản cho môn toán và vẽ kỹ thuật.", "Compa đầu kim loại giữ chắc khi vẽ đường tròn.", "Toàn bộ dụng cụ được đựng trong hộp nhựa nhỏ gọn nên dễ mang theo."]
    },
    {
        ma: "9", ten: "Bấm kim và kẹp giấy", loai: "dungcu", gia: 65000, giaGoc: 85000, daBan: 43, hinh: "9.jpg",
        thuongHieu: "Office Pro", chatLieu: "Kim loại sơn tĩnh điện", kichThuoc: "Bấm kim 14 cm", xuatXu: "Trung Quốc", baoHanh: "Bảo hành 3 tháng", tonKho: 130,
        mota: "Bộ bấm kim kèm kẹp giấy nhiều kích cỡ cho văn phòng.",
        dacDiem: ["Bấm tối đa 20 tờ A4 mỗi lần", "Kèm 1 hộp kim số 10 và 100 kẹp giấy", "Thân kim loại, lò xo chắc", "Đế cao su chống trượt"],
        chiTiet: ["Bộ dụng cụ đóng tài liệu cơ bản cho mọi văn phòng.", "Kẹp giấy nhiều kích cỡ giúp phân loại hồ sơ gọn gàng, kèm sẵn kim số 10.", "Thân bằng kim loại sơn tĩnh điện, đế cao su chống trượt."]
    },
    {
        ma: "10", ten: "Móc khóa gấu bông", loai: "qua", gia: 49000, giaGoc: 65000, daBan: 132, hinh: "10.jpg",
        thuongHieu: "Bunny Gift", chatLieu: "Bông gòn, vải nhung", kichThuoc: "Cao 10 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 350,
        mota: "Móc khóa gấu bông nhỏ xinh, dùng làm quà tặng.",
        dacDiem: ["Vải nhung mềm, bông gòn dày", "Khóa móc kim loại không gỉ", "Có thể treo balo, chìa khóa, túi xách", "Đóng gói kèm túi quà"],
        chiTiet: ["Móc khóa gấu bông cao khoảng 10 cm, lông mềm và mịn.", "Phần khóa móc làm bằng kim loại không gỉ, đường may chắc chắn.", "Sản phẩm đi kèm túi quà nhỏ, thích hợp tặng bạn bè."]
    },
    {
        ma: "11", ten: "Cốc sứ có nắp", loai: "qua", gia: 120000, giaGoc: 160000, daBan: 58, hinh: "11.jpg",
        thuongHieu: "Lucky Cup", chatLieu: "Sứ cao cấp, nắp sứ, thìa inox", kichThuoc: "Dung tích 400 ml", xuatXu: "Việt Nam", baoHanh: "Đổi trả 1 đổi 1 nếu nứt vỡ do vận chuyển", tonKho: 90,
        mota: "Cốc sứ có nắp và thìa inox, hợp làm quà tặng.",
        dacDiem: ["Sứ trắng dày, giữ nhiệt tốt", "Có nắp đậy và thìa inox", "Dung tích 400 ml", "Dùng được cho lò vi sóng"],
        chiTiet: ["Cốc sứ trắng dày, đi kèm nắp đậy và thìa inox dài.", "Dung tích 400 ml vừa đủ cho cà phê, trà hoặc sữa nóng.", "Đóng gói hộp cứng có lớp lót chống va đập."]
    },
    {
        ma: "12", ten: "Hộp quà mini", loai: "qua", gia: 79000, giaGoc: 105000, daBan: 91, hinh: "12.jpg",
        thuongHieu: "Bunny Gift", chatLieu: "Giấy cứng, ruy băng satin", kichThuoc: "15 x 12 x 6 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 200,
        mota: "Hộp quà mini kèm thiệp, nhiều màu.",
        dacDiem: ["Hộp giấy cứng, nắp đóng chắc", "Kèm thiệp và ruy băng", "Nhiều màu để chọn", "Có thể tự bỏ quà vào bên trong"],
        chiTiet: ["Hộp quà mini giấy cứng, kèm ruy băng satin và thiệp nhỏ để ghi lời chúc.", "Kích thước vừa để đựng móc khóa, sổ nhỏ, bút hoặc phụ kiện.", "Phù hợp tặng bạn bè, đồng nghiệp trong các dịp đặc biệt."]
    },
    {
        ma: "101", ten: "Combo Back to School", loai: "combo", gia: 150000, giaGoc: 200000, daBan: 75, hinh: "101.jpg",
        thuongHieu: "Gift Shop", chatLieu: "Nhiều chất liệu", kichThuoc: "Hộp 25 x 18 x 8 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 120,
        gom: ["1 sổ lò xo Pastel", "1 bộ bút gel 10 màu", "1 bút highlight 6 màu", "1 hộp bút vải", "1 bộ thước kẻ"],
        mota: "Combo Back to School: sổ, bút và dụng cụ học tập cho năm học mới.",
        dacDiem: ["Đầy đủ dụng cụ khởi đầu năm học", "Tiết kiệm hơn mua lẻ 25%", "Đóng gói hộp gọn, tiện tặng", "Phù hợp học sinh cấp 2, cấp 3"],
        chiTiet: ["Combo Back to School gom sẵn những vật dụng cần thiết nhất cho năm học mới.", "Tất cả sản phẩm trong combo đều là hàng chọn lọc, phối màu hài hòa.", "Mua theo combo giúp tiết kiệm khoảng 25% so với mua lẻ."]
    },
    {
        ma: "102", ten: "Combo Văn phòng", loai: "combo", gia: 180000, giaGoc: 240000, daBan: 52, hinh: "102.jpg",
        thuongHieu: "Gift Shop", chatLieu: "Nhiều chất liệu", kichThuoc: "Hộp 28 x 20 x 9 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 100,
        gom: ["1 sổ tay bìa da A5", "1 hộp bút bi 20 cây", "1 bấm kim và kẹp giấy", "1 sổ planner 2027"],
        mota: "Combo Văn phòng: sổ, bút, bấm kim và kẹp giấy.",
        dacDiem: ["Đủ đồ dùng cho bàn làm việc", "Tiết kiệm hơn mua lẻ 25%", "Phong cách tối giản, chuyên nghiệp", "Thích hợp tặng đồng nghiệp"],
        chiTiet: ["Combo Văn phòng gồm các món cơ bản cho một bàn làm việc gọn gàng.", "Màu sắc đơn giản, chuyên nghiệp, phù hợp mọi môi trường làm việc.", "Là lựa chọn tốt khi cần trang bị cho nhân viên mới hoặc tặng đồng nghiệp."]
    },
    {
        ma: "103", ten: "Combo Quà tặng", loai: "combo", gia: 200000, giaGoc: 260000, daBan: 66, hinh: "103.jpg",
        thuongHieu: "Bunny Gift", chatLieu: "Nhiều chất liệu", kichThuoc: "Hộp 30 x 22 x 10 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả 1 đổi 1 nếu nứt vỡ do vận chuyển", tonKho: 80,
        gom: ["1 hộp quà cứng có túi", "1 cốc sứ có nắp và thìa", "1 móc khóa gấu bông", "1 thiệp chúc mừng"],
        mota: "Combo quà tặng: hộp quà, cốc sứ, móc khóa gấu bông.",
        dacDiem: ["Gói sẵn, tặng ngay không cần chuẩn bị", "Kèm túi giấy và thiệp", "Phù hợp sinh nhật, kỷ niệm, 20/10, 20/11", "Tiết kiệm hơn mua lẻ 23%"],
        chiTiet: ["Combo Quà tặng được sắp xếp sẵn trong hộp cứng, kèm túi giấy và thiệp.", "Cốc sứ có nắp, móc khóa gấu bông và phụ kiện nhỏ tạo thành bộ quà hài hòa.", "Sản phẩm được đóng gói chống va đập, đảm bảo nguyên vẹn khi nhận."]
    },
    {
        ma: "104", ten: "Combo Sinh viên", loai: "combo", gia: 120000, giaGoc: 160000, daBan: 88, hinh: "104.jpg",
        thuongHieu: "Gift Shop", chatLieu: "Nhiều chất liệu", kichThuoc: "Hộp 24 x 17 x 7 cm", xuatXu: "Việt Nam", baoHanh: "Đổi trả trong 7 ngày", tonKho: 140,
        gom: ["1 sổ lò xo A5", "1 bộ bút gel 10 màu", "1 bút highlight", "1 hộp bút vải"],
        mota: "Combo Sinh viên: sổ lò xo, bút và hộp bút tiết kiệm.",
        dacDiem: ["Giá mềm cho sinh viên", "Đủ đồ ghi bài và ôn thi", "Màu sắc trẻ trung", "Tiết kiệm hơn mua lẻ 25%"],
        chiTiet: ["Combo Sinh viên gồm những món thiết yếu để ghi bài và ôn thi cả học kỳ.", "Giá được tính thấp hơn mua lẻ nên phù hợp ngân sách sinh viên.", "Màu sắc trẻ trung, dễ phối với bàn học và balo."]
    }
];

var TEN_LOAI = { so: "Sổ tay", but: "Bút", dungcu: "Dụng cụ", qua: "Quà lưu niệm", combo: "Combo" };

/* ===================== HÀM CHUNG ===================== */
function doc(khoa, macDinh) {
    try { var v = localStorage.getItem(khoa); return v ? JSON.parse(v) : macDinh; }
    catch (e) { return macDinh; }
}
function ghi(khoa, giaTri) { localStorage.setItem(khoa, JSON.stringify(giaTri)); }
function dinhDang(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ"; }
function layThamSo(ten) { return new URLSearchParams(location.search).get(ten); }
function an(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function timSP(ma) {
    for (var i = 0; i < SAN_PHAM.length; i++) if (SAN_PHAM[i].ma == ma) return SAN_PHAM[i];
    return null;
}
function layDS(laCombo) {
    var kq = [];
    for (var i = 0; i < SAN_PHAM.length; i++) if ((SAN_PHAM[i].loai == "combo") == laCombo) kq.push(SAN_PHAM[i]);
    return kq;
}
function phanTram(s) { return Math.round((1 - s.gia / s.giaGoc) * 100); }
function diemSao(s) { return (43 + (parseInt(s.ma) % 8)) / 10; }
function soDanhGia(s) { return Math.round(s.daBan * 0.6) + 3; }
function saoChu(d) {
    var n = Math.round(d), t = "";
    for (var i = 1; i <= 5; i++) t += i <= n ? "&#9733;" : "&#9734;";
    return t;
}

/* ===================== GIỎ HÀNG ===================== */
function layGio() {
    var g = doc("gioHang", []), kq = [];
    for (var i = 0; i < g.length; i++) if (timSP(g[i].ma)) kq.push(g[i]);
    return kq;
}
function themGio(ma, sl) {
    var g = layGio(), thay = false;
    for (var i = 0; i < g.length; i++) if (g[i].ma == ma) { g[i].sl += sl; thay = true; }
    if (!thay) g.push({ ma: ma, sl: sl });
    ghi("gioHang", g);
    capNhatDem();
    hienThongBao("Đã thêm vào giỏ hàng");
}
function capNhatDem() {
    var g = layGio(), n = 0;
    for (var i = 0; i < g.length; i++) n += g[i].sl;
    var e = document.getElementById("demGio");
    if (e) e.innerText = n;
}
function hienThongBao(nd) {
    var d = document.createElement("div");
    d.className = "toast";
    d.innerText = nd;
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 1600);
}
function tinhTien(g) {
    var tam = 0;
    for (var i = 0; i < g.length; i++) tam += timSP(g[i].ma).gia * g[i].sl;
    var ma = doc("maGiam", "");
    var phi = (tam >= 250000 || tam == 0) ? 0 : 25000;
    var giam = 0;
    if (ma == "GIFT10") giam = Math.round(tam * 0.1 / 1000) * 1000;
    if (ma == "FREESHIP") phi = 0;
    return { tam: tam, phi: phi, giam: giam, tong: tam + phi - giam, ma: ma };
}

/* ===================== NGƯỜI DÙNG (theo Session của server) ===================== */
function nguoiDangNhap() {
    if (typeof SERVER_USER !== "undefined" && SERVER_USER.dangNhap)
        return { ten: SERVER_USER.hoTen || "Tài khoản", email: SERVER_USER.email };
    return null;
}
function layToken() {
    var e = document.querySelector("#afForm input[name=__RequestVerificationToken]");
    return e ? e.value : "";
}
function guiPost(url, data) {
    var f = new FormData();
    for (var k in data) f.append(k, data[k]);
    f.append("__RequestVerificationToken", layToken());
    return fetch(url, { method: "POST", body: f, credentials: "same-origin" })
        .then(function (r) {
            if (!r.ok) throw new Error("Server báo lỗi " + r.status + " (" + r.statusText + ") tại " + url);
            return r.json();
        })
        .catch(function (e) {
            alert("LỖI: " + e.message);
            return { success: false, message: e.message };
        });
}
function dangXuat() {
    guiPost("Account/DangXuat", {}).then(function () { location.href = "Home/Index"; });
}
function timKiem() {
    var v = document.getElementById("oTim").value.trim();
    location.href = "Product/SanPham" + (v ? "?q=" + encodeURIComponent(v) : "");
    return false;
}

/* ===================== THẺ SẢN PHẨM ===================== */
function veSP(ds, idDiv) {
    var h = "";
    for (var i = 0; i < ds.length; i++) {
        var s = ds[i];
        var rong = Math.min(100, Math.round(s.daBan / 2.5));
        h += '<div class="sp-the">' +
            '<a href="Product/ChiTiet?ma=' + s.ma + '">' +
            '<div class="sp-anh"><img src="Content/images/' + s.hinh + '" alt="' + s.ten + '" onerror="this.style.visibility=\'hidden\'" /></div>' +
            '<div class="sp-ten">' + s.ten + '</div></a>' +
            '<div class="sp-gia"><b>' + dinhDang(s.gia) + '</b><span class="the-giam">-' + phanTram(s) + '%</span></div>' +
            '<div class="gia-cu">' + dinhDang(s.giaGoc) + '</div>' +
            '<div class="sao">' + saoChu(diemSao(s)) + ' <small>(' + soDanhGia(s) + ')</small></div>' +
            '<div class="ban-thanh"><div class="ban-fill" style="width:' + rong + '%"></div><span class="ban-chu">Đã bán ' + s.daBan + '</span></div>' +
            '<button class="sp-nut" onclick="themGio(\'' + s.ma + '\',1)">Thêm vào giỏ</button></div>';
    }
    document.getElementById(idDiv).innerHTML = h;
}

/* ===================== HEADER ===================== */
function veHeader() {
    var u = nguoiDangNhap(), tk;
    if (u) {
        tk = '<div class="hd-item acc"><i>&#128100;</i>' + an(u.ten) +
            '<div class="acc-menu"><a href="Order/DonHang">Đơn hàng của tôi</a>' +
            '<a href="javascript:void(0)" onclick="dangXuat();return false;">Đăng xuất</a></div></div>';
    } else {
        tk = '<a class="hd-item" href="Account/DangNhap"><i>&#128100;</i>Tài khoản</a>';
    }
    var trang = location.pathname.replace(/^\//, "").toLowerCase();
    if (trang == "") trang = "home/index";
    function on(f) { return trang == f.toLowerCase() ? ' class="on"' : ''; }
    document.getElementById("header").innerHTML =
        '<div class="topbanner">SĂN QUÀ HAY - DEAL "VUỲP" NGẬP LỐI <b>ƯU ĐÃI ĐẾN 35%</b> <a class="topbtn" href="Product/SanPham">MUA NGAY &rarr;</a></div>' +
        '<div class="hd"><div class="hd-in">' +
        '<a class="logo" href="Home/Index">Gift<span>Shop</span>.com</a>' +
        '<div class="dm-wrap"><button class="dm-btn">&#9638;&#9662;</button>' +
        '<div class="mega"><h3>Danh mục sản phẩm</h3>' +
        '<a href="Product/SanPham?loai=so">&#128211; Sổ tay</a>' +
        '<a href="Product/SanPham?loai=but">&#9999; Bút</a>' +
        '<a href="Product/SanPham?loai=dungcu">&#128207; Dụng cụ</a>' +
        '<a href="Product/SanPham?loai=qua">&#127873; Quà lưu niệm</a>' +
        '<a href="Home/Combo">&#128717; Combo</a>' +
        '<a href="Product/SanPham">&#9776; Tất cả sản phẩm</a></div></div>' +
        '<form class="timkiem" onsubmit="return timKiem()">' +
        '<input type="text" id="oTim" placeholder="Tìm sổ tay, bút, quà lưu niệm..." />' +
        '<button type="submit">&#128269;</button></form>' +
        '<a class="hd-item" href="Home/LienHe"><i>&#128222;</i>Liên hệ</a>' +
        '<a class="hd-item" href="Cart/GioHang"><i>&#128722;</i>Giỏ Hàng<span class="badge" id="demGio">0</span></a>' +
        tk + '</div>' +
        '<div class="menu-ngang"><div>' +
        '<a href="Home/Index"' + on("home/index") + '>Trang chủ</a>' +
        '<a href="Product/SanPham"' + on("product/sanpham") + '>Sản phẩm</a>' +
        '<a href="Home/Combo"' + on("home/combo") + '>Combo</a>' +
        '<a href="Order/DonHang"' + on("order/donhang") + '>Đơn hàng</a>' +
        '<a href="Home/LienHe"' + on("home/lienhe") + '>Liên hệ</a></div></div></div>';
    capNhatDem();
}

/* ===================== FOOTER ===================== */
function dangKyBanTin() {
    var v = document.getElementById("emailBanTin").value.trim();
    if (v.indexOf("@") < 0) { hienThongBao("Email không hợp lệ"); return; }
    var ds = doc("banTin", []);
    ds.push(v);
    ghi("banTin", ds);
    document.getElementById("emailBanTin").value = "";
    hienThongBao("Đăng ký nhận bản tin thành công");
}
function veFooter() {
    document.getElementById("footer").innerHTML =
        '<div class="bantin"><div><b>&#9993; ĐĂNG KÝ NHẬN BẢN TIN</b>' +
        '<input type="text" id="emailBanTin" placeholder="Nhập địa chỉ email của bạn" />' +
        '<button onclick="dangKyBanTin()">Đăng ký</button></div></div>' +
        '<div class="ft"><div class="ft-in">' +
        '<div><a class="logo" href="' + window.CUSTOMER_HOME_URL + '">Gift<span>Shop</span>.com</a>' +
        '<p>Website bán văn phòng phẩm và quà lưu niệm: sổ tay, bút, dụng cụ học tập, bán lẻ hoặc theo combo.</p>' +
        '<p>Địa chỉ: Thành phố Hồ Chí Minh</p><p>Điện thoại: 0123 456 789</p><p>Email: giftshop@example.com</p>' +
        '<div class="thanhtoan"><span>COD</span><span>Chuyển khoản</span><span>Momo</span><span>ZaloPay</span></div></div>' +
        '<div><h4>Dịch vụ</h4><a href="javascript:void(0)">Điều khoản sử dụng</a><a href="javascript:void(0)">Chính sách bảo mật thông tin cá nhân</a><a href="javascript:void(0)">Chính sách bảo mật thanh toán</a><a href="javascript:void(0)">Giới thiệu Gift Shop</a></div>' +
        '<div><h4>Hỗ trợ</h4><a href="javascript:void(0)">Chính sách đổi - trả - hoàn tiền</a><a href="javascript:void(0)">Chính sách bảo hành - bồi hoàn</a><a href="javascript:void(0)">Chính sách vận chuyển</a><a href="javascript:void(0)">Chính sách khách sỉ</a></div>' +
        '<div><h4>Tài khoản của tôi</h4><a href="Account/DangNhap">Đăng nhập / Tạo mới tài khoản</a><a href="Order/DonHang">Lịch sử mua hàng</a><a href="Cart/GioHang">Giỏ hàng</a><a href="Home/LienHe">Liên hệ</a></div>' +
        '</div><div class="ft-ban">&copy; 2026 Gift Shop. Nhận đặt hàng trực tuyến và giao hàng tận nơi.</div></div>';
}

/* ===================== POPUP ĐĂNG KÝ (trang chủ) ===================== */
function hienPopupDangKy() {
    var p = location.pathname.toLowerCase();
    var laTrangChu = p == "/" || p == "/home" || p == "/home/index";
    if (!laTrangChu || nguoiDangNhap()) return;
    setTimeout(function () {
        var d = document.createElement("div");
        d.className = "pu-nen";
        d.id = "puNen";
        d.onclick = function (e) { if (e.target == d) d.remove(); };
        d.innerHTML = '<div class="pu"><button class="pu-x" onclick="document.getElementById(\'puNen\').remove()">&times;</button>' +
            '<h2>Đăng ký thành viên<br>Mở khóa đặc quyền</h2>' +
            '<div class="pu-ve">+20.000 ĐIỂM THƯỞNG</div>' +
            '<div class="pu-ve">+01 FREESHIP<small>Ưu đãi khi đặt hàng thành công lần đầu tiên</small></div>' +
            '<a class="pu-nut" href="Account/DangNhap">ĐĂNG KÝ NGAY</a></div>';
        document.body.appendChild(d);
    }, 800);
}

/* ===================== NÚT LÊN ĐẦU TRANG ===================== */
function veNutLenDau() {
    var b = document.createElement("button");
    b.className = "len-dau";
    b.innerHTML = "&#8679;";
    b.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
    document.body.appendChild(b);
    window.addEventListener("scroll", function () { b.style.display = window.scrollY > 400 ? "block" : "none"; });
}

veHeader();
veFooter();
hienPopupDangKy();
veNutLenDau();