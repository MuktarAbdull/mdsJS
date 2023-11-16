        //DOCUMENT OBJECT MODEL DOM
let Element = document.querySelector('h1');
console.log(Element)

let Element2 = document.querySelector("#Element2")
console.log(Element2)

let Element3 = document.querySelector(".Element3")
console.log(Element3)
let Element3 = document.querySelectorAll(".Element[3")
console.log(Element3)

            //OTHERWAY TO SELECT DOM
/*let Element = document.getElementsByClassName("abdull");
console.log(Element)*/

let Element = document.getElementsByClassName("abdull")[1];
console.log(Element);

let Element2 = document.querySelectorAll("#demo")
console.log(Element2)

            // DOM ADDING OR REMOVING ELEMENTS FROM THE TAG
                //ADDING ELEMENT
let main = document.querySelector("#main")
let newElement = document.createElement('p')

let newContent = document.createTextNode('Welcome to my js.');

newElement.append(newContent);

main.append(newElement)

console.log(newElement)


let abdull = document.querySelector("#abdull");
let Mukiip = document.createElement('H1');
let data = document.createTextNode("Welcome to the muktar's website")

Mukiip.append(data);
abdull.append(Mukiip);
console.log(Mukiip)

let Mukiip2 = document.createElement('H2');
let data2 = document.createTextNode("I'm ready to help you.")

Mukiip2.append(data2);

abdull.append(Mukiip2);

console.log(Mukiip2)

let Mukiip3 = document.createElement('h3');
let data3 = document.createTextNode("Let's begin.")

Mukiip3.appendChild(data3);
abdull.append(Mukiip3)

console.log(Mukiip3)

            //REMOVING ELEMENT IN TWO WAYS
    //FIRST ONE IS TO A CLASS THEN REMOVE OR REMOVE AS ELELMENT IT'S.
Mukiip3.remove();
        //or


        let male =document.querySelector('#male');
        let Element00 = document.createElement('h2');
        let xog = document.createTextNode('Muktar is tall guy.')

        Element00.append(xog);
        male.append(Element00);
        console.log(Element00)
