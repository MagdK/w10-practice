// TERNARY OPERATOR

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