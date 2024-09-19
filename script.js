const sketchpad = document.querySelector("#sketchpad");
const square = document.createElement('div');
square.className = 'square'

const btn = document.querySelector('button');
const randomcolor = () => {
    const randomhexnumber = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomhexnumber;
}

function setup() {
    let input = prompt("Select how many squares per side")
    if (!input || +input === 0) setup();
    if (input < 101) {
        generatecanvas(input)
    } else {
        alert("That's too many! Please enter a number up to 100.");
        setup();
    }
}

generatecanvas(16);

btn.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach((element) => element.remove());
    setup();
})



function generatecanvas(number) {
    for (let i = 0; i < (number * number); i++) {
        let clonednode = square.cloneNode();
        clonednode.style.backgroundColor = randomcolor();
        clonednode.style.opacity = "0.1";
        clonednode.style.width = (500 / number) + "px";
        clonednode.style.height = (500 / number) + "px";
        sketchpad.appendChild(clonednode);
    }

    const squares = document.querySelectorAll('.square')
    squares.forEach((element) => {
    element.addEventListener('mouseover', () => {
        let currentopacity = +element.style.opacity || 1;
        let newopacity = currentopacity + 0.1;
        element.style.opacity = newopacity.toString();
        })
})
}

