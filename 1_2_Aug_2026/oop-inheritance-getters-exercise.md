# OOP: Inheritance, Overriding, Getters & Setters

**Topics:** `extends`/`super`, calling a parent method with `super`, overriding, what happens when a child class skips its constructor, getters and setters, read-only getters, private fields
**File to create:** `oop-inheritance-getters-exercise.js`

A quick note on scope: every class below is small on purpose — a field or
two, a method or two. The point is to see each concept clearly without a
sprawling class hierarchy getting in the way. I'm using everyday things
(an Animal, a Vehicle, an Employee, a Wheel, a BankAccount, a Shape)
instead of test-automation objects, so the OOP mechanics don't get lost in
domain noise.

One heads-up before you start: a few of the "try it yourself" bits below
are designed to break your code on purpose, so you see the actual error
instead of just reading about it. Don't leave that broken code sitting in
your file afterward — try it, read the error, then take it back out before
moving to the next exercise. One of them (private fields, Exercise 6) will
stop your *entire* file from running if you leave it in, and I'll explain
why when we get there.

---

## What you should walk away with

- Building a parent/child relationship with `extends`
- Calling the parent constructor with `super(...)`
- Calling a parent's *method* (not just its constructor) from the child, with `super.methodName()`
- Overriding a parent method
- What actually happens when a child class has no constructor of its own
- Getters and setters, including validating input in a setter
- What happens if you call a getter like a function (it breaks — you'll see why)
- Making a getter read-only just by not writing a setter for it
- The classic "setter calls itself" recursion bug, and how to dodge it
- Why a getter/setter pair needs a separate backing field to actually store anything
- Private fields (`#`) versus the `_underscore` naming convention
- Why JavaScript doesn't really have "overloading" the way Java does

---

## Setup

1. Open VSCode
2. Create a new file: `oop-inheritance-getters-exercise.js`
3. Save it in your `js-automation-training` folder
4. Run it as you go: `node oop-inheritance-getters-exercise.js`

---

## Exercise 1: Animal, Dog, Cat — Inheritance & Overriding

A generic `Animal` just "makes a sound." That's not very interesting — a
`Dog` should bark, a `Cat` should meow. This is the whole idea behind
overriding: the child class swaps in its own version of a method in place
of the parent's.

**What to build:**
1. An `Animal` class with a constructor that takes `name`, and a `speak()` method that logs `<name> makes a sound.`
2. A `Dog` that extends `Animal` — no extra fields needed, just override `speak()` to log `<name> barks.`
3. A `Cat` that extends `Animal` the same way, overriding `speak()` to log `<name> meows.`
4. Make one plain `Animal` ("Rex"), one `Dog` ("Buddy"), and one `Cat` ("Whiskers"), and call `speak()` on each.
5. Print a couple of `instanceof` checks showing that `buddy` is both a `Dog` and an `Animal`.

A quick aside on `instanceof`, since we haven't covered it on its own: it's
the most direct way to confirm that inheritance actually did what you
think it did. `object instanceof ClassName` comes back `true` if `object`
was built from `ClassName`, or from any class that `extends` `ClassName` —
not just its own immediate class. That's why `buddy instanceof Dog`
**and** `buddy instanceof Animal` both come back `true` — Dog extends
Animal, so a Dog is a Dog, but it's also an Animal. You'll run into this
pattern a lot in real code — things like `if (shape instanceof Circle) {
... }`, or test assertions confirming an object was built by the class
you expected.

**Example Output:**
```
=== Exercise 1: Inheritance & Method Overriding ===

Generic Animal speaks:
  Rex makes a sound.

Dog speaks (overridden):
  Buddy barks.

Cat speaks (overridden):
  Whiskers meows.

Inheritance check:
  buddy instanceof Dog: true
  buddy instanceof Animal: true
  whiskers instanceof Cat: true
  whiskers instanceof Animal: true
```

**Starter code:**
```javascript
console.log("=== Exercise 1: Inheritance & Method Overriding ===\n");

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        // Your code here
    }
}

class Dog extends Animal {
    // Your code here - override speak()
}

class Cat extends Animal {
    // Your code here - override speak()
}

let rex = new Animal("Rex");
let buddy = new Dog("Buddy");
let whiskers = new Cat("Whiskers");

// Call speak() on each, then print the instanceof checks
```

Before you move on, a quick side question. Some languages — Java, for
one — let you define the same method name more than once in a class, as
long as the parameter lists differ. That's called overloading. Now look at
this (don't actually add it to your file, just think it through):

```javascript
class Animal {
    speak() { console.log("..."); }
}

class Dog extends Animal {
    speak(volume) { console.log("..."); }
}
```

Is `Dog.speak(volume)` overloading `Animal.speak()`, or overriding it? Sit
with it for a second before checking the answers file — the parameter
difference is exactly what makes this a trick question in JavaScript.

---

## Exercise 2: Puppy — Calling the Parent's Method with super

Overriding a method doesn't have to mean throwing the parent's version
away entirely. Sometimes you want the parent's behavior to run first and
then add something on top of it. That's what `super.methodName()` is for.

**What to build:**
1. A `Puppy` that extends `Dog` (the one from Exercise 1).
2. Override `speak()` in `Puppy` so it calls `super.speak()` first — which runs `Dog`'s version and logs `<name> barks.` — and then logs one more line: `<name> also wags its tail excitedly.`
3. Create a `Puppy` named "Max," call `speak()`, and check you get both lines.

**Example Output:**
```
=== Exercise 2: Calling the Parent Method with super ===

Puppy speaks (calls super.speak(), then adds more):
  Max barks.
  Max also wags its tail excitedly.
```

**Starter code:**
```javascript
console.log("\n=== Exercise 2: Calling the Parent Method with super ===\n");

class Puppy extends Dog {
    speak() {
        // Your code here - call super.speak() first, then add the extra line
    }
}

let maxPuppy = new Puppy("Max");
console.log("Puppy speaks (calls super.speak(), then adds more):");
maxPuppy.speak();
```

Worth pointing out: `super.speak()` here calls `Dog`'s `speak()`
specifically — the direct parent — not `Animal`'s. If `Dog.speak()` had
*also* called `super.speak()`, you'd see all three layers fire in order:
`Animal`, then `Dog`, then `Puppy`.

---

## Exercise 3: Vehicle, Car — Skipping the Constructor

You don't always have to write a constructor in a child class. Leave it
out, and JavaScript still wires the object up correctly using the
parent's.

**What to build:**
1. A `Vehicle` class with a constructor taking `brand` and `wheels`, and a `describe()` method that logs `<brand> vehicle with <wheels> wheels.`
2. A `Car` that extends `Vehicle` — **write no constructor for `Car` at all.** Just add one new method, `honk()`, logging `<brand> says: Beep beep!`
3. Create a `Car` by calling `new Car("Toyota", 4)` — the same way you'd call `new Vehicle("Toyota", 4)`.
4. Call `describe()` and `honk()` on it, and notice that `this.brand` / `this.wheels` were set correctly even though `Car` never touched them itself.

**Example Output:**
```
=== Exercise 3: Child Class Without Its Own Constructor ===

Creating a Car (Car has no constructor of its own)...
  Toyota vehicle with 4 wheels.
  Toyota says: Beep beep!
```

**Starter code:**
```javascript
console.log("\n=== Exercise 3: Child Class Without Its Own Constructor ===\n");

class Vehicle {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }

    describe() {
        // Your code here
    }
}

class Car extends Vehicle {
    // Do NOT add a constructor here!
    honk() {
        // Your code here
    }
}

console.log("Creating a Car (Car has no constructor of its own)...");
let myCar = new Car("Toyota", 4);
// Call describe() and honk() on myCar
```

Why this actually works: when a child class has no constructor at all,
JavaScript behaves as though you'd written this yourself:
```javascript
class Car extends Vehicle {
    constructor(...args) {
        super(...args);
    }
}
```
Every argument you pass to `new Car(...)` gets forwarded straight into
`Vehicle`'s constructor. You only need to write your own constructor when
the child needs to do something *extra* — like `Rectangle` in Exercise 7,
which stores `width` and `height` on top of whatever `Shape` already sets
up.

---

## Exercise 4: Employee — Getters & Setters

An employee's salary shouldn't be settable to just anything, and "annual
salary" doesn't need to be its own stored field — it can just be computed
from the monthly one whenever you ask for it.

**What to build:**
1. An `Employee` class with a constructor taking `name` and `monthlySalary`, storing salary internally as `this._salary`.
2. A getter `salary` that returns `this._salary`.
3. A setter `salary` that rejects anything `<= 0` — logging `"❌ Salary must be greater than 0. Keeping current salary: <current salary>"` and leaving `_salary` untouched — and otherwise updates `_salary` and logs `"✓ Salary updated to: <new salary>"`.
4. A getter `annualSalary` that returns `this._salary * 12` — nothing stored separately, just computed on the fly.
5. Create an employee ("Priya", 5000). Print salary and annual salary. Try setting salary to `-100` (should get rejected). Then set it to `5500` (should go through) and print the new annual salary.

**Example Output:**
```
=== Exercise 4: Getters and Setters ===

Creating employee...
  Name: Priya
  Monthly salary: 5000
  Annual salary: 60000

Trying to set an invalid salary:
  ❌ Salary must be greater than 0. Keeping current salary: 5000

Setting a valid new salary:
  ✓ Salary updated to: 5500
  New annual salary: 66000
```

**Starter code:**
```javascript
console.log("\n=== Exercise 4: Getters and Setters ===\n");

class Employee {
    constructor(name, monthlySalary) {
        this.name = name;
        this._salary = monthlySalary;
    }

    get salary() {
        // Your code here
    }

    set salary(value) {
        // Your code here - validate value > 0
    }

    get annualSalary() {
        // Your code here
    }
}

console.log("Creating employee...");
let priya = new Employee("Priya", 5000);
// Print name, salary, annualSalary

console.log("\nTrying to set an invalid salary:");
priya.salary = -100;

console.log("\nSetting a valid new salary:");
priya.salary = 5500;
// Print the new annualSalary
```

Once this is working, try the three things below on that same `priya`
object — one at a time, undoing each before you try the next one.

**Try it — call the getter like a method.** Add this line right after your
code and run it:
```javascript
console.log(priya.salary());
```
What error do you get, and why? (Pull the line back out before you
continue — it crashes everything after it.)

**Try it — the setter recursion bug.** In your `Employee` class, change the
line inside the setter that updates the value — from `this._salary = value;`
to `this.salary = value;` (just drop the underscore) — and run the file
again. What happens? Read the error message closely. (Put the underscore
back before moving on.)

**Worth thinking about — why does `_salary` exist at all?** Why did we
store the value as `this._salary` in the constructor instead of simply
writing `this.salary = monthlySalary;`? Think about what that line would
actually call, given that `salary` is a getter/setter pair — and connect
it to what you just saw with the recursion bug above.

---

## Exercise 5: Wheel — Read-only Getters

Some properties should only ever be read, never written directly. A getter
with no matching setter gets you that for free, no extra code needed.

**What to build:**
1. A `Wheel` class with a constructor taking `radius`, and a getter `diameter` returning `radius * 2` — **don't write a setter for it.**
2. Create a `Wheel` with `radius = 10`. Print `diameter`.
3. Try assigning `wheel.diameter = 100`, then print `diameter` again.

**Example Output:**
```
=== Exercise 5: Read-only Getter ===

Wheel diameter: 20
Trying to set wheel.diameter = 100...
Wheel diameter after assignment attempt: 20
```

**Starter code:**
```javascript
console.log("\n=== Exercise 5: Read-only Getter ===\n");

class Wheel {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        // Your code here
    }
}

let wheel = new Wheel(10);
console.log(`Wheel diameter: ${wheel.diameter}`);

console.log("Trying to set wheel.diameter = 100...");
wheel.diameter = 100;
console.log(`Wheel diameter after assignment attempt: ${wheel.diameter}`);
```

So — `wheel.diameter = 100` doesn't throw an error. Why didn't `diameter`
actually become `100`, then?

---

## Exercise 6: BankAccount — Private Fields

`this._salary` back in Exercise 4 is only a naming convention — nothing
technically stops outside code from reading or overwriting
`employee._salary` directly if it wants to. A private field (`#`) is a
different animal entirely: it's enforced by the language itself, not just
by politeness.

**What to build:**
1. A `BankAccount` class with a **private field** `#balance` starting at `1000`, a `deposit(amount)` method that adds to it, and a getter `balance` that returns it.
2. Create a `BankAccount`. Print the starting balance, deposit `250`, and print the balance again.

**Example Output:**
```
=== Exercise 6: Private Fields ===

Starting balance: 1000
Balance after deposit: 1250
```

**Starter code:**
```javascript
console.log("\n=== Exercise 6: Private Fields ===\n");

class BankAccount {
    #balance = 1000;

    deposit(amount) {
        // Your code here
    }

    get balance() {
        // Your code here
    }
}

let acc = new BankAccount();
console.log(`Starting balance: ${acc.balance}`);
acc.deposit(250);
console.log(`Balance after deposit: ${acc.balance}`);
```

**Try this one, but in a separate throwaway file — not your main one.**
Create something like `private-field-test.js` with just this in it:

```javascript
class BankAccount {
    #balance = 1000;
    get balance() { return this.#balance; }
}

let acc = new BankAccount();
console.log(acc.balance);   // this line
console.log(acc.#balance);  // this line
```

Run it with `node private-field-test.js`. What happens? Does the first
`console.log` line even print anything before the error shows up? What
does that tell you about *when* this error occurs, compared to the ones
you saw in Exercises 4 and 5?

And for comparison: if `BankAccount` had used `this._balance` instead,
what would `acc._balance` return from the outside? Why is that so
different from what just happened with `acc.#balance`?

---

## Exercise 7: Shape, Rectangle, Circle — Putting It All Together

A shape's area obviously depends on what kind of shape it is — a natural
fit for a getter that gets overridden differently in each subclass.

**What to build:**
1. A `Shape` class with a constructor taking `name`, and a getter `area` that returns `0` (a generic shape with no formula has no area).
2. A `Rectangle` extending `Shape`: constructor takes `width` and `height`, calls `super("Rectangle")`, then stores both. Override `area` to return `width * height`.
3. A `Circle` extending `Shape`: constructor takes `radius`, calls `super("Circle")`, then stores it. Override `area` to return `Math.PI * radius * radius`, rounded to 2 decimals (`.toFixed(2)`, wrapped in `Number(...)` if you want an actual number back instead of a string).
4. Build an array of 3 shapes: `Rectangle(6, 4)`, `Circle(5)`, `Rectangle(4, 3)`.
5. Loop through and print `Shape: <name>, Area: <area>` for each — note you access `.area` like a plain property, no parentheses.

**Example Output:**
```
=== Exercise 7: Combining It All ===

Shape: Rectangle, Area: 24
Shape: Circle, Area: 78.54
Shape: Rectangle, Area: 12
```

**Starter code:**
```javascript
console.log("\n=== Exercise 7: Combining It All ===\n");

class Shape {
    constructor(name) {
        this.name = name;
    }

    get area() {
        // Your code here
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        // Your code here - call super() first!
    }

    get area() {
        // Your code here - override
    }
}

class Circle extends Shape {
    constructor(radius) {
        // Your code here
    }

    get area() {
        // Your code here - override, round to 2 decimals
    }
}

let shapes = [
    new Rectangle(6, 4),
    new Circle(5),
    new Rectangle(4, 3)
];

// Loop through shapes and print name + area
```

---

## A Few Things That Trip People Up

Using `this` before you've called `super()` in a child constructor:
```javascript
class Rectangle extends Shape {
    constructor(width, height) {
        this.width = width;  // ERROR! Must call super() first
        super("Rectangle");
    }
}
```
`super()` always has to come first:
```javascript
class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
}
```

Overriding a method and forgetting you've dropped the parent's behavior
entirely:
```javascript
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
        // Animal's original speak() never runs here unless you call
        // super.speak() yourself — see Exercise 2.
    }
}
```

Adding a constructor to a child class "just in case," with nothing new
for it to actually do:
```javascript
class Car extends Vehicle {
    constructor(brand, wheels) {
        super(brand, wheels);  // Does nothing extra — not wrong, just unnecessary
    }
}
```
If the child has nothing new to set up, just leave the constructor out
(see Exercise 3) — JavaScript generates the equivalent one for you anyway.

Calling a getter like it's a method:
```javascript
console.log(rectangle.area());  // WRONG — area is a getter, not a function
```
It's just a property access, no parentheses:
```javascript
console.log(rectangle.area);
```

Writing a setter that assigns back to its own property name:
```javascript
set salary(value) {
    this.salary = value;   // Calls the setter again... forever
}
```
Write to a differently-named backing field instead:
```javascript
set salary(value) {
    this._salary = value;
}
```

---

## The Short Version

**Inheritance** — `class Child extends Parent` sets up the relationship.
`super(...)` calls the parent constructor and has to run before you touch
`this`. `super.methodName()` calls the parent's version of a method you've
overridden — handy when you want to add to the parent's behavior instead
of replacing it outright.

**Overriding, not overloading** — a child method with the same name as a
parent method simply replaces it for that child. JavaScript has no real
concept of overloading; parameters don't factor into how a method gets
resolved at all. Only the last method with a given name in a class body
sticks.

**Constructor-less child classes** — if a child class defines no
constructor, JavaScript treats it as though it wrote
`constructor(...args) { super(...args); }` for you. Only bother writing
your own when the child needs to do something the parent's constructor
doesn't already handle.

**Getters and setters** — `get propName()` lets you read something as a
plain property (no parentheses); calling it *with* parentheses tries to
call whatever it returned as a function, which usually throws a
`TypeError`. `set propName(value)` lets you validate or transform on
write. A getter with no setter is effectively read-only — assigning to it
just does nothing. And the pair needs a separate backing field
(`_salary`) to actually hold the value — write `this.salary = ...` inside
the `salary` setter itself and you get infinite recursion
(`RangeError: Maximum call stack size exceeded`).

**Private fields** — `#balance` is real, language-enforced privacy: code
outside the class can't read or write it, and referencing an undeclared
`#name` from outside is a `SyntaxError` at *parse* time, before any code
even runs — not a normal runtime error. Compare that to `_balance`, which
is just a naming convention — fully public, fully accessible, just a
polite request not to touch it directly.

---

## Questions Worth Asking Yourself

- Can you build a parent/child pair with `extends` from scratch?
- Do you get *why* `super()` has to run before `this` in a child constructor?
- Can you call a parent's method from an overriding child method with `super.methodName()`?
- Could you explain to someone why JS overriding isn't the same thing as Java-style overloading?
- Do you know what JavaScript does behind the scenes when a child class skips its constructor?
- Can you write a getter/setter pair with validation in the setter, without help?
- What error do you get if you call a getter with `()`? Why that specific error?
- Can you make a read-only getter, and explain why assigning to it doesn't do anything?
- Why does a getter/setter need a backing field, and what breaks if it doesn't have one?
- Can you explain `_balance` (convention) versus `#balance` (actually enforced) in your own words?

If most of those feel shaky, that's fine — go back through the exercise
that covers it and try the "try it yourself" bits again before moving on.

---

## Something to Chew On

1. Why doesn't `Car` in Exercise 3 need its own constructor, but `Rectangle` in Exercise 7 does?
2. In Exercise 2, what would you need to change about `Dog.speak()` so that `Puppy.speak()` eventually prints `Animal`'s original message too?
3. Why is the private-field `SyntaxError` from Exercise 6 more dangerous to stumble into by accident than the `TypeError` or `RangeError` from Exercise 4?

---