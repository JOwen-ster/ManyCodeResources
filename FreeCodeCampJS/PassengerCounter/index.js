// document refers to the document page
// textContent is its value <h1>TEXT CONTENT</h1>
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
let saveEl = document.getElementById('save-el');
let counterEl = document.getElementById('count-el');
let errorMsgEl = document.getElementById('error');
let counter = 0;


function increment() {
    counter += 1;
    counterEl.textContent = counter;
    console.log(counter)
}

function resetCounter(){
    counter = 0;
    counterEl.textContent = counter
}

function save() {
    let countStr = counter + ' - ';
    saveEl.textContent += countStr;
    resetCounter()
    console.log(counter);
}

function displayError() {
    errorMsgEl.textContent = 'An error occured!'
}