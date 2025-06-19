console.log("Learning typescript");
// unnown -> it is used the we don't know the input like it might be a number or a  string or booelan
var userInput;
// let userInput : any;
var userName;
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
var res = generateError("Internal server error", 500);
console.log(res);
