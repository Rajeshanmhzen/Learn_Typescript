console.log("Learning the classes");

// basics
// class Department {
//     name:string;
//     constructor(n:string) {
//         this.name = n
//     }
//     describe(this:Department) {
//         console.log("Department", this.name)
//     }
// }
// const accounting = new Department("Maharjan")
// accounting.describe()

// const accountingCopy = {
//     name:"AccountingDemo",
//     describe: accounting.describe
// }
// // accountingCopy.describe()
// console.log(accountingCopy);



// private, public access modifier --> byDegfault it is public
class Department {
//     name:string;
//    private employees:string[];
    // employees:string[] = [];
    // constructor(n:string) {
    //     this.name = n
    //     this.employees = []
    // }
    constructor (name:string, private employees:string[]) {     //shorthand properties

    }
    describe(this:Department) {
        console.log("Department", this.name)
    }
    addEmployee(emp: string) {
        this.employees.push(emp)
    }
    printEmployeeInformation() {
        console.log("Number of employee", this.employees.length)
        console.log( this.employees)
    }
}

// const accounting = new Department("Accounting")
const accounting = new Department("Accounting",[])
accounting.addEmployee("Admin")
accounting.addEmployee("User")
accounting.addEmployee("Rajeshan")
accounting.printEmployeeInformation()
// accounting.employees = ["xyz"]

