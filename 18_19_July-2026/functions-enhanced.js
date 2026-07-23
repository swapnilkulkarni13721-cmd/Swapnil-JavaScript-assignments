/*** ******************* Exercise 1: Default Parameters - Test Runner**************************************/

console.log("============Default Parameters - Test Runner============");
function configureTest(testName, browser = "Chrome", timeout = 30000, environment = "Staging") {
   
     console.log("Test : ", testName);
     console.log("Browser : ", browser);
     console.log("Timeout : ", timeout + "ms" );
     console.log("Environment : ", environment);


}
console.log("--- All defaults ---");
configureTest("Login Test");
console.log("");
console.log("--- Custom browser ---");
configureTest("login Test", "Firefox");
console.log("");
console.log("--- Custom browser and timeout ---");
configureTest("login Test", "Safari", 60000);
console.log("");
console.log("--- All Specified ---");
configureTest("Logut Test", "IE", 30000, "production");
console.log("");
console.log("--- empty string ---");
configureTest("Edge Case", "");
console.log("");
console.log("--- explicit undefined ---");
configureTest("Edge Case", undefined);

/*** *******************  Exercise 2: Guard Clauses - Form Validator**************************************/
console.log("============Guard Clauses - Form Validator============");
function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                return "✅ Form is valid";
            } else {
                return "❌ Must be 18 or older";
            }
        } else {
            return "❌ Password must be at least 8 characters";
        }
    } else {
        return "❌ Username is required";
    }
}

function validateFormGuard(username, password, age) {

    if (username == "") return "❌ Username is required";
    if (password.length < 8) return "❌ Password must be at least 8 characters";
    if (age < 18) return "❌ Must be 18 or older";
    return "✅ Form is valid";

}
let FormNested = validateFormNested( "", "Test@123", 25);
let FormGuard = validateFormGuard( "", "Test@123", 25);
console.log("Nested :", FormNested);
console.log("Guard :", FormGuard);
console.log("");
FormNested = validateFormNested("john", "abc", 25);
FormGuard = validateFormGuard("john", "abc", 25);
console.log("Nested :", FormNested);
console.log("Guard :", FormGuard);
console.log("");
FormNested = validateFormNested("john", "Test@123", 16);
FormGuard = validateFormGuard("john", "Test@123", 16);
console.log("Nested :", FormNested);
console.log("Guard :", FormGuard);
console.log("");
FormNested = validateFormNested("john", "Test@123", 25);
FormGuard= validateFormGuard("john", "Test@123", 25);
console.log("Nested :", FormNested);
console.log("Guard :", FormGuard);
console.log("");

/*** *******************Exercise 3: Function Expressions - Password Validators**************************************/
console.log("============Function Expressions - Password Validators============");

 const hasMiniLength = function (password) {
    return password.length >= 8 ; 

 };
const hasSpecialChar = function (password) {
    return password.includes != ("@") || password.includes("!") || password.includes("#") ;
    
 };
 const hasUppercase = function (password) {
    return /[A-Z]/.test(password);

 };

let passwordValidators = [ hasMiniLength, hasSpecialChar, hasUppercase ];

function validatePassword (password) {
     console.log(`Validating: "${password}"`);
     console.log("");

for (let i = 0; i < passwordValidators.length; i++) {
    const isValid = passwordValidators[i](password); // run current validator

    if (isValid) {
      console.log(`  ✓ Passed check ${i + 1}`);
    } else {
        
      console.log(`  ✗ Failed check ${i + 1}`);
      return false;
    }
  }

  console.log("  ✓ Password is valid!");
  console.log("");
  return true;
}

validatePassword("Test@123");
console.log("");
validatePassword("weak");


/*** *******************Exercise 4: Factory Functions - URL Builder**************************************/

console.log("============Factory Functions - URL Builder============");
console.log("");

function makeUrlBuilder(baseUrl) {
  return function (path) {
    // returns a new function
    return baseUrl + path;
  };
}

const stagingUser = makeUrlBuilder("https://staging.example.com")
const productionUser = makeUrlBuilder("https://example.com");
const devUser = makeUrlBuilder("https://dev.example.com");

let login = "/login";
let dashboad = "/dashboard";
let users = "/api/users";

console.log("Staging URL's :")
console.log(stagingUser(login));
console.log(stagingUser(dashboad));
console.log(stagingUser(users));
console.log("");

console.log("Production URLs: :")
console.log(productionUser(login));
console.log(productionUser(dashboad));
console.log(productionUser(users));
console.log("");

console.log("Devlopment URLs: :")
console.log(devUser(login));
console.log(devUser(dashboad));
console.log(devUser(users));
console.log("");

/*** *******************Additional Challenge**************************************/
/*** *******************Challenge: Configurable Validator Factory**************************************/

console.log("**********************Configurable Validator Factory********************************");
function makeUserValidator ( minPasswordLength = 8, minAge = 18) {
    return function( username1, password1, age1) {
        if (username1 == "") return "❌ Username cannot be empty";
        if (username1.length < 3 && username1.length > 20) return "❌ Invalid username";
        if (password1.length < minPasswordLength) return "❌ Password too Short";
        if (age1 < minAge) return "❌ Not eligible" 
        return "Valid User";
    }
}

const standardValidator = makeUserValidator();
const strictValidator = makeUserValidator(12, 21);
console.log("**********************Test standard********************************");
console.log(standardValidator("testuser", "Test@123", 25));
console.log(standardValidator("", "Test@123", 25))
console.log("**********************Test Strict********************************");
console.log(strictValidator("testuser", "Test@123", 25));
console.log(strictValidator("testuser", "Test@123Secure!", 25));