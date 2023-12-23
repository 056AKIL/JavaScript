const accountId = 12344;
// accountId = 123123 change const value is not allowed !!
let accountEmail = "akil@gmail.com";
var accountPassword = "123456"; 
/*
Prefer not to use var
Because of issues in Block scope and functional scope
*/
accountCity = "Patna"; // Aese bhi variable create nhi krna chahiye
let accountState; //Undefined return krega

console.log(accountId);
console.table([accountId, accountEmail,accountCity,accountState,accountPassword])