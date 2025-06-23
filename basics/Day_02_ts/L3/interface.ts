console.log("Learning interface");
// interface  it is the representation of a object.
// interface UserInfo {
//     name:string;
//     age:number;
//     greet(text:string):void
// }
// let user1: UserInfo;
// user1 = {
//     name:"maharjan",
//     age:21,
//     greet(text):void {
//         console.log(`${text} ${this.name}`);
        
//     }
// }
// console.log(user1);

// user1.greet("hi there, i am Rajeshan")

interface GreetAble{
    name : string;
    greet(text:string):void;
}


class Person1 implements GreetAble {
 name:string;
 constructor(n:string) {
    this.name = n
 }
 greet(text: string): void {
     console.log(`${text} ${this.name}`)
 }

}

const p1 = new Person1("Rajeshan")
p1.greet("Hi, i am ")