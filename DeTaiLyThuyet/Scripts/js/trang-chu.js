/* ===== Flash sale: 5 sản phẩm lẻ giảm nhiều nhất ===== */
var le = layDS(false).slice();
le.sort(function (a, b) { return phanTram(b) - phanTram(a); });
veSP(le.slice(0, 5), "ds-le");

/* ===== Khung giờ flash sale ===== */
(function () {
    var h = new Date().getHours();
    var batDau = h - (h % 2);
    var t = "";
    for (var k = 0; k < 5; k++) {
        var gio = (batDau + 2 * k) % 24;
        t += '<div class="' + (k == 0 ? "dang" : "") + '">' + (gio < 10 ? "0" : "") + gio + ':00<small>' + (k == 0 ? "Đang bán" : "Sắp diễn ra") + '</small></div>';
    }
    document.getElementById("khungGio").innerHTML = t;
})();

/* ===== Tab theo danh mục ===== */
function chonDM(loai, nut) {
    var cacNut = document.querySelectorAll("#tabDM button");
    for (var i = 0; i < cacNut.length; i++) cacNut[i].classList.remove("on");
    nut.classList.add("on");
    var kq = [];
    for (var j = 0; j < SAN_PHAM.length; j++) if (SAN_PHAM[j].loai == loai) kq.push(SAN_PHAM[j]);
    veSP(kq, "ds-dm");
}
chonDM("so", document.querySelector("#tabDM button"));

/* ===== Combo ===== */
veSP(layDS(true), "ds-combo");

/* ===== Gợi ý cho bạn: xếp theo bán chạy, bấm Xem thêm để hiện thêm ===== */
var tatCaLe = layDS(false).slice();
tatCaLe.sort(function (a, b) { return b.daBan - a.daBan; });
var dangHien = 8;
function veGoiY() {
    veSP(tatCaLe.slice(0, dangHien), "ds-goiy");
    if (dangHien >= tatCaLe.length) document.getElementById("nutXemThem").style.display = "none";
}
function xemThem() { dangHien += 8; veGoiY(); }
veGoiY();

/* ===== Banner: tự chuyển, có nút trái phải và chấm tròn ===== */
var slides = document.querySelectorAll(".slide");
var chams = document.querySelectorAll(".chamtron");
var vt = 0;
function hienSlide(i) {
    slides[vt].classList.remove("hien");
    chams[vt].classList.remove("on");
    vt = (i + slides.length) % slides.length;
    slides[vt].classList.add("hien");
    chams[vt].classList.add("on");
}
function chuyen(d) { hienSlide(vt + d); }
setInterval(function () { chuyen(1); }, 4500);

/* ===== Đồng hồ đếm ngược đến mốc 2 giờ kế tiếp ===== */
function hai(n) { return n < 10 ? "0" + n : n; }
function demNguoc() {
    var bay = new Date();
    var giay = bay.getHours() % 2 * 3600 + bay.getMinutes() * 60 + bay.getSeconds();
    var conLai = 7200 - giay;
    document.getElementById("gio").innerText = hai(Math.floor(conLai / 3600));
    document.getElementById("phut").innerText = hai(Math.floor(conLai % 3600 / 60));
    document.getElementById("giay").innerText = hai(conLai % 60);
}
demNguoc();
setInterval(demNguoc, 1000);