//*******************Exercise 1: Test Suite Array****************************************/

let testcase = ["Valid credentials", "Invalid password", "Empty username", "Empty password", "Remember me checkbox"];

console.log("1. Complete array");
console.log(testcase);
console.log("");


console.log("2. Total number of test cases");
console.log("   Total test cases :", testcase.length);
console.log("");

console.log("3. The first test case");
console.log("First test :", testcase[0]);
console.log("");


console.log("4. The last test case");
console.log("Last Test:", testcase[testcase.length-1]);
console.log("");


//*******************Exercise 2: Test Results Tracker****************************************/

let testResults = [];

console.log("Test 1 completed :", testResults[0] = "PASSED");
console.log("");

console.log("Test 2 completed :", testResults[1] = "PASSED");
console.log("");

console.log("Test 3 completed :", testResults[2] = "FAILED");
console.log("");

console.log("Test 4 completed :", testResults[3] = "PASSED");
console.log("");

console.log("Test 5 completed :", testResults[4] = "SKIPPED");
console.log("");

console.log("Test Summary:");
console.log("Total tests run :", testResults.length);

console.log("Results :", testResults);
console.log("\n");


console.log("***Individual Results:**********88*");
for (let i = 0; i < testResults.length; i++)  {
    console.log("[" + i + "] " + testResults[i]);
}


console.log("\n");


// Contains failures: Yes (found at index 2) this is not completed



//*******************Exercise 3: Test Data Management****************************************/


let testEmails = ["user1@test.com", "user2@test.com", "user3@test.com"];

console.log("Initial emails:", testEmails)
console.log("Count :", testEmails.length);
testEmails[0] = "admin@test.com"; 
console.log("After adding user email at the begining end:", testEmails);



//*******************Exercise 4: Test Score Analysis****************************************/

let testScores = [85, 92, 78, 95, 88, 73, 90];
console.log("Scores :", testScores);
console.log("Total number of scores :", testScores.length);
console.log("First Score :", testScores[0]);
console.log("Last Score :", testScores[testScores.length-1]);
