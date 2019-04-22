//array to create color palette
let colors = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'black'];

let setSwatch = (e) => {
    //identify swatch
    let swatch = e.target;
    //set color
    setColor(swatch.style.backgroundColor);
    //give active class
    //leave space in active to separate classes
    swatch.className += ' active ';
}


let setColor = (color) => {
    context.fillStyle = color;
    context.strokeStyle = color;
    let active = document.getElementsByClassName('active')[0];
    if (active) {
        active.className = 'swatch';
    }
}


for (let i = 0, n = colors.length; i < n; i++) {
    let swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

setSwatch({ target: document.getElementsByClassName('swatch')[0] });