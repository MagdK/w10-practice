// console.log("hello");
/* Nem bongeszo related a dolog - backend. Nem szabad megijedni, csuszkalo fogalmak.  

Ha hasznaltunk git-et, akkor az is egy felhasznaloi felulet, az FE. 

Ma nem fogjuk megnyitni a bongeszot. 
3-4 topicon megyunk vegig. 
Onnaloan is menjunk utana, keressunk ra azokra, amikben bizonytalanok vagyunk. 


1. FILTER - lenyeg, hogy kiszur valamit es beletesz bizonyos dolgokat az ujjonnan letrejovo tombbe. 

Igaz jellegu meg hamis jellegu allitasok. 

https://developer.mozilla.org/en-US/docs/Glossary/Truthy?retiredLocale=nl

https://developer.mozilla.org/en-US/docs/Glossary/Falsy


Ha letezik egy objektum, megha ures is, igaz lesz. Ures tomb is igaz lesz. 

Az ures string az falsy lesz.
*/

// NEW ARRAY - FILTER
// console.log-olasnal ki lesz veve a 0, null, NAN undefined es false. Truthy erteket hagyja benne 
let arr = ["apple", 0, "0", null, NaN, undefined, false, {}]

let result = arr.filter(item => item);
console.log(result);

// Csinaljunk egy arrow functiont visszaalakitani sima function-re (fentebb)
