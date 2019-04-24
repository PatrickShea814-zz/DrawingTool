window.onload = function () {
    console.log('Welcome to Huge Drawing Tool!');

    // Set Canvas Configuration
    let canvas = document.createElement('canvas');
    context = canvas.getContext("2d");
    context.lineWidth = "";


    // Input
    let C = [20, 4];
    let L1 = [1, 2, 6, 2];
    let L2 = [6, 2, 6, 4];
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
                // Convert values of 1 to 0 to connect line to edge of canvas.
            } else {
                newValues.push(arr[i]);
            }
        };
        console.log(`New Values: ${newValues}.`);
        return newValues;
    };

    let Canvas = newArray(C);
    let Line1 = newArray(L1);
    let Line2 = newArray(L2);
    let Rectangle = newArray(R);

    // Setup Canvas
    // Create Canvas: Should create a new canvas of width w and height h.
    let createCanvas = () => {
        $(canvas).attr('id', 'canvas');
        $(canvas).attr('width', Canvas[0]);
        $(canvas).attr('height', Canvas[1]);
        $('#canvasContainer').append(canvas);
        console.log(`Canvas created with a width of ${Canvas[0]}px and height of ${Canvas[1]}px.`)
    };


    // Create Canvas
    createCanvas();

    // Create Line: Creates a new line from (x1,y1) to (x2,y2).
    let drawLine = (callback) => {
        // Validate if X or Y are equal because diagonal lines are not supported.
        if (callback[1] === callback[3] || callback[0] === callback[2]) {
            context.beginPath();
            context.strokeStyle = selectedColor;
            context.moveTo(callback[0], callback[1]);
            context.lineTo(callback[2], callback[3]);
            context.stroke();
            console.log(`Drawing Line from X1: ${callback[0]}, Y1: ${callback[1]} to X2: ${callback[2]}, Y2: ${callback[3]}.`)
        } else {
            console.log('Sorry! Canvas only supports horizontal and vertical lines at this time.');
            alert('Sorry! Canvas only supports horizontal and vertical lines at this time.')
        }
    };

    // Create Rectangle: Creates a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2).
    let drawRectangle = (callback) => {
        let rectWidth = callback[2] - callback[0];
        let rectHeight = callback[3] - callback[1];
        context.strokeStyle = selectedColor;
        context.strokeRect(callback[0], callback[1], rectWidth, rectHeight);
    };

    // Fills the entire area connected to (x,y) with "colour" c.
    let bucketFill = (Bucket, Canvas, Rectangle) => {
        let fillWidth = Canvas[0] - Bucket[0];
        let fillHeight = Canvas[1] - Bucket[1];
        context.fillStyle = selectedColor;
        context.fillRect(Bucket[0], Bucket[1], fillWidth, fillHeight);

        let rectWidth = Rectangle[2] - Rectangle[0];
        let rectHeight = Rectangle[3] - Rectangle[1];
        context.clearRect(Rectangle[0], Rectangle[1], rectWidth, rectHeight);
    };

    let fillAround = (callback) => {
        let width = $('#canvas').attr('width');
        let height = $('#canvas').attr('height');
        context.fillRect(0, 0, width, height);

        let rectWidth = callback[2] - callback[0];
        let rectHeight = callback[3] - callback[1];
        context.clearRect(callback[0], callback[1], rectWidth, rectHeight);
    };

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
            case 'draw-rectangle':
                drawRectangle(newArray(R));
                break;
            case 'color-fill':
                bucketFill(newArray(B), newArray(C), newArray(R))
                break;
            case 'fill-around':
                fillAround(drawRectangle(newArray(R)));
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
            case 49:
                drawLine(newArray(L1));
                break;
            case 50:
                drawLine(newArray(L2));
                break;
            case 82:
                drawRectangle(newArray(R));
                break;
            case 66:
                bucketFill(newArray(B), newArray(C), newArray(R))
                break;
            case 70:
                fillAround(drawRectangle(newArray(R)));
                break;
            case 69:
                eraseCanvas(newArray(C));
                break;
        }
    });


};