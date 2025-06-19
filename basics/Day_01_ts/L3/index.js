"use strict";
console.log("Lession 3");
// UNiON,  LITREAL TYPES, TYPE ALIAS / CUSTOM TYPEs
// *************** union | -> pipe in typescrit***************
function combine(num1, num2) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine(10, 20));
console.log(combine("Frontend", " Developer"));
//************** */ LITREAL TYPES *************
function combine2(num1, num2, conversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        // result= num1 + num2
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine2(10, "20", "as-number"));
console.log(combine2("Frontend", " Developer", "as-string"));
function combine3(num1, num2, conversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-string") {
        // result= num1 + num2
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine3(10, "20", "as-number"));
console.log(combine3("Frontend", " Developer", "as-string"));
const user = {
    name: "Raj",
    age: 12,
    skills: ["Reactjs", "Nodejs"]
};
//  for interface 
// interface User_name {
//code
// }
function greet(user) {
    console.log(`hi, I am ${user.name}`);
}
greet(user);
