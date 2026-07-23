# Arrays Basics - Exercise

**Topic:** Arrays - Storing Multiple Values
**File to Create:** `arrays-test-tracking.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Create arrays with multiple values
- ✅ Access array elements by index
- ✅ Use array properties (.length)
- ✅ Add elements with push() and unshift()
- ✅ Remove elements with pop() and shift()
- ✅ Find elements with indexOf()
- ✅ Extract array portions with slice() (without modifying the original)
- ✅ Modify arrays in place with splice() (remove, insert, replace)
- ✅ Understand the core difference: slice() copies, splice() mutates
- ✅ Build test result collections

---

## Setup

1. Open VSCode
2. Create a new file: `arrays-test-tracking.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node arrays-test-tracking.js`

---

## Exercise 1: Test Suite Array

**Scenario:** Create an array to store test case names for a login module.

**Requirements:**
1. Create an array called `testCases` with these 5 test names:
   - "Valid credentials"
   - "Invalid password"
   - "Empty username"
   - "Empty password"
   - "Remember me checkbox"

2. Print the following:
   - The complete array
   - Total number of test cases
   - The first test case
   - The last test case (use .length, not hard-coded index!)

**Example Output:**
```
Test Suite: Login Module

Test Cases:
[ 'Valid credentials',
  'Invalid password',
  'Empty username',
  'Empty password',
  'Remember me checkbox' ]

Total test cases: 5
First test: Valid credentials
Last test: Remember me checkbox
```

---

## Exercise 2: Test Results Tracker

**Scenario:** Build a test results array dynamically as tests run.

**Requirements:**
1. Create an empty array called `testResults`
2. "Run" 5 tests by adding these results one by one:
   - "PASSED"
   - "PASSED"
   - "FAILED"
   - "PASSED"
   - "SKIPPED"
3. After adding each result, print: "Test X completed: [RESULT]"
4. At the end, print:
   - Total tests run
   - The complete results array
   - Check if "FAILED" exists (using indexOf)

**Example Output:**
```
Running Test Suite...

Test 1 completed: PASSED
Test 2 completed: PASSED
Test 3 completed: FAILED
Test 4 completed: PASSED
Test 5 completed: SKIPPED

Test Summary:
Total tests run: 5
Results: [ 'PASSED', 'PASSED', 'FAILED', 'PASSED', 'SKIPPED' ]
Contains failures: Yes (found at index 2)
```

---

## Exercise 3: Test Data Management

**Scenario:** Manage test user emails using array methods.

**Requirements:**
1. Create an array called `testEmails` with these initial values:
   - "user1@test.com"
   - "user2@test.com"
   - "user3@test.com"

2. Perform these operations:
   - Print initial emails and count
   - Add "user4@test.com" to the END
   - Add "admin@test.com" to the BEGINNING
   - Remove the last email
   - Remove the first email
   - Print final emails and count

**Example Output:**
```
Test Email Management

Initial emails:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]
Count: 3

After adding user4@test.com to end:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After adding admin@test.com to beginning:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After removing last email:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

After removing first email:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

Final count: 3
```

---

## Exercise 4: Test Score Analysis

**Scenario:** Store and analyze test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90

2. Calculate and print:
   - Total number of scores
   - First score
   - Last score
   - Check if score 95 exists in the array

**Example Output:**
```
Test Score Analysis

Scores: [ 85, 92, 78, 95, 88, 73, 90 ]
Total scores: 7

First score: 85
Last score: 90

