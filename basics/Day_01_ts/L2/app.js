// object, Array, tuple, Enum
console.log("Lets learn Object");
// object
var person = {
    firstName: "Rajeshan",
    lastName: "Maharjan",
    age: 12
};
// console.log(person.address);  this line throw a  error that it doesn't exists
console.log(person); //access whole object
console.log(person.firstName); // access only firstName from the object
// Array
var person2 = {
    firstName: "Rajeshan",
    lastName: "Maharjan",
    age: 22,
    skills: ["Reactjs", "Nodejs", "Tailwind"]
};
console.log(person2);
var favlangauge;
favlangauge = ["Reactjs", "nodejs"];
var favlangauge2; //if we use any then we loose the power of ts
favlangauge2 = ["Reactjs", "nodejs", 21, true];
// tuple 
var person3 = {
    name: "Rajeshan Maharjan",
    age: 12,
    skills: ["Reactjs", "Nodejs"],
    product: [1, "Lenovo ideapad 3"]
};
console.log(person3);
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
var person4 = {
    name: "Rajeshan",
    age: 22,
    skills: ["React", "node"],
    product: [1, "Lenovo ideapad 3"],
    role: Role.AUTHOR
};
if (person4.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person4.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person4.role === Role.USER) {
    console.log("User");
}
else {
    console.log("guest");
}
