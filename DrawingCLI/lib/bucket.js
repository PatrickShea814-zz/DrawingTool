module.exports = function bucketFill(commandTools, inScreenBuffer) {
    var outScreenBuffer = clone(inScreenBuffer); //to clone the array
    if (outScreenBuffer.length === 1) {
        return outScreenBuffer;
    }

    var x = parseInt(commandTools[1], 10);
    var y = parseInt(commandTools[2], 10);
    var c = commandTools[3];

    //Our screenBuffer is stored as Y,X
    if (outScreenBuffer[y][x] !== ' ') {
        return outScreenBuffer;
    }
    outScreenBuffer[y][x] = c;

    outScreenBuffer = bucketFill(['B', x + 1, y, c], outScreenBuffer);
    outScreenBuffer = bucketFill(['B', x, y + 1, c], outScreenBuffer);
    outScreenBuffer = bucketFill(['B', x - 1, y, c], outScreenBuffer);
    outScreenBuffer = bucketFill(['B', x, y - 1, c], outScreenBuffer);

    return outScreenBuffer;
};