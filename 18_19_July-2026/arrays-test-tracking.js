/*** *******************Exercise 1: Test Suite Array**************************************/


let testCases = ["Valid credentials", "Invalid password", "Empty username", "Empty password", "Remember me checkbox"];
console.log("============Test Suite Array============");
console.log("Test Suit : Login Module");
console.log("Test cases: ", testCases);
console.log("Total test Cases: ", testCases.length);
console.log("First test:", testCases[0]);
console.log("Last test:", testCases[testCases.length-1]);
console.log("");


/*** *******************Exercise 2: Test Results Tracker**************************************/

let testResults = [];
console.log("============Test Results Tracker============");
console.log("Running Test Suite...");
console.log("");
console.log("Test 1 completed:", testResults[0] = "PASSED");
console.log("Test 2 completed:", testResults[1] = "PASSED");
console.log("Test 3 completed:", testResults[2] = "FAILED");
console.log("Test 4 completed:", testResults[3] = "PASSED");
console.log("Test 5 completed:", testResults[4] = "SKIPPED");
console.log("");
console.log("Test Summary:");
console.log("");
console.log("Total tests run:", testResults.length);
console.log("Results: ", testResults);
let index = testResults.indexOf("FAILED");
console.log("Contains failures: Yes (found at index", index + ")");
console.log("");


/*** *******************Exercise 3: Test Data Management**************************************/

let testEmails = ["user1@test.com", "user2@test.com", "user3@test.com"];
console.log("============Test Data Management============");
console.log("Test Email Management");
console.log("");
console.log("Initial emails:", testEmails);
console.log("Count:", testEmails.length);
testEmails.push("user4@test.com");
console.log("After adding user4@test.com to end:", testEmails);
testEmails.unshift("admin@test.com");
console.log("After adding admin@test.com to beginning:", testEmails);
testEmails.pop();
console.log("After removing last email:", testEmails);
testEmails.shift();
console.log("After removing first email:", testEmails);
console.log("Final Count:", testEmails.length);

/*** *******************Exercise 4: Test Score Analysis**************************************/

let testScores = [ 85, 92, 78, 95, 88, 73, 90 ];
console.log("============Test Score Analysis============");
console.log("");
console.log("Scores: ", testScores);
console.log("Total Scores: ", testScores.length);
console.log("");
console.log("First Score: ", testScores[0]);
console.log("Last score: ", testScores[testScores.length-1]);
console.log("");
console.log("Checking for specific scores...");
let index1 = testScores.indexOf(95);
console.log("Score 95 found: Yes (at index", index1 + ")");
index1= testScores.indexOf(100);
console.log("Score 100 found: Yes (at index", index1 + ")");


/*** *******************Exercise 5: slice() - Extract Test Subsets**************************************/


let testSuite = [ "Smoke1", "Smoke2", "Smoke3", "Regression1", "Regression2", "Regression3" ];
console.log("============slice() - Extract Test Subsets============");
console.log("Full Test Suite: ", testSuite);
let smoketest = testSuite.slice(0,3);
console.log("Smoke tests only (first 3): ", smoketest);
smoketest = testSuite.slice(-3);
console.log("Regression tests only (last 3):  ", smoketest);
smoketest = testSuite.slice(2,6);
console.log("Middle tests (index 2-5):  ", smoketest);
smoketest = testSuite.slice();
console.log("Full copy: ", smoketest);
console.log("Original test suite unchanged:", testSuite);
console.log("");


/*** *******************Exercise 6: splice() - Modify Test List In Place**************************************/
let testList = [ "Login", "Logout", "Search", "Checkout", "Payment" ];
console.log("============splice() - Modify Test List In Place============");
console.log("Original test list: ", testList);
console.log("Step 1 - Remove 1 element at index 2:");
let whatRemoved = testList.splice(2, 1)// remove element from index 2 and ,1 means only 1 element to remove 
console.log("Removed: ", whatRemoved);
console.log("Array now: ", testList);
console.log("Step 2 - Insert 'Home' and 'Profile' at index 1 (nothing removed):");
testList.splice(1, 0, "Home", "Profile");
console.log("Array now: ", testList);
console.log("Step 3 - Replace element at index 0 with 'SignIn':");
testList.splice(0, 1, "SignIn");
console.log(" Array now: ",testList);
console.log("Key point: splice() modifies the ORIGINAL array!");
console.log("");


