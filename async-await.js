const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(msg === "Hello") {
                return reject("Something went wrong")
            }
            return resolve(msg)
    }, 2000)
    })
}

const myFunction = async () => {
    
    try {
        let result = ""
        result = await showMessageLater("hello5")
        console.log(result);
        result = await showMessageLater("hello6")
        console.log(result);
        result = await showMessageLater("hello7")
        console.log(result);
        // erre error-t kellene dobnia, de nekem nem dob
        result = await showMessageLater("Hello")
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

myFunction();

/* 
Garbage collection - erre is figyelni kell
Ez az async-await az sokkal tisztabb, nem lesz kaosz. 

Mai nap zarasa: ha meg egyszer leduplikaljuk es direkt hibat irunk
*/ 