
var fs = require('fs');
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    let array = data.toString().split("\n");
    for (i in array) {
        console.log(array);
    };
    for (let i = 0; i < array.length; i++) {
        let input = Array.from(array[i].split(' '));
        console.log(input)
    };
});