const animals = [
    {
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "small",
        weight: 10
    },
    {
        name: "lion",
        size: "medium",
        weight: 150
    },
    {
        name: "elephant",
        size: "big",
        weight: 5000
    }
];

//hàm để tạo 1 mảng mới chứa tên tất cả con vật

//animal là 1 tham số đại diện cho mỗi đối tượng trong mảng animals
//sử dụng Hàm callback của map() sẽ trả về thuộc tính name của đối tượng đó và được lưu vào một mảng mới được gán cho biến animalNames.
//mảng này chứa các chuỗi (string).
const animalsNames: string[] = animals.map(animal => animal.name);
//in ra
console.log("-mảng chứa tên các đỘng vật", animalsNames); 


//hàm để tạo 1 mảng mới để lọc những con vật có cân nặng dưới 150

//animal là 1 tham số đại diện cho mỗi đối tượng trong mảng animals
//sử dụng hàm callback của filter() sẽ trả về true nếu đối tượng đó có weight nhỏ hơn 150, và false nếu ngược lại.
const weightAnimals: typeof animals = animals.filter(animal => animal.weight < 150);
//in ra
console.log("-mảng lọc các động vật có cân nặng dưới 150", weightAnimals);


//hàm để tính tổng cân nặng của tất cả con vật
//animal là 1 tham số đại diện cho mỗi đối tượng trong mảng animals
//sum là biến tích trữ giá trị tổng cân nặng của các đối tượng đã được lặp qua trước đó, animal là 1 tham số đại diện cho đối tượng hiện tại đang đƯợc lặp qua
//sử dụng hàm callback của reduce() sẽ trả về tổng của sum và animal.weight.
const totalWeight: number = animals.reduce((sum, animal)=>sum+animal.weight,0);
//in ra
console.log("-tổng cân nặng của tất cả các con vật", totalWeight);


//hàm để tính tổng cân nặng của tất cả con vật có cân nặng dưới 150
//kết hợp sử dụng phương thức filter() và reduce()
//phương thức filter() sẽ lọc ra các đối tượng có weight dưới 150
//phương thức reduce() sẽ tính tổng cân nặng của các đối tượng 
const totalWeightAnimals: number = animals
  .filter(animal => animal.weight < 150)
  .reduce((sum, animal) => sum + animal.weight, 0);
//in ra
console.log("tổng cân nặng của tất cả các con vật có cân nặng dưới 150", totalWeightAnimals);
