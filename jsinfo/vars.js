let message;
message = "Hello";
alert(message);

let message2 = 'World';
let user = 'JavaScript',
    age = 18,
    message3 = 'Hello World';

let user2 = 'John';
let age2 = 25;
let message4 = 'Hello';

let hello = 'Hell World';

let copy_the_msg;

copy_the_msg = hello

// you can not declar a var twice only once then re assign.

const myvariable = 'hello' // constants can not be reassigned

let data = 'hello'
data = 123

let num = 123
num = 12.3

alert( 1 / 0 ) // Infinity
// or 
alert (Infinity)

let nothing = NaN // no a number

alert(NaN + 1) // gives NaN

alert(NaN / 3 * 9 + 6) // gives NaN

// any operation with NaN gives back just NaN

/*
Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
*/

// BIG INTS (anything < or > than +/-(2^53) - 1

const BIG_INT = 1234567890123456789012345678901234567890n; // n at the end makes it a big int

// string (no char type like Python)

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let t = true;
let f = false;
let isGreater = 4 > 1;

// null
let age1 = null;
let otherAge; // value is undefined, not null, null means nothing
// or
let otherAge2 = undefined; // not recommended, would mostly use null if assigning an empty var

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)







