const user = {
    _email: "har@gmail",
    _pass: "ABC",

    get email(){
        return `${this._email}abc!@^&`
    }, 
    set email(value){
        this._email = value
    }
}

const myUser = Object.create(user);

//console.log(myUser.email("rimpy@gmail.com"))
console.log(myUser.email)