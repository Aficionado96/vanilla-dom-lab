document.querySelector('section');

document.querySelectorAll('p');


document.querySelector('#container');


document.querySelectorAll('.info');



//1

const container = document.querySelector('#container');

console.log(container);


//2

const secondImg = document.querySelector('#second-img');
console.log(secondImg);


//3

const infoElem = document.querySelectorAll('.info');

console.log(infoElem);


//4
const firstP = document.querySelector('p');


firstP.innerText= 'Jamboree sandwich at the Jambo-ree';


firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>';





//5


const newDiv= document.createElement('div');


console.log(newDiv);


//6

const newDiv2= document.createElement('div');

document.body.appendChild(newDiv2);

//7


container.appendChild(newDiv);



//8


const firstSec = document.querySelector('section');

console.log(firstSec);


const someP = document.createElement('p');


firstSec.appendChild(someP);

//9


const newImg = document.createElement('img');

newImg.src = 'https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg'

newImg.height = '400';

newImg.width = '500';

document.body.appendChild(newImg);



//10

const newSec = document.createElement('section');

newSec.id = "butterfly";


document.body.appendChild(newSec);


//11


const foundSec = document.querySelector('section');


const secClass = foundSec.classList;

console.log(secClass);

//12

secClass.add('wdi-remote-gizmo');


//13

const sec1 = document.querySelector('section');

const foundSec1 = sec1.classList;

console.log(foundSec1.contains('wdi-remote-gizmo'));


//14


foundSec1.remove('wdi-remote-gizmo');















