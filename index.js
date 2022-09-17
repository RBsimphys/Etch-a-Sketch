// select elements 
let canvas = document.querySelector('#canvas');
let randomColor = document.querySelector('#randomColors');
let reset = document.querySelector('#reset');
let erase = document.querySelector('#erase');
let gray = document.querySelector('#gray');
let Xinput = document.querySelector('#Xrange');
let colorPicker = document.querySelector('#colorpicker-control')
let gridoutput = document.querySelector('#output');
// flags for event listners 
let randomC = 0;
let earserSelected = 0;
let graySelected = 0;
// create grid 
let canvasWidth = canvas.offsetWidth;
let canvasHeight = canvas.offsetHeight;
let X = Xinput.value;
createSquares(X);

Xinput.oninput = function () {
    X = Xinput.value;
    createSquares(X);

    gridoutput.textContent = `${X} x ${X}`;
};


// color black by default 
canvas.addEventListener('mousedown', (e) => {
    canvas.addEventListener('mouseover', coloring);
    e.stopPropagation();
});



// random colors
randomColor.addEventListener('click', (e) => {
    if (randomC) {
        earserSelected = 0;
        graySelected = 0;
        randomC--;
        gray.style.backgroundColor = 'white';
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'white';
    } else {
        earserSelected = 0;
        graySelected = 0;
        randomC++;
        gray.style.backgroundColor = 'white';
        randomColor.style.backgroundColor = 'lightgreen';
        erase.style.backgroundColor = 'white';
    }
});


// // gray colors
gray.addEventListener('click', (e) => {
    if (graySelected) {
        randomC = 0;
        earserSelected = 0;
        graySelected--;
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'white';
        gray.style.backgroundColor = 'white';
    } else {
        randomC = 0;
        earserSelected = 0;
        graySelected++;
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'white';
        gray.style.backgroundColor = 'lightblue';
    }
})


// erase colors
erase.addEventListener('click', (e) => {
    if (earserSelected) {
        randomC = 0;
        graySelected = 0;
        earserSelected--;
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'white';
        gray.style.backgroundColor = 'white';
    } else {
        randomC = 0;
        graySelected = 0;
        earserSelected++;
        gray.style.backgroundColor = 'white';
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'yellow';
    }
})


// reset game 
reset.addEventListener('click', (e) => {
    resetall();
    e.stopPropagation()
}
);



// remove event listeners to color 
canvas.addEventListener('mouseup', (e) => {
    canvas.removeEventListener('mouseover', coloring);
    e.stopPropagation();
    console.log('stop coloring');

});

function createSquares(r) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    for (let i = 0; i < r * r; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        canvas.appendChild(div);
        div.setAttribute('id', 'Squares')
        div.style.width = (canvasHeight / r).toString() + 'px';
        div.style.height = (canvasHeight / r).toString() + 'px';
        div.style.backgroundColor = '#FFFFFF';
    }
}

function coloring(e) {
    if (e.target !== e.currentTarget) {
        if (randomC) {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            rand = '#' + n.slice(0, 6);
            e.target.style.backgroundColor = rand;
        } else if (graySelected) {
            makeMoreGray(e.target);
        } else if (earserSelected) {
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = colorPicker.value;
        }
    }
}


function makeMoreGray(e) {
    let n = Number(e.style.backgroundColor.replace(/\D/g,'')); 
    let color_init = n % 1000;
    gunit = color_init - 20; 
    e.style.backgroundColor = 'rgb(' + gunit.toString() + ','+ gunit.toString() + ','+ gunit.toString() + ')';
    console.log(e.style.backgroundColor);
}

function resetall() {
    let container = document.querySelectorAll('#Squares');
    container.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}

function RGBtoArray(){

}