var a=10;
var b=5;
//Operators

//1.Arithmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);    //exponential operator

//2.Comparision operator
console.log(2 > 3);
console.log(2 < 3);
console.log(2 <= 3);
console.log(4 >= 1);
console.log(2 == 2);
console.log(3 != 2);
console.log(2 == '2'); //checks only value
console.log(3 === '3'); //giving 3 '=' signs checks data types also

//3.logical operator
console.log(4 > 2 && 3 < 6);
console.log(4 < 2 || 3 > 6);
console.log(!(5 < 10));
/*
T && T-->T otherwise F
F || F-->F otherwise T
!F    -->T
!T    -->F
*/

//4.assignment operator
var a=10;
console.log(a);

a += 5
console.log(a);
 
a -= 12
console.log(a);

a *= 10
console.log(a);

a /= 6
console.log(a);

a %= 3
console.log(a);

a **= 4
console.log(a);

//5.bitwise operator(&,|,^,<<,>>,~)
console.log(2 & 3)
console.log(2 | 3)
console.log(3 ^ 5)
console.log(13 ^ 7)
console.log(14 << 3)
console.log(14 >> 3)
console.log(~5)

