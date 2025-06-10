// object, Array, tuple, Enum
console.log("Lets learn Object")

// object
const person:{
    firstName : string;
    lastName :string;
    age:number;
} = {
    firstName :"Rajeshan",
    lastName : "Maharjan",
    age:12
}

// console.log(person.address);  this line throw a  error that it doesn't exists
console.log(person)             //access whole object
console.log(person.firstName);   // access only firstName from the object



// Array

const person2 :{
    firstName : string;
    lastName : string;
    age: number;
    skills: string[];       //only access the string value
} = {
    firstName:"Rajeshan",
    lastName:"Maharjan",
    age:22,
    skills: ["Reactjs", "Nodejs", "Tailwind"]
}
console.log(person2)
let favlangauge : string[]
favlangauge = ["Reactjs", "nodejs"]

let favlangauge2 : any[]        //if we use any then we loose the power of ts
favlangauge2 = ["Reactjs", "nodejs", 21 ,true]


// tuple 
const person3:{
    name:string;
    age:number;
    skills:string[];
    product:[number, string];       //fixed array og two types 0=> number and 1 =>string
} = {
    name:"Rajeshan Maharjan",
    age:12,
    skills:["Reactjs", "Nodejs"],
    product:[1, "Lenovo ideapad 3"]
}
console.log(person3)

// Enum
enum Role {ADMIN, AUTHOR, USER};
const person4 = {
    name:"Rajeshan",
    age:22,
    skills:["React", "node"],
    product:[1, "Lenovo ideapad 3"],
    role:Role.AUTHOR
}
if(person4.role === Role.AUTHOR){
    console.log("Author");
}else if(person4.role === Role.ADMIN) {
console.log("Admin");
}else if(person4.role === Role.USER) {
console.log("User");
}else  {
    console.log("guest");
    
}