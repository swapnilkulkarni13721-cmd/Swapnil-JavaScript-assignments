//*******************Exercise 1: Age Range Validation****************************************/

let age = 66;

if (age >= 18 && age <= 65) {

    console.log("Age :", age);
    console.log("✅ Valid age range (18-65)");
}
else
{
    console.log("Invalid");
    console.log("❌ Age must be between 18 and 65");

}


//*******************Exercise 2: Login Credentials Validator****************************************/

let username = "";
let password = "";
let email = "test@example.com";


if ((username != "" && password != "") || email != "") {

    console.log("Checking credentials...");
    console.log("Username :", username);
    console.log("Passwords :", password);
    console.log("Email :", email);
    console.log("✅ Sufficient login credentials");
}

else 
{
        console.log("Checking credentials...");
        console.log("❌ Insufficient credentials - provide username+password OR emails");

}


//*******************Exercise 3: Test Status Validator****************************************/

let status1 = "SKIPPED";
let errorCount = 0;

if ((status1 == "PASSED" || status1 == "SKIPPED") && errorCount == 0)
{

    console.log("Test Status :", status1);
    console.log("Error Count:", errorCount);
    console.log("");
    console.log("Validation:");
    console.log("");
    console.log("Status is acceptable: true");
    console.log("No errors: true");
    console.log("✅ Test completed successfully");
}

else
{
    console.log("Test Status :", status1);
    console.log("Error Count:", errorCount);
    console.log("");
    console.log("Validation:");
    console.log("");
    console.log("Status is not acceptable ");

}


//*******************Exercise 4: Response Time Validator****************************************/

let responseTime = 3.5;

if (responseTime < 3)
{
    console.log("Response Time Test");
    console.log("Threshold : 3 seconds");
    console.log("Actual :", responseTime);
    console.log("");
    console.log("✅ Performance test PASSED response time: ", responseTime);

}
else
{

    console.log("❌ Performance test FAILED response time: ", responseTime);

}


