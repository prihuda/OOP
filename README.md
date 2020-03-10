# OOP Challenge
## Class
Pembuatan class berguna untuk struktural programming, ini membuat developer lebih mudah dalam mengolah data
#### Contoh Penggunaan
```
class User {
  setUsername(username) {
    this.username = username
  }

  setName(name) {
    this.name = name
  }

  setEmail(email) {
    this.email = email
  }

  setPassword(password) {
    this.password = password
  }
}

const user = new User()
user.setUsername('mul14')
user.setName('Mulia')
user.setEmail('email@example.com')
user.setPassword('S3cR3T')
```
## Static Method
Sebuah method yang dapat dipanggil tanpa harus membangun class dari method tersebut
#### Contoh Penggunaan
```
class Crypto{
    static setSha256(str){
        this.resSha256 = sha256(str)
        return this.resSha256.toString()
    }
    static setMd5(str){
        this.resMd5 = md5(str)
        return this.resMd5.toString()
    }
    static setSha512(str){
        this.resSha1 = sha512(str)
        return this.resSha1.toString()
    }
    static setSha1(str){
        this.resSha512 = sha1(str)
        return this.resSha512.toString()
    }
}
```
## Method Chaining
Memanggil sebuah method secara berantai yang mempunyai return value yang sama
#### Contoh
```
class Cart {
	constructor() {
		this.array = [];
		this.discount = 0;
	}
	addItem({item_id, price, quantity=1}) {
		this.array.push({item_id, price, quantity});
		return this;
	}
	removeItem({item_id}) {
		this.array = this.array.filter(function(e) {
			return e.item_id != item_id
		});
		return this;
	}
	addDiscount(percent) {
		this.discount = parseFloat(percent) / 100.00;
		// const discount = parseFloat(percent) / 100.0
		// return discount
	}
}
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
    .addItem({ item_id: 3, price: 5000, quantity: 2 })
    .removeItem({item_id: 2})
    .addItem({ item_id: 4, price: 400, quantity: 6 })
    .addDiscount('50%')
```
## Encapsulation
```
class Person{
    constructor() {}
        setName(firstName, lastName){
            this.name = firstName + " " + lastName
        }
        getName(){
            return this.name.split(" ")[0]
        }
}
const person = new Person()
person.setName("Andi", "Setiawan")
console.log(person.getName()) //Output:Andi Setiawan
```
## Inheritance
Sebuah metode untuk menurunkan sifat pada class tersebut baik berupa property maupun method pada class lain
#### Contoh Penggunaan
```
function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true
```
## Polymorphism
Mengubah sebuah method dari suatu subclass yang berbeda dengan superclass
```
class Shape {
    area() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }
    area() {
        return this.base * this.height / 2;
    }
}
function cumulateShapes(shapes) {
    return shapes.reduce((sum, shape) => {
        if (shape instanceof Shape) {
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            return sum + shape.area()
        }
        throw Error('Bad argument shape.');
    }, 0);
}
const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];
console.log(cumulateShapes(shapes));
```
## Design Pattern
Design pattern merupakan prosedural dalam pengembangan aplikasi yang menjadi solusi dalam permasalahan secara umum.Design pattern hanya berbentuk template bukan sebuah code akhir untuk segera dieksekusi
#### Jenis-jenis design pattern
- Separation of concern<br>
MVC yaitu model, view and controller(belum diajarkan)
- Factory pattern<br>
Design pattern pda class yang mempunyai ketergantungan dengan class lain tanpa harus diketahui cara pembuatan dari class tersebut
- Adapter Pattern<br>
Design pattern yang dalam satu class mempunyai banyak karakteristik yang berbeda pada sebuah property member yang sama
