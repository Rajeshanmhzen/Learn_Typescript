//********** */ super keyword ***************
class Person {
    constructor(private firstName: string, 
    private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName(): string {
        return `I am ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
           
        // Invoking the constructor of the Person class
        super(firstName, lastName);
    }
    displayInfo(): void {
        console.log(super.getName());
        console.log(`My Job title is ${this.jobTitle}`);
    }
}
let employee = new Employee('Rajeshan', 
        'Maharjan', 'Web Developer');
        
employee.displayInfo();

//*********** */ inheritance  **************

// single type of inheritance
/*
class Vechicle {
    honk():void {
        console.log("Vechicle Honks")
    }
}
class Car extends Vechicle {
    display():void {
        console.log("This is a car")
    }
}
let car = new Car()
car.honk()
car.display()
*/

// multilevel inheritance

class VechicleDemo1 {
    sound() {
        console.log("This is a car")
    }
}
class CarDemo extends VechicleDemo1 {
    sound() {
        console.log("This is a Car Demo from the multilevel inheritance")
    }
}
class Electric extends CarDemo {
    sound() {
        console.log("This is a electric car from the miltilevel inheritance");
        
    }
}
let car : VechicleDemo1 = new Electric()
car.sound()