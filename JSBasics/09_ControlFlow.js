for (let a=1; a <= 10; a++){
    //console.log(a)
}

let score = 5

do{
   // console.log(score)
    score++
} while(score <=10)

///////////////////////////////////////////    //Specialized Loop for Arrays //////////////////////////////////////////////////////

// FOR OF

// Use case are Array and array of objects
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const i of arr){
    //console.log(i);
}

const greetings = "Hello Harminder"
for (const i of greetings){
   // console.log(i);
}

// MAP is a object in JS that hold Key-Value pair, and it keep track of the order in which data is inserted

const map = new Map()

map.set('IND', 'India');
map.set('CAN', 'Canada');
map.set('RUS', 'Russia');

for (const key of map){
     console.log(key);
 }

 // Now the output that we get is an array of key val pair , but we want key and value seperately
// [ 'IND', 'India' ]
// [ 'CAN', 'Canada' ]
// [ 'RUS', 'Russia' ]

// SO for that we can destructure the map object insode the for of loop
for (const [key, value] of map){
    console.log(key + ":-" + value);
}

// Now lets try the same on an object

const myObj = {
    name: 'Harminder',
    age: 29
}

// for (const [key, value] of myObj){
//     console.log(key + ":-" + value);
// }

// Here we will get an error that myObj is not iterable, so for of loop cannot be used for objects

// We can use FOR IN loop for objects

for (const key in myObj){
    //console.log(key + ":-" + myObj[key]);
}

// FOR IN also works on arrays

const myArr = [1,2,3,4,5]

for (const key in myArr){
   // console.log(key + ":-" + myArr[key]);  // One thing to note here is that we know obj have key, but what is meant by key in array, key are Index in array
}


// FOR IN cant work on Map, coz MAP is not iteratable



// FOR EACH LOOP

const newArr = ["JS", "JAVA", "C#", "PHP"]

//newArr.forEach(   ) // Now here forEach bol rha ki call back function do mujhe

// ok so lets give it a function first  newArr.forEach( function name() {}  )

// CAllback function means that it will not have any name, and it is intelligent enought to automatically loop thrugh each elemnt of the array
// so final syntax will be

newArr.forEach(  function (item) {
    console.log(item)
} )

// Using Arrow Functions

newArr.forEach( (item) => {
    console.log(item)
} )

// What id we create a function outside and pass it, Yes we can do it but MAKE SURE TO ONLY PASS THE REFERENCE IN THE LOOP, DO NOT PASS ANY ARGUMENT AS
//IT IS INTELLIGENT ENOUGH TO USE IT AUTOMATICALLY

function printME(val){
    console.log(val)
}

newArr.forEach(printME)

// NOW HERE THE CALL BACK FUNCTION DOES NOT ONLY HAVE ACCESS TO ONLY EACH ITEM, BUT ALSO THE INDEX OF THAT PARTICULAR ITEM AS WELL AS THE WHOLE ARRAY ITSELF

newArr.forEach( (item, INDEX, ARR) => {
    console.log(INDEX + ": " +  item + ", Arr: " + ARR)
} )

// SAme happens wiuth the array of objects