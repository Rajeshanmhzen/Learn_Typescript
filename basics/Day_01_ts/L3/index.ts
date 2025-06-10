console.log("Lession 3");

// UNiON,  LITREAL TYPES, TYPE ALIAS / CUSTOM TYPEs


// *************** union | -> pipe in typescrit***************

function combine (num1:number | string, num2:number | string) {
    let result;
    if(typeof num1 === "number" && typeof num2 === "number") {
        result= num1 + num2
    }
    else {
        result =num1.toString() + num2.toString()
    }
    return result
}
console.log(combine(10,20))
console.log(combine("Frontend", " Developer"))


//************** */ LITREAL TYPES *************
function combine2 (num1:number | string, num2:number | string, conversionType: "as-number" | "as-string") {
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        // result= num1 + num2
        result= +num1 + +num2
    }
    else {
        result =num1.toString() + num2.toString()
    }
    return result
}
console.log(combine2(10, "20", "as-number"))
console.log(combine2("Frontend", " Developer", "as-string"))


// ***************** TYPE ALIAS / CUSTOM TYPEs ************************
type Combinable = number | string ;
type ConversionType = "as-number" | "as-string"
function combine3 (num1:Combinable, num2:Combinable, conversionType: ConversionType) {
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-string") {
        // result= num1 + num2
        result= +num1 + +num2
    }
    else {
        result =num1.toString() + num2.toString()
    }
    return result
}
console.log(combine3(10, "20", "as-number"))
console.log(combine3("Frontend", " Developer", "as-string"))

type User= {
    name:string;
    age:number;
    skills:string[]
}
const user:User = {
    name:"Raj",
    age :12,
    skills:["Reactjs", "Nodejs"]
}

//  for interface 
// interface User_name {
    //code
// }


function greet (user:User) {
    console.log(`hi, I am ${user.name}`)
}
greet(user);