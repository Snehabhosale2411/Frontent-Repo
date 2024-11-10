//function always return only one value
//in function we dont need to define datatypes. It is provided by javascript

function add(a,b)
{
    let c=a+b;
    return c;
}
var ans=add(2,4);
console.log(`sum = ${ans}`);


//-------------------------------------------------
//formula: (a+b)^2=a^2+b^2+2*a*b
function quadratic(a,b)
{
    let c=a*a + b*b + 2*a*b;
    return c;
}
console.log("(a+b)^2 = ",quadratic(3,5));

//-------------------------------------------------------
//formula: 0 celsius = 32 farenhite
//                 F = (9/5)*cel+32
function temperature(cel)
{
    let far=(9/5)*cel+32;
    return far;
}
console.log("Farenhite = ",temperature(100));