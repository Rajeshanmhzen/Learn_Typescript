console.log("Learning interface");
var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.greet = function (text) {
        console.log("".concat(text, " ").concat(this.name));
    };
    return Person1;
}());
var p1 = new Person1("Rajeshan");
p1.greet("Hi, i am ");
