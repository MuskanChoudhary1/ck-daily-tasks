// Ques 1

let addNum = (a,b) => a+b;
console.log(addNum(5,6));



// Ques 2

function greet(name, message = "Hello"){
     console.log(`${message} ${name}`);
}

greet("Muskan");
greet("Muskan", "Hey");



// Ques 3

function formatSting(name, age){
    console.log(`Hello, My name is ${name} and I am ${age} years old.`);
}

formatSting("Muskan Choudhary","22");

// By Arrow Function

const formatString = (name, age) => `Hello, My name is ${name} and I am ${age} years old.`;
console.log(formatString("Tanu", 22));


// Ques 4

const person = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'New York',
        country: 'NY'
    }
};

function personData(person) {
    const {
        name,
        address: {city}
    } = person;

    console.log(`${name} lives in ${city}`);
    console.log("Address Object :", person.address);
}

personData(person);

//By Arrow function
const personDataArrow = ({name, address:{city}}) => {
    console.log(`${name} lives in ${city}`);
    console.log("Address Oblect:", person.address)
}
personDataArrow(person);


// Ques 5

function sumAll(...nums) {
    let sum = 0;
    for(num of nums) {
        sum += num;
    }
    return sum;
}

console.log("By normal function...");
console.log("Sum of numbers: ",sumAll(1,2,3));
console.log("Sum of numbers: ",sumAll(4,6));

// By arrow function

const sumAllArrow = (...nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log("By Arrow Function...");
console.log("Sum of numbers: ",sumAllArrow(7,8));


// Ques 6

const filterEvents = (nums) => {
    return nums.filter(num => num % 2 == 0);
}

console.log("By Arrow function...")
console.log("Even numbers: ",filterEvents([1,2,3,4,5,6,7,8]));


// By Normal Function
function filterEventsNormal(nums) {
    return nums.filter(function(num){
        return num % 2 === 0;
    });
}

console.log("By Normal Function...");
console.log("Sum of numbers: ",filterEventsNormal([7,8]));



// Ques 7

const doubleValues = (nums) => {
    return nums.map(num => num*2);
};

console.log("By Arrow Function...");
console.log("Double Values: ",doubleValues([7,8]));


//By Normal Function

function doubleValuesNormal(nums) {
    return nums.map(function(num) {
        return num * 2;
    });
}

console.log("By Normal Function...");
console.log("Double Values: ",doubleValuesNormal([3,4]));



// Ques 8

const findMax = (...nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};


const arr = [3, 5, 7, 2, 8];
console.log(findMax(...arr)); 


// Ques 9

const data = [
  { name: "Bob", age: 24 },
  { name: "Alice", age: 21 }
];


function getData(data) {
    const [{age}, {name}] = data;
    return `${name}'s age is ${age}`;
}

console.log(getData(data));



// Ques 10

const products = [{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
}
}]


function getProductInfo(products) {
  return products.map(({ id, title, rating: { rate, count } }) => ({
    id,
    title,
    rate,
    count
  }));
}

console.log(getProductInfo(products));


// Ques 11

const fun = (name = "abc") => {
        if (name) {
          console.log("if", name);
        } else {
          console.log("else", name);
        }
      };
	  
fun("");  // else bcz of empty string


// Ques 12

function deepClone(obj) {

    if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone;
  if (Array.isArray(obj)) {
    clone = [];
  } else {
    clone = {};
  }

  for (let key in obj) {
    clone[key] = deepClone(obj[key]); 
  }

  return clone;
}

const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);

clonedObj.b.c = 42;

console.log(clonedObj.b.c);
console.log(obj.b.c); 



// Ques 13

function flattenArray(arr) {
  let result = []; 

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      
      const flat = flattenArray(arr[i]);
      result = result.concat(flat); 
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]]]));



