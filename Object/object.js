//creating objects using  object literals
const person = {
    name: ['Parvej', 'Altaf','Pratik'], //object properties
    age: [22,20,21], //object properties
    gender: 'male',//object properties
    interests: ['music', 'cricket','movies'],//object properties
    //Object methods
    bio: function() {
        for (let index = 0; index < this.name.length; index++) {
            alert(this.name[index] + ' is '+ this.age[index] + ' years old.He loves ' + this.interests[index]);
        } 
    },
    greeting: function() {
       for (let i = 0; i < this.name.length; i++) {
          alert("Hii I'am " + this.name[i])    
       }
    }
  };

console.log(person.name);   //person.name accessing object elements using "."
console.log(person.name[0]);
//person.bio()
// person.greeting()
 
//creating object by creating instance of object
//var objectname=new Object(); //syntax of creating object
var emp=new Object();  
emp.id=101;  
emp.name="Parvej Shaikh";  
emp.salary=50000;  
console.log(emp.id+" "+emp.name+" "+emp.salary);

//By using object constructor
function emp1(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
}  
e=new emp1(103,"Altaf",30000);
       
console.log(e.id+" "+e.name+" "+e.salary);

//Nested Objects :- Objects Inside objects
const emertech = {
    person1 : {
        "name" : "Parvej",
        address : {
            "city" : "Kopargaon",
            "state" : "Maharashtra" 
        }
    },

    person2 : {
        "name" : "Altaf",
        address : {
            "city" : "Kolpewadi",
            "state" : "Maharashtra" 
        }
    },

    person3 : {
        "name" : "Pratik",
        address : {
            "city" :"Rahata",
            "state" : "Maharashtra" 
        }
    }
}

console.log(emertech.person1);  //we can use dot again to access the element inside nested objects 
console.log(emertech.person2.name);
console.log(emertech.person3.address.city);

const users = {
    name : "Parvej",
    age : 22,
    email : "parvejshaikh165@gmail.com",
    location : "Kopargaon",
    //array of objects
    favSongs : [
        {name : "Abhi mujh mein kahin", singer : "Sonu Nigam"},
        {name : "Tum hi ho", singer : "Arijit Singh"}
    ],
    //login method
    login(){
        alert(this.name +" has logged in!");
    },
    //logout method
    logout(){
        alert(this.name + "has logged out");
    },
    ffavSongs(){
        console.log("User "+ this.name + " has following favourite songs:");
        this.favSongs.forEach(songs => {
            console.log("Name : " + songs.name + " Singer : " + songs.singer );
        })
    }   
}
users.ffavSongs();
//users.login();