console.log("========== TEST METRICS DASHBOARD ==========");
console.log("");

let totalTests = 20;
let passedTests = 16;
let failedTests = 4;
let passRate = 80.00;
let testSuiteName = "Login Test Suite";    
let allTestsPassed = false;

console.log("Test Suite Name: " + testSuiteName, typeof testSuiteName);
console.log("Total Tests: " + totalTests, typeof totalTests);
console.log("Passed Tests: " + passedTests, typeof passedTests);   
console.log("Failed Tests: " + failedTests, typeof failedTests);
console.log("Pass Rate: " + passRate + "%", typeof passRate);
console.log("All Tests Passed: " + allTestsPassed, typeof allTestsPassed);