
// biến salaries được khai báo với kiểu dữ liệu Record <string, number>, object này có các thuộc tính là các chuỗi (string) và các giá trị là số (number)
let salaries : Record<string, number> = {
    John: 100,
    Ann: 160,
    Pete: 130
};
//hàm calculateTotalSalary nhận vào 1 tham số là 1 object chưa thông tin lương của 3 người (john, ann, pete) có kiểu dữ liệu là object, hàm này có kiểu dữ liệu number
function calculateTotalSalary(obj : Record<string, number>): number{
    //Hàm này khởi tạo biến sum với giá trị 0
    let sum = 0;
    //sử dụng một vòng lặp for...in để lặp qua từng thuộc tính trong object và cộng giá trị của từng thuộc tính vào biến sum.
    for (let key in obj) {
        sum += obj[key];
    }
    //hàm calculateTotalSalary() trả về giá trị của biến sum. Hàm này có kiểu trả về là number
    return sum;
}
//object salaries được khởi tạo với các giá trị và thuộc tính tương ứng
//Hàm calculateTotalSalary() được gọi với salaries là đối số
//hàm calculateTotalSalary() được gán cho biến totalSalary
let totalSalary = calculateTotalSalary(salaries);
//in ra
console.log(totalSalary);