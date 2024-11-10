let li2 = document.querySelector("#hero");
let myList = document.querySelector(".list");
let myContainer=document.querySelector(".container");

let newElem = document.createElement("li");
let text = "this is a demo text 5";
newElem.innerText = text;
myList.appendChild(newElem);


let newElem2 = document.createElement("li");
let text2 = "this is a demo text 6";
newElem2.innerText = text2;
myList.appendChild(newElem2);

let newElem3 = document.createElement("li");
let text3 = "this is a demo text 0";
newElem3.textContent =text3;        //"innerText" is work same as "textContent"
myList.insertBefore(newElem3, myList.firstElementChild);

let newElem4 = document.createElement("li");
let text4 = "this is a demo text 2.5";
newElem4.textContent=text4;
myList.insertBefore(newElem4, li2.nextElementSibling);

let items = myList.children;
let newElem5 = document.createElement("li");
let text5 = "this is a demo text 4.5";
newElem5.innerText = text5;
myList.insertBefore(newElem5,items[6]);

//---------------------------------------------------------------------

let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
p1.textContent = "this a p1";
p2.textContent = "this a p2";
p3.textContent = "this a p3";
p4.textContent = "this a p4";

myList.append(p1);      //at the end of mylist
myList.prepend(p2);     //at start of mylist
myList.before(p3);      //before coming mylist
myList.after(p4);       //after finishing mylist
