// COPY - MASOLAS
/* Objectet nem lehet csak ugy masolni - spread
Spread operator - nezzuk meg hogyan megy ez
 */

// NEW ARRAYs
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Copy of an array
const arr3 = [...arr1];

arr3.push(6);
console.log("arr1: ", arr1);
console.log("arr3: ", arr3);

// Merge-elhetunk tomboket ilyen modon
const arr4 = [...arr1, ...arr2];
console.log("arr4: ", arr4);


// OBJECT - spread operator

const userProfile = {
    name: "Magda",
    age: 80,
    country: "Hungary"
};

const userProfile2 = {...userProfile, gender: "Rather not say", name: "Pista"};

console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);

/*  Performance szempontjabol az object constructor jobb, mint itt masolgatni.  */