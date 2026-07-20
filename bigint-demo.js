/*** *******************BigInt — Large Number Precision**************************************/

let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

// BigInt behavior

let bigMax = 9007199254740991n;
console.log(bigMax + 1n);
console.log(bigMax + 2n);
console.log(bigMax + 3n);

// typeof BigInt

console.log(typeof bigMax);

// Mixing BigInt and Number throws an error

try {
    console.log(bigMax + 1);
    console.log("bigmax result : ", bigMax);
} catch (error){
    console.log("error while mixing BigInt and Number");
    console.log(error.message);

}
