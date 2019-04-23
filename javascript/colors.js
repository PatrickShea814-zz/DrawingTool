// Color Palette Array
let colors = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'black'];


let setPalette = (event) => {
    //identify palette
    let palette = event.target;
    //set color
    setColor(palette.style.backgroundColor);
    //give active class
    //leave space in active to separate classes
    palette.className += ' active ';
}


let setColor = (color) => {
    context.fillStyle = color;
    context.strokeStyle = color;
    let active = document.getElementsByClassName('active')[0];
    if (active) {
        active.className = 'palette';
    }
}


for (let i = 0, n = colors.length; i < n; i++) {
    let palette = document.createElement('div');
    palette.className = 'palette';
    palette.style.backgroundColor = colors[i];
    palette.addEventListener('click', setPalette);
    document.getElementById('colors').appendChild(palette);
}

setPalette({ target: document.getElementsByClassName('palette')[0] });