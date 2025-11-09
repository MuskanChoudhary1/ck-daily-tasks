// FORM VALIDATION 
document.getElementById("userForm").addEventListener("submit", function (event) {
  // event.preventDefault(); 

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const msg = document.getElementById("formMessage");

    if (!name) {
      event.preventDefault();
    msg.textContent = "Please enter your name.";
    msg.style.color = "red";
  } else if (!age || age < 18) {
    msg.textContent = "You must be 18 or older to submit.";
    msg.style.color = "red";
  } else {
    msg.textContent = `Welcome, ${name}. Your form submitted successfully.`;
    msg.style.color = "green";
  }

}); 


//COLOR CHANGER
const color = document.getElementById("colorchanger");

color.addEventListener("mouseover", function() {
    colorchanger.style.backgroundColor = "lightblue";
});

color.addEventListener("mouseout", function() {
    colorchanger.style.backgroundColor = "grey";
})



//ARRAY OPERATIONS

let arr = [50, 30, 10, 40, 20, 60, 30];
console.log("Array :",arr);

// Ques 3 Add no to the end
arr.push(100);
console.log("After Add no :", arr);


//Ques 4 Remove 1st no
arr.shift();
console.log("After removing 1st no :", arr);

//Ques 5 Add no at specific index (index 2)
arr.splice(2, 0, 800);             // startIndex, deleteCount, item1, item2, ...
console.log("After add no at specific index :", arr);


//Ques 6 Replace all occurrences of a no
let oldNum = 30;
let newNum = 1000;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === oldNum) {
    arr[i] = newNum;
  }
}
console.log("After replacing old num :", arr);



//Ques 7 Sort array
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted Array   :", arr);


//Ques 8 Reverse the array (without reverse())
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log("Reversed Array:", rev);


//Ques 9 Find index of a specific no 
let findnum = 10;
let findindex = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === findnum) {
    findindex = i;
    break;
  }
}
console.log(`Index of ${findnum} :`, findindex !== -1 ? findindex : "Not found");


// OR
let snum = 10;
let findex = arr.indexOf(snum);
console.log(`index of ${snum} :`, findex);

