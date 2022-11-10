
function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;   
}

function minus () {
    if (outputInt > 0) {
    output-=1;
    output.textContent = outputInt;}
}

function plus() {
    if (outputInt < 9999999999) {
    output+=1;
    output.textContent = outputInt;}
    }

function random() {
    outputInt = randomNumber (0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
const num = Math.floor (Math.random() * (max-min + 1))+ min;
}

const output = document.querySelector('.output');
let outputInt = parseInt (output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click', check);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', check);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert [phone_content.value];
}
*/

var slider = document.getElementById("myRange");
var sliderOutput = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector (".slider-output");

function update(){
    sliderOutput.textContent = slider.value;
}