module.exports = {

    createCanvas: function createCanvas(commandTools, inScreenBuffer) {
        console.log("==============================================");
        console.log("Creating Canvas...");
        var outScreenBuffer = clone(inScreenBuffer);
        if (inScreenBuffer.length !== 1) {
            return outScreenBuffer;
        }

        var width = parseInt(commandTools[1], 10);
        var height = parseInt(commandTools[2], 10);
        var boxHeight = height + 2;
        var boxWidth = width + 2;

        outScreenBuffer = new Array(boxHeight);

        for (var j = 0; j < boxHeight; j++) {
            outScreenBuffer[j] = new Array(boxWidth).fill(' ');
            outScreenBuffer[j][0] = '|';
            outScreenBuffer[j][boxWidth - 1] = '|';
        }

        for (var i = 0; i < boxWidth; i++) {
            outScreenBuffer[0][i] = '-';
            outScreenBuffer[boxHeight - 1][i] = '-';
        }
        console.log("Canvas Created!");
        console.log("==============================================");
        return outScreenBuffer;
    },

    clearCanvas: function clearCanvas(commandTools, inScreenBuffer) {
        console.log("==============================================");
        console.log("Clearing Canvas...");
        var outScreenBuffer = clone(inScreenBuffer);
        if (inScreenBuffer.length !== 1) {
            return outScreenBuffer;
        }

        var width = parseInt(commandTools[1], 10);
        var height = parseInt(commandTools[2], 10);
        var boxHeight = height + 2;
        var boxWidth = width + 2;

        outScreenBuffer = new Array(boxHeight);

        for (var j = 0; j < boxHeight; j++) {
            outScreenBuffer[j] = new Array(boxWidth).fill(' ');
            outScreenBuffer[j][0] = '|';
            outScreenBuffer[j][boxWidth - 1] = '|';
        }

        for (var i = 0; i < boxWidth; i++) {
            outScreenBuffer[0][i] = '-';
            outScreenBuffer[boxHeight - 1][i] = '-';
        }
        console.log("Canvas Cleared!");
        console.log("==============================================");
        return outScreenBuffer;
    }
};