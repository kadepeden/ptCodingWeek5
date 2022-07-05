console.log("Is this thing on?");

//try-catch blocks help handle "exceptions"
//these are errors that are unexpected
//we write code that catches these

// list.push("hello");
// console.log("Goodbye");

//in this example, "goodbye" never gets run because the program crashed at the "push" line
//add try and catch blocks

try {
    list.push("Hello");
} catch (err) {
    console.log(err);
}
console.log("Goodbye");

//finally blocks come after try-catch blocks
//try-catch blocks are for handling inputs that are outline of our code
//things like accessing networks and user-input