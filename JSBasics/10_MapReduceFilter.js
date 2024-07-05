// DIFFERENCE Between ForEach and Map

//FOR EACH does not return a value, even if you put return as explicit, it even then wont retunr

// MAP do return it

const newArr = ["JS", "JAVA", "C#", "PHP"]

const val = newArr.forEach((item) => {
    return item
})

console.log(val)


const val2 = newArr.map( (item) => {   // means agar {} toh return word explicitly likhna hoga why because, By using {} hum ek scope create krte hai and that should return a value
 return item
})
console.log(val2)

const val3 = newArr.map( (item) => (  // means agar () toh return nhi likhna hoga
    item
))
   console.log(val3)


// FILTEr

const numArr = [1,2,3,4,5,6,7,8,9,10]

const finalVal = numArr.filter( (item) => {
    return item > 4
})

console.log(finalVal)

const books = [
    {title:'Book One', genre:'Fiction', public:1991, edition:2004},
    {title:'Book Two', genre:'History', public:1992, edition:2005},
    {title:'Book Three', genre:'Sci-Fi', public:1993, edition:2006},
    {title:'Book Four', genre:'Fiction', public:1994, edition:2007},
    {title:'Book Five', genre:'History', public:1995, edition:2008},
    {title:'Book Six', genre:'Comedy', public:1996, edition:2009}
]

const fictionData = books.filter((eachBook) => {
    return eachBook.genre === "Fiction"
})

console.log(fictionData)

const BookEdition = books.filter((eachBook) => {
    return eachBook.edition > 2005
})

console.log(BookEdition)

//////////////////////////////////////////////////////////////// Chaining Concept ///////////////////////////////////////////////////////////////////

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const final = numbers
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num > 40)

//                 console.log(final)

const final = numbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num,index) => index > 3)

                console.log(final)

numbers.map( (item, index,arr) => {
    console.log(`Hi ${item} :  ${index} :  ${arr}`)
})

