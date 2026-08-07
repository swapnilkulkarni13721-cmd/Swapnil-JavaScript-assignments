
console.log("=================Exercise 1: Inheritance & Method Overriding ==============");

class Animal {
    constructor(name){

        this.name=name;

    }
    speak(){

        console.log("Generic Animal speaks:");
        console.log(this.name + " " + "makes Sound");
    }
}
class Dog extends Animal {

    speak(){

        console.log("Dog speaks (overridden):");
        console.log(this.name + " " + "Bark");

    }
}

class Cat extends Animal {
    speak(){

        console.log("Cat speaks (overridden):");
        console.log(this.name + " " + "Meow");
    }
}

let objAnimal = new Animal("Rex");
objAnimal.speak();
console.log("");
let objDog = new Dog("Buddy");
objDog.speak();
console.log("");
let objCat = new Cat("Whiskers");
objCat.speak();
console.log("");
console.log("Inheritance check:");
console.log("buddy instanceof Dog:",objDog instanceof Dog);
console.log("buddy instanceof Animal:",objDog instanceof Animal);
console.log("whiskers instanceof Cat:",objCat instanceof Cat);
console.log("whiskers instanceof Animal:",objCat instanceof Animal);
console.log("");


console.log("=================Exercise 2: Puppy — Calling the Parent's Method with super ==============");
console.log("");

class Puppy extends Dog {

        speak(){

            super.speak();
            console.log(this.name + " " + "also wags its tail excitedly");

        }

}

let objPuppy = new Puppy("Max");
console.log("Puppy speaks (calls super.speak(), then adds more):");
objPuppy.speak();
console.log("");

console.log("=================Exercise 3: Vehicle, Car — Skipping the Constructor ==============");
console.log("");
console.log("Creating a Car (Car has no constructor of its own)...");



class Vehicle {
    constructor (brand, wheels) {
        this.brand=brand;
        this.wheels=wheels;
    }
    describe(){

        console.log(this.brand + " " + "vehicle with" + " " + this.wheels + " " + "wheels" );

    }
}
class Car extends Vehicle {
    
    honk(){
        
        console.log(this.brand + " " + "says : Beep beep! ");
    }
}

let objCar = new Car ("Toyota", 4);
objCar.describe();
objCar.honk();
console.log("");

console.log("=================Exercise 4: Employee — Getters & Setters ==============");
console.log("");

class Employee {
    constructor(empName, monthlySalary){

            this.empName=empName;
            this._salary = monthlySalary;
        
    }
    get salary(){
     
        return this._salary;

    }
    set salary(monthlySalary){

        if(monthlySalary <= 0)
        {
            console.log("❌ Salary must be greater than 0.");

        } else {
            this._salary = monthlySalary;
        }


    }
   get annualSalary(){
        return this._salary * 12; 
    }

}

let empObj = new Employee("Priya", 5000);
console.log("Name :",empObj.empName);    
console.log("Initial Salary:", empObj.salary);
console.log("Initial Annual Salary:", empObj.annualSalary);
console.log("Setting salary to 5000...");   
empObj.salary = 5500;
console.log("Updated Salary:", empObj.salary);
console.log("Updated Annual Salary:", empObj.annualSalary);
console.log("Setting salary to -1000 (invalid)...");
empObj.salary = -1000; 
console.log("Salary after invalid update attempt:", empObj.salary);
console.log("Annual Salary after invalid update attempt:", empObj.annualSalary);
console.log("");


console.log("==================== Exercise 5: Read-only Getter === ==============");
console.log("");

class Wheel {

    constructor(radius) {

        this.radius=radius;

    }
    get diameter(){

            return this.radius *2;


    }
    // set diameter(value) {
    //    this.radius = value / 2;
    //}

}

let objWheel = new Wheel (10);
console.log("Wheel diameter: ", objWheel.diameter);
console.log("Trying to set wheel.diameter = 100...");
objWheel.diameter = 100;
console.log("Wheel diameter after assignment attempt: ",objWheel.diameter);
console.log("");
 


console.log("*************Exercise 6: BankAccount — Private Fields***************************");
console.log("");

class BankAccount {

    #balance = 1000;
  
deposite1 (amount) {

 this.#balance = this.#balance + amount;
 return this.#balance;
}

get balance () {

 return this.#balance;


}

}

let objbankAccount = new BankAccount ();
console.log("Starting balance: ",objbankAccount.balance);
objbankAccount.deposite1(250);
console.log("Balance after deposit:",objbankAccount.balance);

console.log("");
 


console.log("************* Exercise 7: Shape, Rectangle, Circle — Putting It All Together***************************");
console.log("");
class Shape {

    constructor(name){

        this.name=name;


}
    get area() {

        return 0;

    }
}
class Rectangle extends Shape {

    constructor(width,height) {

       super("Rectangle");
       this.width = width;
       this.height = height;

    }

    get area() {

        return this.width * this.height;
    }
}
class Circle extends Shape {

    constructor(radius) {

        super("Circle");
        this.radius=radius;

    }
    get area() {

        return (Math.PI * this.radius * this.radius).toFixed(2);
        

    }

}

let shapes = [
    new Rectangle(6, 4),
    new Circle(5),
    new Rectangle(4, 3)
];

for (let shape of shapes) {

    console.log(`Shape: ${shape.name} area: ${shape.area}`); 
}