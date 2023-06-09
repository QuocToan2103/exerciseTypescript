//hàm Numbers nhận vào 2 tham số là num1 và num2 có kiểu dữ liệu là number
function Numbers(num1 : number, num2 : number) : number {
    //hàm trả về tổng của 2 tham số bằng phép toán tổng
    return num1 + num2 ;
}
//sử dụng biến sum để lưu trữ tổng của các giá trị (tính tổng của 2 tham số) 
//hàm Numbers được truyền 20,21 làm đối số 
let sum: number = Numbers(20,21);

//in ra
console.log(sum);
