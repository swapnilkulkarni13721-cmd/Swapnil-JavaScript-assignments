//***************Exercise 1: Email Validation***************/

let email = "testuser@example.com";

if (email.includes("@") && email.includes(".")) {
  console.log("Testing email: " + email);
  console.log("Valid email address.");
} 
else {
  console.log("Invalid email address.");
}


//***************Exercise 2: Test Result Categorizer***************/

let testResult = "PASSED"; // Possible values: "PASSED", "FAILED", "SKIPPED"

if (testResult == "PASSED" ){
    console.log("Test Status :", testResult);
    console.log("✓ Test passed successfully");
}
else if (testResult == "FAILED"){
   console.log("Test Status :", testResult);
   console.log("✗ Test failed");
}
else if (testResult == "SKIPPED"){
   console.log("Test Status :", testResult);
   console.log("⊘ Test skipped");
}
else {
   console.log("Test Status :", testResult);
   console.log("? Unknown test status");
}



//***************Exercise 3: Password Strength Checker***************/

let password = "Test@123456";

if (password.length <= 6){
console.log("Password :", password);
console.log("Length: less that 6 characters");
console.log("❌ Weak password - too shor");
}
else if (password.length <= 10){
console.log("Password :", password);
console.log("Length: less than 10 characters");
console.log("⚠️ Medium password strength");
}
else
{
console.log("Password :", password);
console.log("Length: Greater than 10 characters");
console.log("✅ Strong password");
}


//***************Exercise 4: Test Score Grading***************/


let score = 15;

if (score >= 90){
    console.log("Test Score :", score);
    console.log("Grade: A (Excellent)");
}
else if (score >= 80 && score <= 89){
    console.log("Test Score :", score);
    console.log("Grade: B (Good)");
}
else if (score >= 70 && score <= 79){
    console.log("Test Score :", score);
    console.log("Grade: C (Average)");
}
else if (score >= 60 && score <= 69){
    console.log("Test Score :", score);
    console.log("Grade: D (Pass");
}
else
{
    console.log("Test Score :", score);
    console.log("Grade: F (Fail)");
}


//***************Exercise 6: Switch — Basic Value Matching***************/

let testResult1 = "SKIPPING";

switch (testResult1) {

    case "PASSED" :
        console.log("✓ Test passed successfully");
        break;
    
    case "FAILED" :
        console.log("✗ Test failed - check logs");
        break;

    case "SKIPPING" :
        console.log("⊘ Test skipped");
        break;

    case "PENDING" :
        console.log("⏳ Test pending - not yet run");
        break;

    default :
        console.log("? Unknown test status");


}

//***************Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)***************/

let statusCode = 400;

switch (statusCode) {

    case 200 :
        console.log("✅ 200 OK — request successful");
        break;
    
    case 201 :
        console.log("✅ 201 Created — resource created");
        break;

    case 400 :
    case 401 :
    case 403 :
        console.log("❌ Client error — check your request");
        break;

    case 404 :
        console.log("❌ 404 Not Found — endpoint does not exist");
        break;

    case 500 :
    case 502 :
    case 503 :
        console.log("🔥 Server error — backend issue");
        break;

    default :
        console.log("? Unknown status code :", statusCode );

}



//**********************Exercise 8: Switch with Expressions*************************/

//***************8a: Switch on a computed value (grade buckets)***************/

let score1 = 100;

switch (Math.floor(score1/10)) {

    case 9  :
    case 10 :
        console.log("Grade: A (Excellent)");
        break;

    case 8  :
        console.log("Grade: B (Good)");
        break;

    case 7  :
        console.log("Grade: C (Average)");
        break;

    case 6  :
        console.log("Grade: D (Pass)");
        break;

    default :
        console.log("Grade: F (Fail)");

}



//***************8b: Switch on `true` — range matching with expressions***************/

let duration1 = 4;

switch (true) {
    case duration1 < 1 :
        console.log("⚡ Very fast test");
        break;

    case duration1 < 3 :
        console.log("✅ Fast test");
        break;

    case duration1 < 6 :
        console.log(" Acceptable — consider optimising");
        break;

    default :
        console.log(" 🐢 Slow test — needs attention ");
        
}


//***************8b: Switch on `true` — range matching with expressions***************/

//*******************Snippet A — what prints?****************************************/

let priority2 = "High";

switch (priority2) {
    case "High" :
        console.log("Urgent");
        break;

    case "high" :
        console.log("Also urgent");
        break;

    default :
        console.log("can be waited");

}


//*******************Snippet B — what prints?****************************************/


let x =2;

switch (x) {
    case 1 :
        console.log("one");
        //break;

    case 2 :
        console.log("Two");
        //break;

    case 3 :
        console.log("Three");
        //break;

    default :
        console.log("Other");

}

/**Note : - If we do not use break stament then it will print output as 

Two 
Three
other

*/


//*******************Challenge: Complete Test User Validation****************************************/

let username1 = "swapnil";
let password1 = "abc@123";
let email2 = "abc@xyz.com"

function validateTestUser (username1, password1, email2) {
    console.log("Validating test user data...\n");

    



}