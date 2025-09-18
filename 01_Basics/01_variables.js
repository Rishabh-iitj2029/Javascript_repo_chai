const accountId = 144789;
let accountemail = "rishabh@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

let accountState;
// accountId = 45 //not aalowed

accountPassword = "4584"
accountemail = "hello"
accountCity = "patna"
console.log(accountCity);

/*
prefer not use var 
beacuse of issue in block scope nad functional scope
*/


console.log(accountPassword);
console.log(accountemail)

console.log(accountId);

console.table([accountId, accountPassword, accountemail, accountCity, accountState])
