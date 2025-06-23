console.log("Learning interface");
var user1;
user1 = {
    name: "maharjan",
    age: 21,
    greet: function (text) {
        console.log("".concat(text, " ").concat(this.name));
    }
};
console.log(user1);
user1.greet("hi there, i am Rajeshan");
