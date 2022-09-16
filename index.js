

let canvas = document.querySelector('#canvas');
createSquares(20, 20);



canvas.addEventListener('mousedown', () => {
    canvas.addEventListener('mouseover', coloring);

})

canvas.addEventListener('mouseup', (e) => {
    console.log(e);
    canvas.removeEventListener('mouseover', coloring)

})





function createSquares(r, c) {
    canvas.style.width = (r * 10).toString() + 'px';
    canvas.style.height = (c * 10).toString() + 'px';
    for (let i = 0; i < r * c; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        canvas.appendChild(div);
        div.setAttribute('id', 'Squares')
    }
}

function coloring(e) {
    if (e.target !== e.currentTarget) {
        e.target.classList.add('color')
    }
}
