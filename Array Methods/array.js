//This is program to learn different array methods in javascript.

//Arrays used in program
const marks = [75,76,86,95,86,90];  //Initialization and declaration of array.
const typedArray = new Int8Array(4);
const fruits = ["apple","mango","grapes","apple","orange","mango","apple"];
const animals = ['cow', 'dog', 'camel', 'lion', 'elephant'];
const number =[0,1,2,3,4,5,6,7,8,9];
const int =[25,67,12,33];

//isArray methods
console.log(Array.isArray(marks));  //returns true if marks is an array otherwise false.
console.log(Array.isArray(typedArray)); //exception for isArray method for a TypedArray it always returns false

//indexOf methods
console.log(marks.indexOf(95));  //it returns or searches index of the passed element
console.log(marks.indexOf(72));  //here it will return -1 because the element is not present
console.log(marks.indexOf(86));
console.log(marks.indexOf(86,3));  //here it starts searching from index 3
// use of indexOf to find occurences of element apple
const occur = [];
let ind = fruits.indexOf("apple")
while (ind != -1) {
    occur.push(ind);
    ind = fruits.indexOf("apple",ind+1);
}
console.log(occur);

//push method
let total = marks.push(99);   //append passed element at the end of an array and returns length.
console.log(marks);
console.log(total);

//pop method
total = marks.pop();   //removes passed element from the end of an array and returns removed element.
console.log(marks);
console.log(total);

//shift method
total = fruits.shift();   //removes passed element from the beginning of  an array and returns removed element.
console.log(fruits);
console.log(total);

//unshift method
total = fruits.unshift("apple");   //appends passed element at the beginning of  an array and returns length.
console.log(fruits);
console.log(total);

//slice method
console.log(animals.slice()); //returns copy of array in consideration
console.log(animals.slice(1,4)); //returns array from animals starting from index 1 to 4 not including 4
console.log(animals.slice(3,5));
console.log(animals.slice(-1)); // (-n) returns last n elements here last element

//splice method  :- use to remove,replace,or insert element in an array and returns the array of deleted elements
number.splice(4,0,"four"); //insert four at index 4
console.log(number);
console.log(number.splice(4,1)); //removes four from  index 4
console.log(number);
console.log(number.splice(6,0,"six","seven","eight")); //insert three elements at index 3 and remove 0
console.log(number);

//find method
console.log(marks.find(element => element > 90)); //finds first element in an array based on given testing function.
console.log(animals.find(element => element === "lion"));

//includes method 
console.log(marks.includes(95));  //returns true if the passed element is present otherwise false
console.log(animals.includes("cow",2)); //second parameter is to set the starting point for searching

//map method :- returns a new array  with output obatined by passing each element of array to given function as a parameter.
console.log(int.map(x => x*2));
//example square root of each element of array
let roots = number.map(function(num) {
    return Math.sqrt(num)
})
console.log(roots);

//filter method
console.log(animals.filter(element => element.length > 5)); //It creates a new array with all elements that pass the test implemented by the provided function.

//reduce method :-  executes a reducer function (that you provide) on each element of the array, resulting in single output value.
console.log([0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
  }))
  






