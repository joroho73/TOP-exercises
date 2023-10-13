console.log( 1 + 2 + 3 + 4 + 5 +6);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(9 * a);

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;

console.log('======');

let x = "blah";
let y = 2;
let z = x* 2;
console.log(z);
z = 23;
console.log(z-y);


const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const forename = "Chris";
const greeting = `Hello, ${forename}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


const button = document.querySelector("button");

function greet() {
  const name = window.prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

//button.addEventListener("click", greet);

//let age = 14;

//if (!(age >= 14 && age <= 90))
//if (!(age >= 14 && age <= 90))
//{
//    alert("age is " + age)
//}
//else{
//    alert("too old or too young")
//};

let v = null || -1 && 1;
console.log(Boolean(v));


function myFunction() {
    let userName = prompt("Please enter your Username");
    console.log(Boolean(userName))
    if (userName == "Admin") {
        console.log(`username is ${userName}`);
        console.log(Boolean(userName))
        let password = prompt("and now your password.")
            console.log(`username is ${password}`)
            
            if (password == "TheMaster"){
                document.getElementById("demo").innerHTML = "Welcome Master";
            }
            else if(password == null || password =='') {
                document.getElementById("demo").innerHTML = "Login Cancelled";
        
            }
            else{
                console.log("bad password")
                document.getElementById("demo").innerHTML = "Access Denied";
            }
    }
    else if(userName == null || userName =='') {
        document.getElementById("demo").innerHTML = "Login Cancelled";

    }
    else {
    
        document.getElementById("demo").innerHTML = "I don't know you";
    }       
        
    
  }