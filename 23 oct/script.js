let city="Pune"
console.log(typeof city);
console.log(city);
//----------------------------------------------------------------
console.log(city[1])        //array notation (works fast)
console.log(city.at(2))     //object notation (easy to convenience)

//---------------------------------------------------------------
let greet="hello, good morning!"
console.log(greet.length)
console.log(greet)

let newgreet=greet.replace("hello","bollo")
console.log(newgreet)
console.log(greet)
//------------------------------------------------------------------------
console.log(greet.includes("nin"))
console.log(greet.includes("z"))

//----------------------------------------------
console.log(greet.concat(" kese ho"))
//--------------------------------------------------------

let Name="Rajkumarrao Nanasaheb Nangarepatil"
let s=Name.indexOf("N");
let e=Name.indexOf("b");

console.log(Name.slice(s,e + 1))
console.log(Name.startsWith("Raj"))
console.log(Name.endsWith("til"))

//---------------------------------------------------------------
let a="xyz"
let b="pqr"

console.log(a + b)
console.log(a + " " + b)
console.log(a.concat(b))
console.log(a.concat(" ",b));
//--------------------------------------------------------------
let food="panipuri vadapav pavbhaji biryani"
let foodarr=food.split(" ")
console.log(foodarr)

let color="red,green,white,black"
let colorarr=color.split(",")
console.log(colorarr)
//-------------------------------------------------------------------
let s1="sneha"
let s2='shruti'
//let s3='''sneha'''  //not applicable
let s3=`
sneha
    aniruddha
bhosale

`;//``->template literals(they literally print line line by code)
console.log(s3);
console.log(s1+" "+s2);
console.log(s1," ",s2);

a=5;
b=6;
console.log(`${a} + ${b} = ${a+b}`);
