"use strict";
//  compile time polymorphism
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add("Hi, ", "Rajeshan"));
// ************** run time polymorphism *******************
class Animal {
    makeSound() {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog Barks");
    }
}
let animal = new Dog();
animal.makeSound();
