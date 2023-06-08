//hàm getfullname
function getFullName(): string{
    
    let firsName: string = "Nguyen";
    let lastName: string = "Quoc Toan";
    //trả về 
    return `${firsName} ${lastName}`;
}

//hàm getfullname được gán cho biến fullname 
let fullName: string = getFullName();
//in ra
console.log(fullName);