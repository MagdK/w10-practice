// TERNARY OPERATOR

/* 
Conditional (ternary) operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement. 

Syntax
condition ? exprIfTrue : exprIfFalse
*/

/* 
Akkor fog jol menni, ha hasznaljuk ezeket aktivan, kulonben elfeljetjuk konnyen es hosszu ido megfejteni. 
*/

/* const [min, max] = [5, 30]

if(min < max) {
    console.log("Min lower than max ");
} else {
    console.log("Min is NOT lower than max");
} */

// Hogy nez ki mindez ternary operator-rel?

const [min, max] = [5, 30]

/* min < max ? console.log("Min lower than max") : console.log("Min is NOT lower than max"); */

// Ha kerdojelet latunk, abbol mar tudjuk, hogy az a ternary operator jele

console.log(`Min ${min < max ? "" : "NOT"}lower than max`);