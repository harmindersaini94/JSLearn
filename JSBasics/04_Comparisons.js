console.log("2" > 1)// true, although JS implicitly converted it, but it is not recommended.


console.log(null > 0)  //false
console.log(null === 0) //false
console.log(null >= 0) //true

// this is because js convert null and convert it to 0 that is why 3rd is true.
// now 2nd should also be true but is not because == comparison works differently that <= pr >= 