/*** *******************## Additional Challenges**************************************/
console.log("============Challenge 1: Complete Test Report with Parallel Arrays============");
let testNames1 = [ "Login with valid credentials", "Login with invalid password", "Logout functionality", "Search products", "Add to cart" ];
let testResults1 = [ "PASSED", "FAILED", "PASSED", "SKIPPED", "FAILED"];
let testDuration = [ 2.5, 1.8, 1.2, 3.4, 0.0 ];
console.log("════════════════════════════════════════");
console.log(" TEST EXECUTION REPORT");
console.log("════════════════════════════════════════");
console.log("");
for ( let count = 0; count < testNames1.length; count++)
{
    console.log(`Test ${count + 1} : ${testNames1[count]}`);
    console.log(` Result : ${testResults1[count]} `);
    console.log(` Duration: ${testDuration[count]}s`);
    console.log("");
}

let totalTests = testNames1.length;
let totalDuration = 0;
for (let duration of testDuration) {
  totalDuration = totalDuration + duration;
}

console.log("════════════════════════════════════════");
console.log(" SUMMARY");
console.log("════════════════════════════════════════");
console.log("Total tests: ", totalTests);
console.log("Total Duration : ", totalDuration + "s");
console.log("════════════════════════════════════════");


//*****************************Using Objects ************************************/
console.log("============Challenge 1: Complete Test Report with Parallel Arrays============");

let tests = [
  {
    testName: "Login with valid credentials",
    result: "PASSED",
    duration: 2.5
  },
  {
    testName: "Login with invalid password",
    result: "FAILED",
    duration: 1.8
  },
  {
    testName: "Logout functionality",
    result: "PASSED",
    duration: 1.2
  },
  {
    testName: "Search products",
    result: "SKIPPED",
    duration: 3.4
  },
  {
    testName: "Add to cart",
    result: "FAILED",
    duration: 0.0
  }
];
console.log("════════════════════════════════════════");
console.log(" TEST EXECUTION REPORT");
console.log("════════════════════════════════════════");
console.log("");
for ( let count = 0; count < tests.length; count++)
{
    console.log(`Test ${count + 1} : ${tests[count]}`);
    console.log(` Result : ${tests[count]} `);
    console.log(` Duration: ${tests[count]}s`);
    console.log("");
}

let totalTests = tests.length;
let totalDuration = 0;

for (let test of tests) {
  totalDuration = totalDuration + test.duration;
}

console.log("════════════════════════════════════════");
console.log(" SUMMARY");
console.log("════════════════════════════════════════");
console.log("Total tests: ", totalTests);
console.log("Total Duration : ", totalDuration + "s");
console.log("════════════════════════════════════════");


/*** *******************## Additional Challenges**************************************/

console.log("============Challenge 2: slice() vs splice() Face-off============");

let arrayA = ["A", "B", "C", "D"];
let arrayB = ["A", "B", "C", "D"];
console.log("Starting Array : ");
console.log("arrayA :", arrayA);
console.log("arrayB :", arrayB);
console.log("");
let slicedResult = arrayA.slice(1,3);
console.log("After arrayA.slice(1, 3):");
console.log("Returned : ", slicedResult );
console.log(" arrayA: ", arrayA);
console.log("");
let slicedResult1 = arrayB.splice(1,2);
console.log("After arrayB.slice(1, 2):");
console.log("Returned : ", slicedResult1 );
console.log(" arrayB: ", arrayB);
console.log("");
console.log("Takeaway: slice() extracts a copy and leaves the original alone.");
console.log("splice() edits the original array directly.");