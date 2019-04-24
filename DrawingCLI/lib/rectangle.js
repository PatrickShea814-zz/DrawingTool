var drawLine = require('./line');

module.exports = function drawRectangle(commandTools, inScreenBuffer) {
    var outScreenBuffer = clone(inScreenBuffer);
    if (outScreenBuffer.length === 1) {
        return outScreenBuffer;
    }

    var fillChar = 'x';
    var x1 = parseInt(commandTools[1], 10);
    var y1 = parseInt(commandTools[2], 10);
    var x2 = parseInt(commandTools[3], 10);
    var y2 = parseInt(commandTools[4], 10);

    outScreenBuffer = drawLine(['L', x1, y1, x2, y1], outScreenBuffer);
    outScreenBuffer = drawLine(['L', x2, y1, x2, y2], outScreenBuffer);
    outScreenBuffer = drawLine(['L', x2, y2, x1, y2], outScreenBuffer);
    outScreenBuffer = drawLine(['L', x1, y2, x1, y1], outScreenBuffer);

    return outScreenBuffer;
};