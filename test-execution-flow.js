console.log("*************Test Flow Simulation****************");

let status = "INPROGRESS";
let testName = "Login Functionality Test";
let tester = "Priya";
let Username = "testuser@example.com";

console.log("============================================");
console.log("       TEST EXECUTION FLOW                  ");
console.log("============================================");

console.log("Test Name :", testName);
console.log("Tester :", tester);
console.log("");

console.log("Step 1: Opening browser");
console.log("Status: ", status);
console.log("");

console.log("Step 2: Navigating to login page");
console.log("Status: ", status);
console.log("");

console.log("Step 3: Entering credentials");
console.log("Username: ",Username);
console.log("Status: ", status);
console.log("");

console.log("Step 4: Clicking login button");
console.log("Status: ", status);
console.log("");

status = "COMPLETED";

console.log("Step 5: Verifying dashboard");
console.log("Status: ", status);
console.log("");

status = "PASSED";

console.log("============================================");
console.log("        Final Status :", status              );
console.log("       Test Duration: 2.5 seconds            ");
console.log("============================================");





