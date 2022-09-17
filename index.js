// select elements 
let canvas = document.querySelector('#canvas');
let randomColor = document.querySelector('#randomColors');
let reset = document.querySelector('#reset');
let erase = document.querySelector('#erase');
let Xinput = document.querySelector('#Xrange');
let Yinput = document.querySelector('#Yrange');

// flags for event listners 
let randomC = 0;
let earserSelected = 0;
// create grid 

let Y = Yinput.value;
let X = Xinput.value;
createSquares(X, Y);
Xinput.oninput = function () {
    X = Xinput.value;
    createSquares(X, Y);
    console.log(`x:${X}\ny:${Y}\n`); 
};


Yinput.oninput = function () {
    Y = Yinput.value;
    createSquares(X, Y);
    console.log(`x:${X}\ny:${Y}\n`);
};

// color black by default 
canvas.addEventListener('mousedown', (e) => {
    canvas.addEventListener('mouseover', coloring);
    e.stopPropagation();
});

randomColor.addEventListener('mousedown', (e) => {
    if (randomC) {
        earserSelected = 0;
        randomC--;
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'white';
    } else {
        earserSelected = 0;
        randomC++;
        randomColor.style.backgroundColor = 'lightgreen';
        erase.style.backgroundColor = 'white';
    }
});


erase.addEventListener('click', (e) => {
    if (earserSelected) {
        randomC = 0;
        earserSelected--;
        radrandomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'white';
    } else {
        randomC = 0;
        earserSelected--;
        randomColor.style.backgroundColor = 'white';
        erase.style.backgroundColor = 'yellow';
    }
})

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

function createSquares(r, c) {
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
    for (let i = 0; i < r * c; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        canvas.appendChild(div);
        div.setAttribute('id', 'Squares')
    }
    canvas.style.width = (r * 10).toString() + 'px';
    canvas.style.height = (c * 10).toString() + 'px';
}

function coloring(e) {
    if (e.target !== e.currentTarget) {
        if (randomC) {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            rand = '#' + n.slice(0, 6);
            e.target.style.backgroundColor = rand;
        } else if (earserSelected) {
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = 'black';
        }
    }
}

function resetall() {
    let container = document.querySelectorAll('#Squares');
    container.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}