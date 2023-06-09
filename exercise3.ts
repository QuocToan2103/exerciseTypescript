//hàm EvenNumber nhận vào một tham số là n có kiểu dữ liệu là number
//hàm EvenNumber có kiểu dữ liệu là boolean
function EvenNumber(n: number): boolean {
    //hàm kiểm tra tham số n được truyền vào có chia hết cho 2 hay không 
    //sử dụng phép toán tử %(modulo operator) để lấy phần dư của phép chia n cho 2. Nếu phần dư là 0, tức là n chia hết cho 2, hàm sẽ trả về giá trị đúng (true), ngược lại trả về giá trị sai (false)
    //Modulo operator là toán tử dùng để lấy phần dư của một phép chia.
    return n % 2 === 0;
}
//hàm EvenNumber được truyền giá trị là 70, 55 và 89  làm đối số
console.log(EvenNumber(70)); //true
console.log(EvenNumber(55)); //false
console.log(EvenNumber(89)); //false