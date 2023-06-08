//hàm calculateSum nhận vào 1 tham số là n có kiểu dữ liệu number
//hàm calculateSum có kiểu dữ liệu là number
function calculateSum (n: number) : number {
    //biến sum được khởi tạo giá trị ban đầu = 0
    let sum: number = 0;
    //sử dụng vòng lặp for để cộng giá trị của biến i từ 1 đến n vào biến sum.
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    //trả về giá trị của biến sum
    return sum;
}
//hàm calculateSum được truyền giá trị 40 làm đối số
//hàm calculateSum được gán cho biến result 
let result: number = calculateSum(40);
//in ra

console.log(result);