
const redPara = document.createElement('p');
redPara.classList.toggle('red');
redPara.textContent = "Hey, I'm red!";

const blueH3 = document.createElement('h3');
blueH3.classList.toggle('blue');
blueH3.textContent = "Hi, I'm a blue H3!"

const container = document.querySelector('#container');
container.appendChild(redPara);
container.appendChild(blueH3);


const div = document.createElement('div');
div.classList.toggle('pinkBlack');

const h1 = document.createElement('h1');
h1.textContent = "I'm an H1, in the pinkBlack DIV"

const innerP = document.createElement('p');
innerP.textContent = "ME TOO!";

container.appendChild(div);


const innerContainer = document.querySelector('.pinkBlack');
innerContainer.appendChild(h1);
innerContainer.appendChild(innerP);

function alertFunction(){
    alert('YAY you did it!!!');
}

function btnHover() {
    alert('you hovered!!')
}


const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function (e) {
    console.log(e.target.style.background = 'blue');
});
//btn1.addEventListener('mouseover', btnHover);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
        alert(button.id);
    })
});

