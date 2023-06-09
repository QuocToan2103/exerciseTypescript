//hàm calculateSumArrayA nhận vào 1 tham số(arrayA) là 1 mảng số nguyên kiểu dữ liệu number[]
//hàm calculateSumArrayA có kiểu dữ liệu là number
function calculateSumArrayA(arrayA: number[]) : number{
    //hàm calculateSumArrayA khởi tạo biến sum với giá trị = 0
    let sum: number = 0;
    //sử dụng vòng lặp for để lặp qua từng phân tử trong mảng và cộng các giá trị của từng phân tử vào biến sum
    //arrayA.length là lấy số lướng phần tử có trong mảng arrayA
    for(let i = 0; i < arrayA.length; i++) {
        sum += arrayA[i];
    }
    //trả về giá trị của biến sum
    return sum;
}
//mảng số nguyên arrayA được khởi tạo với các giá trị [5, 2, 6, 3, 8]
let arrayA: number[] = [5, 2, 6, 3, 8];
//hàm calculateSumArrayA được gán cho biến result 
let resultSum: number = calculateSumArrayA(arrayA);
//in ra
console.log(resultSum);