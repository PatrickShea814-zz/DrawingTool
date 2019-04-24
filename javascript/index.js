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
    };


    let setColor = (color) => {
        context.fillStyle = color;
        context.strokeStyle = color;
        let active = document.getElementsByClassName('active')[0];
        if (active) {
            active.className = 'palette';
        }
    };


    for (let i = 0, n = colors.length; i < n; i++) {
        let palette = document.createElement('div');
        palette.className = 'palette';
        palette.style.backgroundColor = colors[i];
        palette.addEventListener('click', setPalette);
        document.getElementById('colors').appendChild(palette);
    };


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
    let createCanvas = (Canvas) => {
        $(canvas).attr('id', 'canvas');
        $(canvas).attr('width', Canvas[0]);
        $(canvas).attr('height', Canvas[1]);
        $('#canvasContainer').append(canvas);
        console.log(`Canvas created with a width of ${Canvas[0]}px and height of ${Canvas[1]}px.`)
    };


    // Create Canvas
    createCanvas(Canvas);

    // Create Line: Creates a new line from (x1,y1) to (x2,y2).
    let drawLine = (arr) => {
        // Validate if X or Y are equal because diagonal lines are not supported.
        if (arr[1] === arr[3] || arr[0] === arr[2]) {
            context.beginPath();
            context.strokeStyle = selectedColor;
            context.moveTo(arr[0], arr[1]);
            context.lineTo(arr[2], arr[3]);
            context.stroke();
            console.log(`Drawing Line from X1: ${arr[0]}, Y1: ${arr[1]} to X2: ${arr[2]}, Y2: ${arr[3]}.`);
        } else {
            console.log('Sorry! Canvas only supports horizontal and vertical lines at this time.');
            alert('Sorry! Canvas only supports horizontal and vertical lines at this time.');
        }
    };

    // Create Rectangle: Creates a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2).
    let drawRectangle = (arr) => {
        let rectWidth = arr[2] - arr[0];
        let rectHeight = arr[3] - arr[1];
        context.strokeStyle = selectedColor;
        context.strokeRect(arr[0], arr[1], rectWidth, rectHeight);
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

    let fillCanvas = (canv, rect, l1) => {
        context.fillRect(0, 0, canv[0], canv[1]);
        clearRect1(rect);
        clearRect2(l1);
    };

    let clearRect1 = (rect) => {
        let rectWidth = rect[2] - rect[0];
        let rectHeight = rect[3] - rect[1];
        context.clearRect(rect[0], rect[1], rectWidth, rectHeight);
    };

    let clearRect2 = (l1) => {
        context.clearRect(l1[0], l1[1], l1[2], l1[3]);
    };

    // Creates New Blank Canvas
    function eraseCanvas(Canvas) {
        context.clearRect(0, 0, Canvas[0], Canvas[1]);
        console.log(`Canvas ${Canvas[0]}px Wide, ${Canvas[1]}px Tall has been cleared.`);
    };

    // Button Click Event Listeners
    $('.btn').on('click', function (event) {
        let buttonID = event.target.id;
        console.log(buttonID);
        switch (buttonID) {
            case 'create-line-1':
                drawLine(Line1);
                break;
            case 'create-line-2':
                drawLine(Line2);
                break;
            case 'draw-rectangle':
                drawRectangle(Rectangle);
                break;
            case 'color-fill':
                fillCanvas(Canvas, Rectangle, Line1);
                break;
            case 'clearCanvas':
                eraseCanvas(Canvas);
                break;
        }
    });

    // Keyup Event Listeners
    $(document).on('keyup', function (e) {
        let key = e.which;
        console.log(key);
        switch (key) {
            case 49:
                drawLine(Line1);
                break;
            case 50:
                drawLine(Line2);
                break;
            case 82:
                drawRectangle(Rectangle);
                break;
            case 66:
                fillCanvas(Canvas, Rectangle, Line1);
                break;
            case 69:
                eraseCanvas(Canvas);
                break;
        }
    });
};