//hàm getfullname
function getFullName(): String{
    
    let firsName: String = "Nguyen";
    let lastName: String = "Quoc Toan";
    //trả về 
    return `${firsName} ${lastName}`;
}

//hàm getfullname được gán cho biến fullname 
let fullName: String = getFullName();
//in ra
console.log(fullName);