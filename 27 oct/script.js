let a=3;
let b="hello";
let c=true;
let d=()=>console.log("bye");
let e=[4,6,7];

//problem
//name age and roll are different independent to each other with different references

let stud_name="raju";
let stud_age=20;
let stud_roll=10;

//object 
//object is a collection of key value pairs
//ex.1
let student={
    fname:'raju',
    lname:'kumar',
    age: 20,
    roll: 10,
    marks: 500,
    study: ()=>{console.log("he is running");
    },
};
student.study();
//----------------------------------------------------------------------
//ex.2
let employee={
    name:'sneha',
    age:25,
    salary:500000,
    address:{
        street:"M.G.road",
        city:"pune",
        state:"maharashtra",
    },
};
console.log(employee.name);
console.log(employee.address.state);
//-----------------------------------------------------------------------
//ex.3
let person = {
    name: {
        first:"raju",
        middle:"eknath",
        last:"kadam",
    },
    age:75,
    nameOfChildren: ["pranav","pranesh","rushikesh","rutuja"],
};
console.log("person Name ="+ person.name.first +" "+person.name.last);
console.log("Children ="+person.nameOfChildren.toString());