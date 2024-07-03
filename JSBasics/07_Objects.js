let mySym = Symbol('Key1');

const myObj = {
    name: "Harminder",
    "Full Name": "Harminder Singh Saini",
    age: 29,
    job: "SD",
    greeting: function (){
        console.log("Hi, from Harminder")
    },
    [mySym] : "Harminder is King"
}

console.log(myObj.name)
console.log(myObj["Full Name"])
console.log(myObj[mySym])
// console.log(myObj[greeting()])
// console.log(myObj[greeting])
console.log(myObj.greeting)
console.log(myObj.greeting())