Checking for specific scores...
Score 95 found: Yes (at index 3)
Score 100 found: No (index: -1)
```

---

## Exercise 5: slice() - Extract Test Subsets

**Scenario:** You have one big test suite, but you often want to run just a slice of it (e.g. "smoke tests only") without touching the original array.

**Requirements:**
1. Create an array called `testSuite` with these 6 test names:
   - "Smoke1", "Smoke2", "Smoke3", "Regression1", "Regression2", "Regression3"

2. Using `.slice()` (never modify `testSuite` directly), create:
   - `smokeTests` — the first 3 tests
   - `regressionTests` — the last 3 tests (use a **negative** index)
   - `middleTests` — tests from index 2 up to (not including) index 5
   - `testSuiteCopy` — a full copy of the entire array (call `.slice()` with no arguments)

3. Print each new array, and finish by printing `testSuite` again to prove the original array is still unchanged.

**Example Output:**
```
Full Test Suite: [ 'Smoke1', 'Smoke2', 'Smoke3', 'Regression1', 'Regression2', 'Regression3' ]

Smoke tests only (first 3): [ 'Smoke1', 'Smoke2', 'Smoke3' ]
Regression tests only (last 3): [ 'Regression1', 'Regression2', 'Regression3' ]
Middle tests (index 2-5): [ 'Smoke3', 'Regression1', 'Regression2' ]
Full copy: [ 'Smoke1', 'Smoke2', 'Smoke3', 'Regression1', 'Regression2', 'Regression3' ]

Original test suite unchanged: [ 'Smoke1', 'Smoke2', 'Smoke3', 'Regression1', 'Regression2', 'Regression3' ]
```

---

## Exercise 6: splice() - Modify Test List In Place

**Scenario:** Unlike `slice()`, `splice()` changes the array it's called on — perfect for editing a test list directly as requirements change.

**Requirements:**
1. Create an array called `testList` with these 5 test names:
   - "Login", "Logout", "Search", "Checkout", "Payment"
2. Print the original array.
3. **Step 1 — Remove:** Use `.splice()` to remove 1 element at index 2. Store the removed element(s) in a variable and print them, then print the array afterward.
4. **Step 2 — Insert:** Use `.splice()` to insert `"Home"` and `"Profile"` at index 1, **without removing anything** (`deleteCount` of 0). Print the array afterward.
5. **Step 3 — Replace:** Use `.splice()` to replace the element at index 0 with `"SignIn"`. Print the array afterward.
6. Print a closing note confirming that `.splice()` modifies the original array (unlike `.slice()`).

**Example Output:**
```
Original test list: [ 'Login', 'Logout', 'Search', 'Checkout', 'Payment' ]

Step 1 - Remove 1 element at index 2:
  Removed: [ 'Search' ]
  Array now: [ 'Login', 'Logout', 'Checkout', 'Payment' ]

Step 2 - Insert 'Home' and 'Profile' at index 1 (nothing removed):
  Array now: [ 'Login', 'Home', 'Profile', 'Logout', 'Checkout', 'Payment' ]

Step 3 - Replace element at index 0 with 'SignIn':
  Array now: [ 'SignIn', 'Home', 'Profile', 'Logout', 'Checkout', 'Payment' ]

Key point: splice() modifies the ORIGINAL array!
```

---

## Additional Challenges

### Challenge 1: Complete Test Report with Parallel Arrays

**Scenario:** Complete test report with parallel arrays.

**Requirements:**
Create a test report system with parallel arrays (same index = related data):

1. Create three arrays:
   - `testNames` - Array of 5 test names
   - `testResults` - Array of 5 results (PASSED/FAILED/SKIPPED)
   - `testDurations` - Array of 5 durations in seconds

2. Print a formatted report for each test showing:
   - Test number
   - Test name
   - Result
   - Duration

3. At the end, calculate and print:
   - Total tests
   - Total duration (sum of all durations)

**Example Output:**
```
════════════════════════════════════════
         TEST EXECUTION REPORT
════════════════════════════════════════

Test 1: Login with valid credentials
  Result: PASSED
  Duration: 2.5s

Test 2: Login with invalid password
  Result: FAILED
  Duration: 1.8s

Test 3: Logout functionality
  Result: PASSED
  Duration: 1.2s

Test 4: Search products
  Result: PASSED
  Duration: 3.4s

Test 5: Add to cart
  Result: SKIPPED
  Duration: 0.0s

════════════════════════════════════════
              SUMMARY
