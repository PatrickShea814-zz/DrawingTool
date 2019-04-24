window.onload = function () {
    console.log('Welcome to Huge Drawing Tool!');

    // Set Canvas Configuration
    let canvas = document.createElement('canvas');
    context = canvas.getContext("2d");


    // Input
    let C = [20, 4];
    let L1 = [1, 2, 6, 2];
    let L2 = [6, 3, 6, 4];
    let R = [16, 1, 20, 3];
    let B = [10, 3, 'o'];



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


    let selectedColor = setPalette({ target: document.getElementsByClassName('palette')[0] });

    // Convert Arrays to larger values for display by a factor of 20.
    // Uses typeof to validate before converting or pushes original value.
    let newArray = (arr) => {
        let newValues = [];
        for (let i = 0; i < arr.length; i++) {
            // Check to see if input is a number.
            if (typeof arr[i] === 'number') {
                let value = arr[i] * 40;
                newValues.push(value);
            } else {
                newValues.push(arr[i]);
            };
        };
        console.log(`New Values: ${newValues}.`);
        return newValues;
    };

    // Setup Canvas
    // Create Canvas: Should create a new canvas of width w and height h.
    let createCanvas = (callback) => {
        $(canvas).attr('id', 'canvas');
        $(canvas).css('width', callback[0]);
        $(canvas).css('height', callback[1]);
        $('#canvasContainer').append(canvas);
        console.log(`Canvas created with a width of ${callback[0]}px and height of ${callback[1]}px.`)
    };


    // Create Line: Creates a new line from (x1,y1) to (x2,y2).
    let drawLine = (callback) => {
        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = selectedColor;
        context.moveTo(callback[0], callback[1]);
        context.lineTo(callback[2], callback[3]);
        context.stroke();
        console.log(`Drawing Line from X1: ${callback[0]}, Y1: ${callback[1]} to X2: ${callback[2]}, Y2: ${callback[3]}.`)
    };

    // Create Rectangle: Creates a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2).
    let createRectangle = (callback) => {
        context.beginPath();
        rectWidth = callback[2] - callback[0];
        rectHeight = callback[3] - callback[1];
        context.lineWidth = "2";
        context.strokeStyle = selectedColor;
        context.rect(callback[0], callback[1], rectWidth, rectHeight);
        context.stroke();
        console.log(`Creating Rectangle from X1: ${callback[0]}, Y1: ${callback[1]} to X2: ${rectWidth}, Y2: ${rectHeight}.`)
    };

    // // Fills the entire area connected to (x,y) with "colour" c.
    // let bucketFill = (callback) => {
    //     context.beginPath();
    //     context.rect();
    //     context.fillStyle = "red";
    //     context.fill();
    // };

    // Creates New Blank Canvas
    function eraseCanvas(callback) {
        context.clearRect(0, 0, callback[0], callback[1]);
        console.log(`Canvas ${callback[0]}px Wide, ${callback[1]}px Tall has been cleared.`);
    };

    // Button Click Event Listeners
    $('.btn').on('click', function (event) {
        let buttonID = event.target.id;
        console.log(buttonID);
        switch (buttonID) {
            case 'create-line-1':
                drawLine(newArray(L1));
                break;
            case 'create-line-2':
                drawLine(newArray(L2));
                break;
            case 'create-rectangle':
                createRectangle(newArray(R));
                break;
            case 'color-fill':
                bucketFill(B);
                break;
            case 'clearCanvas':
                eraseCanvas(newArray(C));
                break;
        }
    });

    // Keyup Event Listeners
    $(document).on('keyup', function (e) {
        let key = e.which;
        console.log(key);
        switch (key) {
            case '49':
                drawLine(newArray(L1));
                break;
            case '50':
                drawLine(newArray(L2));
                break;
            case '114':
                createRectangle(newArray(R));
                break;
            case '102':
                bucketFill(B);
                break;
            case '99':
                createCanvas(newArray(C));
                break;
        }
    });

    // Create Canvas
    createCanvas(newArray(C));
};