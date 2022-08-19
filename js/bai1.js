/**BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
 *
 * GIẢ SỬ:
 * - Đầu vào:
 *  + Số ngày làm
 * + Lương 1 ngày bằng 100.000
 * - Xử lý:
 * + Lương = Lương 1 ngày * Số ngày làm
 *
 * - Đầu ra:
 * Lương = ?
 *
 * BÀI LÀM: */

console.log("BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN");

var daily_wage = 100000;
var working_day = 20;

console.log(
  "Your income is: " + (daily_wage * working_day).toLocaleString() + "VND"
);
console.log("----------------------------------");

/**BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
 * GIẢ SỬ:
 * - Đầu vào:
 *  + Người dùng nhập 5 số thực
 * - Xử lý:
 *  + avg_num = (num_1 + num_2 + num_3 + num_4 + num_5) / 5
 * - Đầu ra:
 * + avg_num = ?
   BÀI LÀM: */

console.log("BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH");

var num_1 = 4;
var num_2 = 8;
var num_3 = 12;
var num_4 = 3;
var num_5 = 20;

console.log("Number 1 = " + num_1);
console.log("Number 2 = " + num_2);
console.log("Number 3 = " + num_3);
console.log("Number 4 = " + num_4);
console.log("Number 5 = " + num_5);

console.log("Average number = " + (num_1 + num_2 + num_3 + num_4 + num_5) / 5);
console.log("----------------------------------");

/** BÀI 3: QUY ĐỔI TIỀN
 * GIẢ SỬ:
 * - Đầu vào:
 * + Nguuời dùng nhập số tiền đơn vị USD
 * + Giá 1 USD = 23.500 VND
 * - Xử lý:
 * + vnd = usd * 23500
 * - Đầu ra:
 * + vnd = ?
 * BÀI LÀM:*/

console.log("BÀI 3: QUY ĐỔI TIỀN");

var vnd = 23500; // 1 USD = 23500 VND
var amount_usd = 15;

console.log(
  amount_usd + " USD = " + (amount_usd * vnd).toLocaleString() + " VND"
);
console.log("----------------------------------");

/** BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
 * -GIẢ SỬ:
 * -Đầu vào
 * + Có 1 chiều rộng và 1 chiều dài của 1 hình chữ nhật
 * + Tính và xuất ra diện tích và chu vi của hình chữ nhật đó
 * -Xử lý:
 * + area = length * width
 * + perimeter = (length + width)*2
 * -Đầu ra:
 * + area = ?
 * + perimeter = ?
 * BÀI LÀM:*/

console.log("BÀI 4: TÍNH DIỆN TÍCH, CHU VI CỦA HÌNH CHỮ NHẬT");

var length = 30;
var width = 40;

console.log("Length: " + length + " m");
console.log("Width " + width + " m");
console.log("Area: " + length + width + " m2");
console.log("Perimeter: " + (length + width) * 2 + " m");
console.log("----------------------------------");
/**BÀI 5: TÍNH TỔNG 2 KÝ SỐ
 * GIẢ SỬ:
 * -Đầu vào:
 * + Cho 1 số gồm 2 ký tự
 * + Tính tổng của 2 ký tự này
 * -Xử lý:
 * + Tính số hàng chục bằng cách làm tròn kết quả của phép tính so / 10 và làm tròn xuống: Math.floor(so_hang_chuc) = so/10
 *  + Tính só hàng đơn vị bằng cách chi nó cho 10 bằng opertator tính thương số (%): so_dv = so % 10
 * + Tính tổng 2 vừa tính: tong_ky_so = so_hang_chuc + so_dv
 * -Đầu ra:
 * tong_ky_so = ?
 * BÀI LÀM:
 */

console.log("BÀI 5: TÍNH TỔNG 2 KÝ SỐ");

var so = 64;
var so_dv = so % 10;
var so_hc = Math.floor(so / 10);

console.log("Số đơn vị hàng chục là: " + so_hc);
console.log("Số đơn vị hàng đơn vị là: " + so_dv);
console.log("Vậy tổng ký số của số " + so + " là: " + (so_dv + so_hc));
