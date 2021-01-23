//shallow copy in objects

var member = {
    m1 : {
    "id" : "1",
    "name" : "Parvej"
    },

    m2 : {
    "id" : "2",
    "name" : "Altaf"
    },

    m3 : {
    "id" : "3",
    "name" : "Pratik"
    },
}

 var newmember = member;      //directly assigning the object variable to another variable creates a shallow copy, Here both member and newmember refer the object content from one single source that is they point to the same address space so therefore any change in newmember will reflect in member and vice-verca.This situation is problematic
 newmember.m1.name = "Tabrez";

 console.log(member);    //m1.name content of both change to Tabrez     
 console.log(newmember);

 //Shallow copy in arrays
var cars = ["swift","ertiga","verna","city"];
var cars2 = cars;

cars2[0] = "fortuner";
console.log(cars);
console.log(cars2);

//Deep copy :- Here we avoid the condition of shallow copying as it can be problematic adn create copy such that they are independent of each other.

var employee = {
    "id" : 1,
    "Name" : "Parvej",
    address : {
        "city" : "Kopargaon",
        "district" : "Ahemadnagar",
        "state" : "Maharashtra"
    }
}

var greetings = {
    "greet1" : "Good Morning",
    "greet2" : "Good Afternoon",
    "greet3" : "Good Evening"
}

//there are three ways to make deep copy 1.Spread Operator 2.Object.assign 3.use stringify and parse

//1. Spread Operator

//objects

let newEmployee = {...employee};
newEmployee.id = 2;
console.log(employee);
console.log(newEmployee);

//arrays

let cars3 = {...cars};
cars3[0] = "swift";
console.log(cars);
console.log(cars3);

//2. Object.assign
let newgreetings = Object.assign({},greetings);
newgreetings.greet3 = "Good Night";
console.log(greetings);
console.log(newgreetings);

//3.use of parse and stringify 
//Spread Operators and Object.assign have one problem that is they dont make a deep copy of nested objects so we can use json.stringify and json.parse in that case.

let employee2 = JSON.parse(JSON.stringify(employee));
employee2.address.city = "Shirdi";
console.log("_____parse & stringify o/p______");
console.log(employee);
console.log(employee2);

//failure of spread op and object.assign

let employee3 = {...employee}
employee3.address.district = "Nashik";
console.log("_____spread op output______");
console.log(employee);
console.log(employee3);

let employee4 = Object.assign({},employee)
employee3.address.district = "Dhule";
console.log("_____Object.assign() output______");
console.log(employee);
console.log(employee4);

