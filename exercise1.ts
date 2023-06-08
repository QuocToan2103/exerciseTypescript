//hàm getfullname

function getFullName(firsName: String, lastName:String): void{
    //in ra
    console.log(`full Name: ${firsName} ${lastName}`);
}

// Sử dụng hàm để nhập tên 
const firsName: string = prompt(`nhập họ: `)!;
const lastName: string = prompt(`nhập tên : `)!;
getFullName(firsName, lastName);