var c = 100

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: " + c)
}

// console.log(a) // will give error
// console.log(b) // will give error
console.log("Outer: " + c)
//Output will be 30 for both coz it modified the data
//Inner: 30
//Outer: 30