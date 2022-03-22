// PROMISE

/* const showMessageLater = (msg) => {
    setTimeout(() => {
        return msg
    }, 3000)
}

console.log(showMessageLater("Hello")); */ // => undefined jon vissza, mivel a setTimeout miatt kesobb jonne a Hello, amire a log nem var. Erre jott letre a promise, amivel ra tudjuk birni az egeszet, hogy lenyegeben kiirja nekunk. Fetch is ilyen promise-szal mukodik. 

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

showMessageLater("Hello2").then( (result) => {
    console.log(result)
    showMessageLater("Hello3").then( (result) => {
        console.log(result)
        showMessageLater("Hello4").then( (result) => {
            console.log(result)
        })
    })
}).catch( (error) => {
    console.log(error);
})

// Promise-okban bonyolult megirni. A kod sem olyan szep es dogos. 

// Szunetben - hogyan lehetne ezt atalkitani egy kicsit szebb megoldasra - fetch -esen

