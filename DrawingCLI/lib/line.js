module.exports = function drawLine(commandTools, inScreenBuffer) {
    var outScreenBuffer = clone(inScreenBuffer);
    if (outScreenBuffer.length === 1) {
        return outScreenBuffer;
    }

    var fillChar = 'x';
    var x1 = parseInt(commandTools[1], 10);
    var y1 = parseInt(commandTools[2], 10);
    var x2 = parseInt(commandTools[3], 10);
    var y2 = parseInt(commandTools[4], 10);

    // Check to see if matching x/y as diagonal functionality is not currently supported.
    if (x1 === x2 || y1 === y2) {
        for (var i = x1; i <= x2; i++) {
            for (var j = y1; j <= y2; j++) {
                outScreenBuffer[j][i] = fillChar;
            }
        }
    }

    return outScreenBuffer;
};