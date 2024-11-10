//ex.1
//formula -> (s*(s-a)*(s-b)*(s-c))**(0.5)

function AreaTriangle(a,b,c)
{
    let s=(a+b+c)/2;
    let area=(s*(s-a)*(s-b)*(s-c))**(0.5);
    return area;
}
let a=27;
let b=30;
let c=45;
console.log(`Area of triangle having sides : 
    ${a},${b} and ${c} : ${AreaTriangle(a,b,c)}`);
/*Area of triangle having sides : 
    27,30 and 45 : 392.7136361268857*/
//------------------------------------------------------------------------

//ex.2

let arr=[3,5,7,9,6,2];
let doublearr=[];
let cubearr=[];

function doubleIt()
{
    for(let i=0;i<arr.length;i++)
    {
        doublearr.push(arr[i]*2);
    }
}

function cube()
{
    // for(let j=0;j<arr.length;j++)
    // {
    //     console.log(arr[j]*arr[j]*arr[j]);
    // }
    for(let n of arr){
        cubearr.push(n*n*n);
    }
}
console.log(doublearr);
doubleIt();
console.log(doublearr);
console.log(cubearr);
cube();
console.log(cubearr);

//ex.4
let newarr=[];
function addtogreet(arr)
{
    for(let greet of arr)
    {
        if(greet.includes("o") )
        {
            newarr.push(greet);
        }
    }
}
let greet =["hello","hey","namste","bonjour"];
addtogreet(greet);
console.log(newarr);
//['hello', 'bonjour']