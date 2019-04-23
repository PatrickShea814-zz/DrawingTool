window.onload = function () {
    console.log('Welcome to Huge Drawing Tool!');

    let canvas = document.createElement('canvas');
    context = canvas.getContext("2d");

    let C = [20, 4];
    let L1 = [1, 2, 6, 2];
    let L2 = [6, 3, 6, 4];
    let R = [16, 1, 20, 3];
    let B = [10, 3, 'o'];

    // Setup Canvas

    // Convert Arrays to larger values for display by a factor of 20.
    // Uses typeof to validate before converting or pushes original value.
    let newArray = (arr) => {
        let newValues = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                let value = arr[i] * 40;
                newValues.push(value);
            } else {
                newValues.push(arr[i]);
            }
        }
        console.log(`New Values: ${newValues}.`);
        return newValues;
    };

    // Create Canvas: Should create a new canvas of width w and height h.
    let createCanvas = (callback) => {
        $(canvas).attr('id', 'canvas');
        $(canvas).css('width', callback[0]);
        $(canvas).css('height', callback[1]);
        $('#canvasContainer').append(canvas);
        console.log(`Canvas created with a width of ${callback[0]} px and height of ${callback[1]} px.`)
    };

    createCanvas(newArray(C));

    // Create Line: Creates a new line from (x1,y1) to (x2,y2).
    let drawLine = (callback) => {
        context.beginPath();
        context.lineWidth = "2";
        context.strokeStyle = "blue";
        context.moveTo(callback[0], callback[1]);
        context.lineTo(callback[2], callback[3]);
        context.stroke();
        console.log(`Drawing Line from X1: ${callback[0]}, Y1: ${callback[1]} to X2: ${callback[2]}, Y2: ${callback[3]}.`)
    };

    // drawLine(newArray(L1));
    // drawLine(newArray(L2));


    // Create Rectangle: Creates a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2).
    let createRectangle = (callback) => {
        context.beginPath();
        rectWidth = callback[2] - callback[0];
        rectHeight = callback[3] - callback[1];
        context.lineWidth = "2";
        context.strokeStyle = "green";
        context.rect(callback[0], callback[1], rectWidth, rectHeight);
        context.stroke();
        console.log(`Creating Rectangle from X1: ${callback[0]}, Y1: ${callback[1]} to X2: ${rectWidth}, Y2: ${rectHeight}.`)
    };

    // createRectangle(newArray(R));


    // Fills the entire area connected to (x,y) with "colour" c.
    let bucketFill = (callback) => {
        context.beginPath();
        context.rect();
        context.fillStyle = "red";
        context.fill();
    };
};