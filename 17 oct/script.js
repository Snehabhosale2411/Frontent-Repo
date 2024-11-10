//ex.1
// var num = Number(prompt("enter your number: "))

// if(num > 0){
//     console.log(num, "is positive");
// } else {
//     console.log(num,"is negative");
// }

//------------------------------------------------------------


//ex.2
// var num1 = Number(prompt("enter your number: "));
// var num2 = Number(prompt("enter your number: "));

// if(num1 > num2 )
// {
//     console.log(num1 +" is greater than "+ num2);
// }
// else if(num1 < num2)
// {
//     console.log(num1 +" is smaller than "+ num2);
// }
// else
// {
//     console.log(num1 +" is equal to "+ num2);
// }

//-----------------------------------------------------------


//ex.3

// var num = Number(prompt("enter your number: "));
// if(num % 2 == 0)
// {
//     console.log(num +" is even");
// }
// else
// {
//     console.log(num +" is odd");
// }

//------------------------------------------------------------

//ex.4

// var a = Number(prompt("enter your number: "));
// var b = Number(prompt("enter your number: "));
// var c = Number(prompt("enter your number: "));

// if(a > b)
// {
//     if(a > c)
//     {
//         console.log(a +" is greater than "+ b +" and "+c);
//     }
//     else
//     {
//         console.log(c +" is greater than "+ a +" and "+b);
//     }
// }
// else
// {
//     if(b > c)
//     {
//         console.log(`${b} is greater than ${a} and ${c}`);
//         //using template literals :``
//     }
//     else
//     {
//         console.log(`${c} is greater than ${a} and ${b}`);
//     }
// }

//----------------------------------------------------------------

//ex.5
// var a = Number(prompt("enter your number: "));
// var b = Number(prompt("enter your number: "));
// var c = Number(prompt("enter your number: "));

// if(a > b && a > c)
// {
//     console.log(`${a} is greater than ${b} and ${c}`)
// }
// else if(b > a && b > c)
// {
//     console.log(`${b} is greater than ${a} and ${c}`)
// }
// else(c > a && c > b)
// {
//     console.log(`${c} is greater than ${a} and ${b}`)
// }

//-----------------------------------------------------------------

//ex.6
// var a = Number(prompt("enter your number: "));
// var b = Number(prompt("enter your number: "));

// console.log(a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`);
//-----------------------------------------------------------


//ex.7
var a= Number(prompt("enter your number: "));
console.log(a == 0 ? "zero" : a > 5 ? "positive" : "negative");