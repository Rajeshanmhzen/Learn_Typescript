console.log("Learning interface");
// interface  it is the representation of a object.
interface UserInfo {
    name:string;
    age:number;
    greet(text:string):void
}
let user1: UserInfo;
user1 = {
    name:"maharjan",
    age:21,
    greet(text):void {
        console.log(`${text} ${this.name}`);
        
    }
}
console.log(user1);

user1.greet("hi there, i am Rajeshan")