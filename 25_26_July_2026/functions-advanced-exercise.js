//*************************** Exercise 1: Convert to Arrow Functions************************* */

const greet = (name) => { return "Hello" + " " + name; }

const isAdult = (age) => {return age >= 18 ? "true" : "false" }    

const calculateTotal = ( price, quantity ) => {

     let total = price * quantity ;
     let tax = total * 0.1 ;
     return total + tax ;

}
 


console.log("**********1a: Arrow function for greet*******************");
console.log(greet("Mark"));
console.log("");
console.log("**********1b: Arrow function for isAdult*******************");
console.log(isAdult(25));
console.log("");
console.log("**********1c: Arrow function for calculateTotal*******************");
console.log(calculateTotal (100, 3));

//*************************** Exercise 2: Array Methods with Arrow Functions************************* */

let testResults = [
    { name: "Login Test", score: 85, status: "PASSED" },
    { name: "Logout Test", score: 72, status: "FAILED" },
    { name: "Search Test", score: 95, status: "PASSED" },
    { name: "Checkout Test", score: 88, status: "PASSED" },
    { name: "Payment Test", score: 65, status: "FAILED" }
];

console.log("");
console.log("**********2a: Filter all passed tests*******************");
let passedTests = testResults.filter ((testResults) => testResults.status == "PASSED" );
console.log(passedTests);
console.log("");
console.log("**********2b: Get array of just the test names*******************");
let testNames = testResults.map((testResults) => testResults.name);
console.log(testNames);
console.log("");
console.log("**********2c: Get array of scores that are above 80*******************");
let highScores = testResults.filter ((testResults) => testResults.score >= 80 )
let finalScore = highScores.map((testResults) => testResults.score);
console.log(finalScore);
console.log("");
console.log("**********2d: Find the first failed test*******************");
let firstFailed = testResults.find ((testResults) => testResults.status == "FAILED" );
console.log(firstFailed);
console.log("");
console.log("**********2e: Check if ALL tests passed*******************");
let allPassed = testResults.every ((testResults) => testResults.status == "PASSED" );
console.log(allPassed);
console.log("");
console.log("**********2f: Check if ANY test failed *******************");
let anyFailed = testResults.some ((testResults) => testResults.status == "FAILED" );
console.log(anyFailed);
console.log("");

//*************************** Exercise 3: Pure vs Impure Functions************************* */
console.log("**********3a:Pure vs Impure Functions***********");

function celsiusToFahrenheit (celsius) {

    return (celsius * 9/5) + 32; 


}

console.log("**********Pure Functions***********");
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(25));
console.log("");

console.log("**********3b:ImPure Functions***********");

let executionLog = [];

function recordExecution (stepName) {

executionLog.push (stepName);
console.log(`Step ${executionLog.length} : ${stepName}`);


}

recordExecution("Open browser");            
recordExecution("Navigate to login page");  
console.log("Execution log:", executionLog);

console.log("**********3c***********");

console.log("");
console.log("// recordExecution is impure because it modifies the external variable `executionLog` and performs console.log, causing side effects that make its behavior depend on and alter state outside its own scope.")




//*************************** Exercise 4: Spread Operator************************* */



function BrowserName (name1,name2,name3) {

   return name1 + " " + name2 + " " + name3;


}

let browserList = ["chromium", "firefox", "webkit"];

console.log("");
console.log("**********4a: Spread an array*************");
console.log("");
console.log(BrowserName(...browserList));
console.log("");


console.log("");
console.log("**********4b: Object spread*************");
let defaultConfig = { timeout : 3000, retries : 0, headless : true };

let ciConfig = { ...defaultConfig, retries : 2 };

console.log(ciConfig);
console.log(defaultConfig);

console.log("");
console.log("**********4c: This function takes 3 individual numbers, not an array*************");

function calculateRange (a, b, c) {

 return Math.max (a, b, c) - Math.min (a, b, c) ;

}

let responseTime = [120, 450, 90];
let range = calculateRange(...responseTime);
console.log("Range:", range);
console.log("");


//***************************Exercise 5: Rest Parameters - Validation Function************************* */

console.log("**********Rest Parameters - Validation Function*************");
function validateAll(...conditions) {
    return conditions.every(condition => condition === true);
}

let user = {
    email: "test@example.com",
    age: 25,
    password: "Test@123",
    active: true
};

// Test 1: All valid conditions
console.log("\nTest 1: All valid");
let result1 = validateAll(
    user.email.includes("@"),
    user.age >= 18,
    user.password.length >= 8,
    user.active === true
);
console.log("Result:", result1);  // true

// Test 2: One invalid condition
console.log("\nTest 2: One invalid");
let result2 = validateAll(
    user.email.includes("@"),
    user.age >= 30,
    user.active === true
);
console.log("Result:", result2);  // false

// Test 3: No conditions (edge case)
console.log("\nTest 3: No conditions");
let result3 = validateAll();
console.log("Result:", result3);  // true
console.log("");


//***************************Exercise 6: Destructuring************************* */

let browserPriority = ["chromium", "firefox", "webkit"];
let [primaryBrowser, secondaryBrowser] = browserPriority;
console.log("*********6a: Array destructuring - pull the top 2 browsers into named variables******************");
console.log("primaryBrowser:", primaryBrowser);     
console.log("secondaryBrowser:", secondaryBrowser)
console.log("");

let browserConfig = { browserName: "chromium", headless: true };
let { browserName: browser, slowMo = 0 } = browserConfig;
console.log("*********6b: Object destructuring******************");
console.log("");
console.log("browser:", browser);
console.log("slowMo:", slowMo);
console.log("");

console.log("*********6c: Destructure directly in a function's PARAMETER list******************");
// createUser() should accept ONE object argument, destructured into
// email and role (default "tester").
function createUser(email,role = "tester") {
    console.log("Created user:", email, "| role:", role);
}

createUser({ email: "alice@example.com" });
console.log("");

console.log("*********6d: Nested destructuringt******************");

let testFailure = {
    testName: "Checkout Test",
    error: { code: 500, message: "Internal Server Error" }
};

let { testName, error : { code, message }} = testFailure;


console.log("testName:", testName);
console.log("code:", code);         
console.log("message:", message);   