════════════════════════════════════════
Total tests: 5
Total duration: 8.9s
════════════════════════════════════════
```

---

### Challenge 2: slice() vs splice() Face-off

**Scenario:** Prove to yourself, side by side, which method mutates the original array and which one doesn't.

**Requirements:**
1. Create two **identical** arrays: `arrayA` and `arrayB`, both `["A", "B", "C", "D"]`.
2. Call `arrayA.slice(1, 3)` and store the result in `slicedResult`.
3. Call `arrayB.splice(1, 2)` and store the result in `splicedResult`.
4. Print `slicedResult`, then `arrayA` (should be unchanged).
5. Print `splicedResult`, then `arrayB` (should be modified).
6. Print a one-line takeaway summarizing the difference between the two methods.

**Example Output:**
```
Starting arrays:
  arrayA: [ 'A', 'B', 'C', 'D' ]
  arrayB: [ 'A', 'B', 'C', 'D' ]

After arrayA.slice(1, 3):
  Returned: [ 'B', 'C' ]
  arrayA: [ 'A', 'B', 'C', 'D' ]  (UNCHANGED)

After arrayB.splice(1, 2):
  Returned: [ 'B', 'C' ]
  arrayB: [ 'A', 'D' ]  (MODIFIED!)

Takeaway: slice() extracts a copy and leaves the original alone.
splice() edits the original array directly.
```

> **Want more on this?** `slice()`/spread only copy one level deep — see the dedicated `7b-shallow-deep-copy-exercise.md` exercise for the shallow-vs-deep-copy gotcha with nested arrays and objects.

---

## Common Mistakes to Avoid

**❌ Off-by-one error accessing last element:**
```javascript
// Wrong - goes beyond array
let last = array[array.length];  // undefined!

// Correct
let last = array[array.length - 1];
```

**❌ Confusing push/pop with unshift/shift:**
```javascript
// push/pop work at the END
array.push("item");    // Add to end
array.pop();           // Remove from end

// unshift/shift work at the BEGINNING
array.unshift("item"); // Add to beginning
array.shift();         // Remove from beginning
```

**❌ Forgetting arrays are zero-indexed:**
```javascript
// Wrong - first element is at index 0
console.log(array[1]);  // This is the SECOND element!

// Correct - first element
console.log(array[0]);  // This is the FIRST element
```

**❌ Assuming slice() modifies the array (or that splice() doesn't):**
```javascript
// slice() NEVER changes the original — it returns a new array
let original = ["A", "B", "C"];
let copy = original.slice(1);
console.log(original); // ["A", "B", "C"] — unchanged!

// splice() ALWAYS changes the original — it mutates in place
original.splice(1, 1);
console.log(original); // ["A", "C"] — changed!
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I understand zero-based indexing?
2. ✅ Can I access first and last elements correctly?
3. ✅ Do I know when to use push vs unshift?
4. ✅ Do I know when to use pop vs shift?
5. ✅ Can I use .length properly?
6. ✅ Do I understand how indexOf() works?
7. ✅ Can I extract a portion of an array with slice() without changing the original?
8. ✅ Can I remove, insert, and replace elements with splice()?
9. ✅ Do I understand the key difference between slice() and splice()?

---

## Reflection

**Think about:**
1. How are arrays better than multiple individual variables?
2. Where in testing do you track multiple values?
3. How could arrays improve your test data management?
4. What test scenarios would benefit from arrays?
5. When would you reach for slice() instead of splice(), or vice versa?

---

## Need Help?

**If you're stuck:**
1. Review the lesson materials
2. Check the presentation slides
3. Look at the demo code files
4. Remember: arrays start at index 0
5. Use console.log() to inspect arrays
6. Ask in the class forum

---

## Progress Check

**You can now:**
- ✅ Create and use arrays
- ✅ Access elements by index
- ✅ Add and remove elements
- ✅ Find elements in arrays
- ✅ Extract array subsets with slice()
- ✅ Remove/insert/replace elements with splice()
- ✅ Manage collections of test data
