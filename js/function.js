// Write a function to print Hello World
function a() {
  return "hello";
}
console.log(a());

//  Write a function to add 2 values
function b() {
  let a = 20;
  let b = 30;
  return a + b;
}
console.log(b());

//  Write a function to find average of 5 values

function avg() {
  let a = 5;
  let b = 10;
  let c = 20;
  let d = 25;
  let e = 30;

  return a + b + c + d + e / 5;
}
console.log(avg());

//

// Write a function to multiply 2 values using default parameters
let m = multi();
function multi(a = 9, b = 10) {
  return a * b;
}
console.log(m);

// Write a function to print length of a list(list is a parameter)

function len() {
  let a = ["a", "b", "c", "d", "e"];
  return a.length;
}
document.write(len());
document.write("<br>");

// WAF to convert US Dollar into Indian Rs

function usd() {
  // let usd = prompt("enter amount");
  return usd * 84;
}
document.write(usd());

usd();
console.log(usd());

function multi() {
  let a = 2;
  let b = 3;
  return a * b;
}
console.log(multi());

// Write a function to print elements of a list in a single line (list is a parameter)

function name() {
  let a = ["vinod", "ronak", "aarif"];
  for (i = 0; i < a.length; i++) {
  
    console.log(a[i]);  
console.log("<br>") 
}

}
name();

// program 1
person = {
  id: 1,
  f_name: "Pranav",
  l_name: "Patel",
  gener: "Male",
  Birthda: "21/07/2001",
  hobbise: ["Football", "Gamming", "traweling"],
};

document.write("firstname=", person.f_name);
console.log("laststname=", person.l_name);



