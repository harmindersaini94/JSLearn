const num = [1,2,3]

const final1 = num.reduce( function (acc, currVal) {
    return acc + currVal
}, 0)

console.log(final1)

const final2 = num.reduce((acc, currVal) => acc + currVal, 0)

console.log(final2)

// use case

// Like suppose kro hume ek array ya koi obj diya hai jisme hume prev val ko add kr k total sum banana hai, toh traditinally
// hum kya krte hai ki ek variable loop k bahr lete hai aur bhi add krte and so on
// at that place we can make use of Reduce method

// here jo 0 humne diya hai vo start value hai accumulator hi, jo val hum return krenge each iteration k baad  that gets save in the accumulaor.

const shoppingCart = [
    {
        itemName: "JS",
        price: 250
    },
    {
        itemName: "PHP",
        price: 350
    },
    {
        itemName: "C#",
        price: 450
    },
    {
        itemName: "C++",
        price: 550
    }
]

// Now the task here is to add all the prices

const sumCourse = shoppingCart.reduce( (acc, item) => acc+ item.price, 0)
console.log(sumCourse)