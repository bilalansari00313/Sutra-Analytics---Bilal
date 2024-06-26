
// Take1-100 number using for loop count which is divisible by 2

let a = 0;
let b = []
for (i = 1; i <= 100; i++){
  if (i % 2 == 0){
    a++;
    b.push(i)
  }
}
console.log (a)
console.log (b)



// # Loop through a string and print each character

// let a = "bilal";
// for (i = 0; i < a.length; i ++)
//     {
//         for(j=0;j<a[i].length; j++) 
//             { console.log(a[i])}
//     }


// # *Display the first 20 even numbers.
// let a = 0;
// let b = []
// for (i = 1; i <= 40; i++){
//   if (i % 2 == 0){
//     a++;
//     b.push(i)
//   }
// }
// console.log (a)
// console.log (b)


// # Take a number from the user and find the factorial of the respected number...
// let a = 5;
// let b = 1;
// for (i = 1; i <= a; i ++){ 
//     b=b * i;
// }
// console.log(b)



// # Print the name "Radhika" every single letter in a single line and then after every 


// let a = "radhika"
// for (i=0; i < a.length; i ++)
//     {
//         for(j=0;j<a[i].length; j++)
//             {console.log(a[i])}
//     }





// person = {
//     id:1,
//     f_name:"Pranav",
//     l_name:"Patel",
//     gener:'Male',
//     Birthda:"21/07/2001",
//     hobbise :["Football","Gamming","traweling"],
// }


// let access = obj.a[0].firstName
// console.log(access)

// for(let i in obj.a){
//     let data = obj.a[i].firstName
//     let data1 = obj.b[i].firstName

//     console.log(data)
//     console.log(data1)

// }



// program 1
// person = {
//     id:1,
//     f_name:"Pranav",
//     l_name:"Patel",
//     gener:'Male',
//     Birthda:"21/07/2001",
//     hobbise :["Football","Gamming","traweling"],
// }
    
// console.log("firstname=",person.f_name )