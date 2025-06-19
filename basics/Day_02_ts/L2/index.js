"use strict";
console.log("Learning typescript");
// unnown -> it is used the we don't know the input like it might be a number or a  string or booelan
let userInput;
// let userInput : any;
let userName;
userInput = 10;
userName = "Rajeshan";
// userName = userInput
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
const res = generateError("Internal server error", 500);
console.log(res);
