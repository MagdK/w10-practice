const userProfile = {
    name: "Magda",
    age: 80,
    country: "Hungary"
};

/* const name = userProfile.name;
const age = userProfile.age; // az alabbi sor ennek a roviditese
 */

/* const {name, age} = userProfile;
console.log("name: ", name);
console.log("age: ", age); */

/*  Ha van egy objektumunk, kulcsertek parokkal - kapcsos zarojelekkel fel tudjuk bontani es valtozokent letre tudjuk hozni oket (name, age). 

Hatranya, hogy nem tudjuk atnevezni a valtozot. 

Nagyon fontos resze ennek: milyen az ha objektumot adunk at argumentumkent?
*/

/* const logNameAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
}

logNameAge(userProfile); */


// Desctructuring
const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}

logNameAndAge(userProfile);

// Mar itt fel tudjuk bontani is ki tudjuk szedni a kulonbozo kulcsokat


// Destructuring in array

const arr1 = [8, 6, 3, 4];
const first = arr1[0];
const second = arr1[1];

console.log("first: ", first);
console.log("second: ", second); 


const [c, d] = arr1;
console.log("c: ", d);
console.log("d: ", d);

/* 
Mikor hasznaljunk destructuring-ot, 3-adik milestone - alapvetesei  a react-es kodoknak. Angularon belul is  a fentebb hasznalt dolgok, legyenek meg, rutinszeruen hasznaljuk, kulonben a kodok megertese tok nagy nehezseget tud okozni.  
*/

const [x, ...y] = arr1;
console.log("x: ", x); // => x:  8
console.log("y: ", y); // => y:  [ 6, 3, 4 ]