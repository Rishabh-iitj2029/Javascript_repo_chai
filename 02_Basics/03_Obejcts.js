// singleton
// Object.create()

// Object literals

let mykey = Symbol("It's Ok")

const JsUser = {
    name: "Rishabh",
    "full name": "Rishabh Raj",
    email: "rishabh@gmail.com",
    [mykey]: "It's Ok",
    age: 18,
    location: "Patna",
    IsLoggedIn: false,
    lastLoginDays : ["monday", "wednesday", "saturday"]
}
console.log(mykey);

console.log(JsUser.name);
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser[mykey]);

JsUser.email = "rishabh_iitj@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Hello@gmail.com"
console.log(JsUser)


JsUser.greetings = function(){
    console.log(`Hello JsUser !`)
}

JsUser.greetingstwo = function(){
    console.log(`Hello ${JsUser.name}`)
}

// console.log(JsUser.greetings())
console.log(JsUser.greetingstwo())
