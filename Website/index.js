// 1.
/*

console.log("hi iam nithin");
console.log("iam new to programming");
console.log("i know how to print message using console");

window.alert("Hi everyone")
// this is a single line comment 

this is a multiline comment 

*/
// 2.
// a variable is container for storing data
// a variable behaves as if it was the value that it contains
//Two steps :
//1. Declaration (var ,let , const)
// 2.Assignment (=assignment operator) 

/* let age;
console.log(age); 
undefined  means variable declared but not initilized ,or 
unintentialy declared value ,
make sure not withing doubble quote its will literaly printing age rather 
than containing a value inside it .
*/ 
// let age;// declaration
// age = 21;

// console.log(age);
// or
//we can write declaration and ini in one step
// let age=21; // 21 is number datatype we can use this variable in arithmatic operations

//birthday 
//age = age + 1;
// console.log(age);

// when you declare variable and then assign a value later on
// like may be youre accepting some user inuput
// in that case better 2 steps its usefull.
//Different variable as different data type


// string is a seris of character

// let firstName = "Bro"; //string data typem= withing double & single quotes 
// let age = "21";//  number-only digits
// let student = true; //boolean is either true or false
// age = age + 1;  /// 21 = "21"+1 = 211 because of concatenations
//when we perform addtion opertaion for string its gonna convert 
//entire no to the string 
// console.log(age);
// console.log(firstName);
// console.log(student);

/* let firstName = "Bro";
let age = 21;
let student = true; 

console.log("Hello ",firstName ) ; // we can add some other text here while displaying
console.log("your are",age);
console.log("Enrolled:",student);
//string cancatenation
document.getElementById("p1").innerHTML="Hello " + firstName;
document.getElementById("p2").innerHTML="your are "+ age;
document.getElementById("p3").innerHTML="Enrolled: "+ student; */
//3) 
/* arithmetic expression is a combination of operands (values, variables ets)
operators (+ - * / %)
that can be evaluated to a value 
ex: y = x + 5; x and 5 operands and + is operators

*/

// let students = 20;

//students = students + 1;
//students = students - 1;
// students = students * 2;
// students = students / 2;
// modules give reminder ,,used to find even or odd number by %2 modules 2 
// let extraStudnets = students%3;//here 20% 3 where 3* 6=18 so 2 reminder
//students += 1;// shortcut of 83 line ,called as augmented assignment operator
 // students -=1;
 // students /=2;
 // students %=2;
// console.log(students);
// console.log(extraStudnets);

/* operator precedence 
BODMAS brackets or paranthesis of division then multiplication
then addition & subtractions

let result = 1 + 2 * (3+4) ;
console.log(result);  
and
let result = (1+2) *(3+4);


let result = (1+2) *(3+4);
console.log(result);  */

// 4) how to accept user input
// easy way with the simple window prompt

/*
let userName =window.prompt("what is your name?");
let userAge= window.prompt("what is your age?")
let userDay= window.prompt("hows your day?")
console.log(userName);
console.log(userAge);
console.log(userDay);

difficulty WAY using HTML textbox
whatever text inside the box assign to variable
document get element by id is nothing but using id we are getting back data 
inside flower bracket we need to put id name 

let username;
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);

    document.getElementById("myLabel").innerHTML ="My Name is " + username;
}

let username;
let username2;

document.getElementById("isLogin").onclick = function() {

    username= document.getElementById("myText").value;
    username2=document.getElementById("myText2").value;
// document.getElementById("myLabel").innerHTML ="My Name is "+username;
    console.log(username);
    console.log(username2);
}


// 5) type conversion =change datatype of a value to another 
// ( strings ,numbers,booleans)
// string to number conversion using number constructer
let age = window.prompt("How old are You");

console.log(typeof age);
age = Number(age);

age +=1;

console.log(typeof age);
console.log("happy Birthday! You are ", age,"years old"); */

let x;
let y;
let z;

x = Number("3.14"); //string to number conversion
y= String(3.15); // number to string conversion
z = Boolean(" pizza ") // string to Boolean when no text it shows false and text there shows true usefull user accept input

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
