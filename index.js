let element = document.getElementById('idone');

// console.log(element);

element.innerHTML = "Modified dishes";
element.style.backgroundColor = "blue";

let count = 0;
let newElement = document.createElement('p');
newElement.innerHTML = count;
let divToFill = document.getElementById('dynamicdiv');
divToFill.appendChild(newElement);

function increase() {
  count++;
  newElement.innerHTML = count;
  console.log("Button is clicked!");
}

function decrease() {
  count--;
  newElement.innerHTML = count;
  console.log("Button is clicked!");
}


let flag = true;
function changeFontStyle() {
  if (flag == true) {
    document.getElementById('testpara').style.fontFamily = 'cursive';
    flag = false;
  } else {
    document.getElementById('testpara').style.fontFamily = 'fantasy';
    flag = true;
  }
}

const imageSources = ['dish1.jpg','dish2.jpg','dish3.jpg'];
let indexForImage = 0;
function changeImage() {
  indexForImage = (indexForImage+1)%imageSources.length;
  let imageElement = document.getElementById('testimage');
  imageElement.src = imageSources[indexForImage];
}

let a = 15.78;
let n = Math.random();
console.log(n)

