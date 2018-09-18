///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve();
        else reject();
    });
    return p;
}

//// Add code here that will "flip" the coin ten times and write the 
//// result to the console (e.g. "Heads" or "Tails" for each flip).
for (let i = 0; i < 10; i++) {
    
    // let p = new Promise((resolve, reject)=>{ 
   
    // if (flip()) resolve();
    // else reject()
    // });           // what happens if you remove this?

    flip().then(()=> {console.log("Head"); console.log("Tails")})
    

    // .catch((err)=> {console.log("tails")})
}



///// Problem 2 - More fun...

function countBig(bignum) {
	return new Promise( (resolve,reject) => { 
		setTimeout(() => {resolve()}, bignum)

	} )  
    // Add code here that returns a Promise that will resolve after it has counted to bignum
}


start = Date.now();
bignum = 1000000000;
countBig(1000).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})

