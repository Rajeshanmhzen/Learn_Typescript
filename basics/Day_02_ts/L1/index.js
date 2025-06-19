"use strict";
console.log("Let's Learn fucntions");
function addHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
});
