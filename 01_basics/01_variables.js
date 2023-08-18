const accountId = 164253
let accountEmail = "sidhant@microsoft.com"
var accountPassword = 123456
accountCity = "Pune"
let accountState;

// accountId = 2       // not allowed

accountEmail = "sa@sa.com"
accountPassword = 651
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);