// console.log("Object : Player");

// let Player ={
//     name: "Prakash",
//     age: 25,
//     noOfMedal:11,
//     level: "National",
// };

// console.log(Player);
// console.log(Player.name);
// console.log(Player.level);
// console.log(Player.age);
// Player.age=30;
// console.log(Player.age);
//--------------------------------------------------------------------
//ex.u1
//method-1
let u1=  { name: "Prakash", age:25};
let u2=  { name: "Rakesh", age:30};
let u3=  { name: "Rajesh", age:35};

//method-2
var user=[
    { name: "Prakash", age:25},
    { name: "Rakesh", age:30},
    { name: "Rajesh", age:35},
    { name: "rajveer", age:20},
    { name: "Ramesh", age:45},
    { name: "Ranjeet", age:36},
    { name: "jeet", age:36},
    { name: "abhijeet", age:65},
    { name: "sujeet", age:40},
    { name: "sachin", age:57},
    { name: "virat", age:23},
    { name: "hardik", age:25},
    { name: "rohit", age:25},

];
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
//n=user.length
for(let i=0;i<user.length;i++)
{
    console.log("user "+(i+1)+":"+user[i].name);
}
//using for of loop
for(let u of user){
    console.log(u.name+"'s age : "+u.age);
}

/*
ex.1->animal
ex.2->electronic_device
ex.3->locations
ex.4->subjects
*/