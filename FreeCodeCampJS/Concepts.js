// variables
let myvar1 = 18;
let myvar2 = 'Hello, World!';
let myvar3 = false;
myvar3 = true;

// conditionals
if (myvar1 >= 18) {
    console.log('You are an adult!');
} else if (myvar2 === 'Hello, World!') {
    console.log('myvar2 is a proper greeting!');
} else {
    console.log('This executes if nothing else did.');
}

// loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

// functions
function myfunction() {
    console.log('myfunction was called!');
}
myfunction();

// grab element from HTML
let myelement = document.querySelector("#id");
myelement.style.color = "cyan";

// grab element from HTML using an event listener
document.addEventListener("DOMContentLoaded", () => {
    let myelement = document.querySelector("#id");
    myelement.style.color = "cyan";
});


