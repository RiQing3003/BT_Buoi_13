/* * Bài 1: Quản lý tuyển sinh
 * - Đầu vào: Điểm chuẩn, điểm 3 môn, khu vực, đối tượng
 * - Xử lý  :   Tính tổng điểm = điểm 3 môn + điểm khu vực + điểm đối tượng
 *              Kiểm tra đậu/rớt: Nếu có môn nào bị điểm 0 thì rớt, nếu tổng điểm >= điểm chuẩn thì đậu, ngược lại rớt
 * - Đầu ra : Thông báo đậu/rớt và tổng điểm */

let btnTinh_1 = document.getElementById("btnTinh_1");
btnTinh_1.onclick = function () {

    let diemChuan = document.getElementById("diemChuan").value * 1;
    let mon1 = document.getElementById("mon1").value * 1;
    let mon2 = document.getElementById("mon2").value * 1;
    let mon3 = document.getElementById("mon3").value * 1;

    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = document.getElementById("doiTuong").value * 1;

    let diemKhuVuc = 0;
    let diemDoiTuong = 0;

    // Điểm khu vực
    if (khuVuc === "A") {
        diemKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemKhuVuc = 1;
    } else if (khuVuc === "C") {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }

    // Điểm đối tượng
    if (doiTuong === 1) {
        diemDoiTuong = 2.5;
    } else if (doiTuong === 2) {
        diemDoiTuong = 1.5;
    } else if (doiTuong === 3) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }

    let tongDiem = mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong;

    // Kiểm tra đậu/rớt
    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {

        document.getElementById("ketQua_1").innerHTML =
            `Bạn đã rớt vì có môn bị điểm 0`;

    } else if (tongDiem >= diemChuan) {

        document.getElementById("ketQua_1").innerHTML =
            `Bạn đã đậu. Tổng điểm: ${tongDiem}`;

    } else {

        document.getElementById("ketQua_1").innerHTML =
            `Bạn đã rớt. Tổng điểm: ${tongDiem}`;

    }
};

/**Bài 2: Tính tiền điện
 * - Đầu vào: Họ tên, số KW tiêu thụ
 * - Xử lý  : Tính tiền điện theo bảng giá
 * - Đầu ra : Họ tên và số tiền điện phải trả
 */

function convertVND(money) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return formatter.format(money);
}
let btnTinh_2 = document.getElementById("btnTinh_2");
btnTinh_2.onclick = function () {

    let hoTen = document.getElementById("hoTen").value;
    let soKW = Number(document.getElementById("soKW").value);

    let tienDien = 0;

    if (soKW <= 50) {

        tienDien = soKW * 500;

    } else if (soKW <= 100) {

        tienDien = (50 * 500)
                  + ((soKW - 50) * 650);

    } else if (soKW <= 200) {

        tienDien = (50 * 500)
                  + (50 * 650)
                  + ((soKW - 100) * 850);

    } else if (soKW <= 350) {

        tienDien = (50 * 500)
                  + (50 * 650)
                  + (100 * 850)
                  + ((soKW - 200) * 1100);

    } else {

        tienDien = (50 * 500)
                  + (50 * 650)
                  + (100 * 850)
                  + (150 * 1100)
                  + ((soKW - 350) * 1300);

    }

    document.getElementById("ketQua_2").innerHTML =
        `Họ tên: ${hoTen} <br> Số tiền điện: ${convertVND(tienDien)}`; 

};

/**Bài 3: Tính thuế thu nhập cá nhân
 * - Đầu vào: Họ tên, tổng thu nhập năm, số người phụ thuộc
 * - Xử lý  : 
 *      Thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người phụ thuộc * 1.6tr
 *      Tính thuế theo bậc thuế
 * - Đầu ra : Họ tên và số tiền thuế phải trả
 */

let btnTinh_3 = document.getElementById("btnTinh_3");

btnTinh_3.onclick = function () {

    let hoTen = document.getElementById("hoTen_3").value;

    let tongThuNhap = document.getElementById("tongThuNhap").value * 1;

    let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;

    let thuNhapChiuThue = 0;
    let thueThuNhap = 0;

    // Thu nhập chịu thuế
    thuNhapChiuThue = tongThuNhap
                    - 4000000
                    - (nguoiPhuThuoc * 1600000);

    // Tính thuế
    if (thuNhapChiuThue <= 60000000) {

        thueThuNhap = thuNhapChiuThue * 0.05;

    } else if (thuNhapChiuThue <= 120000000) {

        thueThuNhap = thuNhapChiuThue * 0.1;

    } else if (thuNhapChiuThue <= 210000000) {

        thueThuNhap = thuNhapChiuThue * 0.15;

    } else if (thuNhapChiuThue <= 384000000) {

        thueThuNhap = thuNhapChiuThue * 0.2;

    } else if (thuNhapChiuThue <= 624000000) {

        thueThuNhap = thuNhapChiuThue * 0.25;

    } else if (thuNhapChiuThue <= 960000000) {

        thueThuNhap = thuNhapChiuThue * 0.3;

    } else {

        thueThuNhap = thuNhapChiuThue * 0.35;

    }

    document.getElementById("ketQua_3").innerHTML =
        `Họ tên: ${hoTen} <br>
        Thuế thu nhập cá nhân: ${convertVND(thueThuNhap)}`;

};

/**Bài 4: Tính tiền cáp
 * - Đầu vào: Mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
 * - Xử lý  : 
 *      Nhà dân: 4.5 + 20.5 + số kênh * 7.5
 *      Doanh nghiệp: 15 + phí dịch vụ cơ bản + số kênh * 50
 *      Phí dịch vụ cơ bản doanh nghiệp:
 *          75$ cho 10 kết nối đầu
 *          Mỗi kết nối thêm 5$
 * - Đầu ra : Mã khách hàng và tiền cáp
 */

let loaiKhachHang = document.getElementById("loaiKhachHang");
let boxSoKetNoi = document.getElementById("boxSoKetNoi");

loaiKhachHang.onchange = function () {
    if (loaiKhachHang.value === "doanhNghiep") {
        boxSoKetNoi.style.display = "block";
    } else {
        boxSoKetNoi.style.display = "none";
    }
};

boxSoKetNoi.style.display = "none";

function convertUSD(money) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(money);
}

let btnTinh_4 = document.getElementById("btnTinh_4");

btnTinh_4.onclick = function () {

    let maKhachHang = document.getElementById("maKhachHang").value;
    let loaiKH = document.getElementById("loaiKhachHang").value;
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    let soKenh = document.getElementById("soKenh").value * 1;

    let tienCap = 0;
    let phiDichVu = 0;

    if (loaiKH === "nhaDan") {

        tienCap = 4.5 + 20.5 + (soKenh * 7.5);

    } else if (loaiKH === "doanhNghiep") {

        if (soKetNoi <= 10) {
            phiDichVu = 75;
        } else {
            phiDichVu = 75 + ((soKetNoi - 10) * 5);
        }

        tienCap = 15 + phiDichVu + (soKenh * 50);
    }

    document.getElementById("ketQua_4").innerHTML =
        `Mã khách hàng: ${maKhachHang} <br>
        Tiền cáp: ${convertUSD(tienCap)}`;
};