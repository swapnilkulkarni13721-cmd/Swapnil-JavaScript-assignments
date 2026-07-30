//*************************** Exercise 1 Car Class *************************/
console.log("************** Exercise 1 Car Class******************************");

class Car {

    constructor (brand, model) {
        this.brand = brand;
        this.model = model



    }
    displayInfo () {


       console.log ("Brand :", this.brand + " " + "Model ", this.model);

    }

}
let carObject1 = new Car ("Toyota", "Corolla");
carObject1.displayInfo();
let carObject2 = new Car ("Honda", "Civic");
carObject2.displayInfo();
console.log("");

console.log("**************Exercise 2 Rectangle Class******************************");

class Rectangle {

    constructor (width, height) {

        this.width = width;
        this.height = height;
    }
    calculateArea ()
    {

        return this.width * this.height;


    }

    calculatePerimeter ()
    {

        return 2 * (this.width + this.height);



    }
}

let reactangeObj = new Rectangle ( 5, 3 );
console.log("Area :",reactangeObj.calculateArea());
console.log("Perimeter :",reactangeObj.calculatePerimeter());

console.log("**************Exercise 3 BankAccount Class******************************");

class BankAccount {
    constructor ( accountHolder, balance = 0 ) {
        this.accountHolder = accountHolder;
        this.balance = balance;
 }
    deposite (amount) {

        this.balance = this.balance + amount;
        console.log("Deposited", amount + " New Balance is :", this.balance);

    }

    withdraw (amount) {

        if (amount > this.balance )
        {
            console.log ("cannot withdraw :", amount + " Insufficient balance!");

        }
        else {

            this.balance = this.balance - amount;
            console.log("Withdraw", amount + " New Balance is :", this.balance);
            return this.balance;

        }

    }

    checkBalance () {

        console.log(this.accountHolder ," balance ", this.balance);

    }

}
let account1 = new BankAccount ("Alice", 100);
account1.checkBalance();
account1.deposite(50);
account1.withdraw(30);
account1.withdraw(1000);

console.log("**************Exercise 4 Student Class (Property That Starts as an Empty Array)******************************");

class Student {
    constructor ( name, rollNumber ) {

     this.name = name;
     this.rollNumber = rollNumber;
     this.marks = [] ;

    }
    addMarks(mark) {

     this.marks.push(mark);


    }
    getAverage() {

        return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;

        
    }
}
 let Student1 = new Student ("Bob", 101);
 Student1.addMarks(80);
 Student1.addMarks(90);
 Student1.addMarks(70);
 console.log("Bob Average :", Student1.getAverage());



console.log("**************Exercise 5 TestCase Class******************************");

class TestCase {
    constructor (testName) {
        this.testName = testName;
        this.status1 = "PENDING";
        this.steps1 = [];
    }
    addStep(step) {

        this.steps1.push(step);

    }
    run() {
        
        console.log("Running :", this.testName);
        this.steps1.forEach((step,index) => {
            console.log(`Step ${index + 1} : ${step} Steps`);  

        });
        this.status1 = "PASSED";
        
    }

    getSummary() {
        return  `${this.testName} ${this.status1} (${this.steps1.length} steps)`;
    }
}
let testCase1 = new TestCase ("Login Test");
testCase1.addStep("Open browser");
testCase1.addStep("Enter credentials");
testCase1.addStep("Click login");
testCase1.run();
console.log(testCase1.getSummary());

console.log("************** Exercise 6 ShoppingCart Class (Managing a Collection of Objects)******************************");


class ShoppingCart1 {

    constructor () {

        this.items1 = [];

    }

    addItem1(shopName, price) {

        this.items1.push({ shopName, price });

        console.log(`Added : ${shopName} ($${price})`);

    }

    removeItem(shopName) {
        let removedItems = this.items1.filter((item) => item.shopName !== shopName);
        this.items1 = removedItems;
        console.log(`Removed : ${shopName}`);

    }

    getTotal() {

          return this.items1.reduce((acc, item) => acc + item.price, 0);
          
          
         
    }
    listItems () {
        console.log("Items in cart :");
         this.items1.forEach(item => {
        console.log("  - " + item.shopName + ": $" + item.price);
    });

    }

}

let cart = new ShoppingCart1();
cart.addItem1("Keyboard", 40);
cart.addItem1("Mouse", 20);
cart.addItem1("Monitor", 150);
cart.removeItem("Mouse");
cart.listItems();
console.log("Total :", cart.getTotal());
