//  compile time polymorphism
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));        
console.log(calc.add("Hi, ", "Rajeshan")); 

// ************** run time polymorphism *******************
class Animal{
    makeSound() : void{
        console.log("Animal makes sound");
        
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Dog Barks");
        
    }
}
let animal: Animal = new Dog()
animal.makeSound()