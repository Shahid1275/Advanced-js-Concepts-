document.getElementById('btn2').onmouseover = () => {
    alert('Hello World!');
}
  
document.getElementById('btn3').onclick = () => {
    alert('Hello World!');
}

var num = 1;
while(num<=10){
    console.log('5 * ' + num + ' = ' + 5 * num);
    num++;
}

function greet(name){
    console.log(" Hello " + name + " Welcome to learning JS");
}
greet('SHAHID');




// // ----------------------------------------------------------------
// // Array in js
// let fruits = new Array('Apple', 'Banana', 'Orange'); //using new array like array constructor
// console.log(fruits);

// let fruits2 = ['Apple', 'Banana', 'Orange','Apple']; // using new array like array literal
// console.log(fruits2[1]);

// for (let item of fruits2) {
//     console.log(item);  // displaying array items
// }
// for (let item in  fruits2) {
//     console.log(item);  // displaying array items index
// }
// fruits2.push('pineapple');  // adding new item in array
// console.log(fruits2);
// fruits2.push('Grapes');  // adding new item in array
// console.log(fruits2);
// fruits2.pop('pineapple');  // adding new item in array
// console.log(fruits2);
// fruits2.pop('pineapple');  // adding new item in array
// console.log(fruits2);
// fruits2.unshift('pineapple');  // adding new item in array
// console.log(fruits2);
// fruits2.shift('pineapple');  // adding new item in array
// console.log(fruits2);
// fruits2.splice(1,1 , 'watermelon');  // adding new item in array
// console.log(fruits2);
// fruits2.slice(1,2);  // adding new item in array
// console.log(fruits2);
// console.log(fruits2.indexOf('Apple')); 
// //  adding new item in array let result = indexOf('pineapple'); console.log(result);
// console.log(fruits2.includes('pineapple'));
//  // removing last item from array
//  console.log(fruits2.lastIndexOf('Apple'));


// fruits2.forEach((curElement, index, arr) => {
//   console.log(`${curElement}  ${index}   ${arr}`); // displaying array items with index and array
// });


// const numbers = [1, 2, 3, 4, 5];      // same display array screen
// numbers.forEach((curElement) => {
//   console.log(curElement * 2);
// });
// let numbers = [1, 2, 3, 4, 5];
// const doubleValue = numbers.map((curElement) => {
//   return(curElement * 2);  // same Array with modified new array in sequence form
// });
// console.log(doubleValue);
// let result = numbers.filter((curElement) => {
//   return curElement > 2;
// })
// console.log(result);

// const names = ['shahid', 'shahid1', 'shahid2', 'shahid3'];
// const prefixNames = names.map((curElement) => {
//   return `Mr ${curElement} `;	
// })
// console.log(prefixNames);   


// ----------------------------------------------------------------
// String in js substring and slice method
// const str = "JavaScript";

// Extract last 6 characters
// console.log(str.slice(-6)); // Output: "Script"

// Extract characters from index -9 to -6
// console.log(str.slice(-9, -6)); // Output: "ava"
// let text = "Hello javascript"
// let result2 = text.slice(1,4);
// let result3 = text.substring(1,8);
// let result4 = text.substring(-3, 4);
// let result5 = text.substring(-3, 4);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);


//////////

// ----------------------------------------------------------------
// for printing a to z using for loop
// for(let char = 97; char <=122; char++){
//   console.log(String.fromCharCode(char))
// }

// count vowels from the string 
// let string = "JavaScript";
// let count = 0;

// for(let char of string.toLowerCase()){
//   if(vowels.includes(char)){
//     count++;
//   }
// }
// function countVowels(str) {
//   const vowels = "aeiouAEIOU"; // Include both uppercase and lowercase vowels
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// const input = "Hello, World!";
// console.log(countVowels(input)); // Output: 3

// function countVowels(str){
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for(let char of str){
//     if(vowels.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) { // Check the current character
        count++;
      }
    }
  
    return count;
  }
  console.log(countVowels("Hello, SHAHid Amen!"));