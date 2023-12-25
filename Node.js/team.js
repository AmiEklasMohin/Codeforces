'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    var n = Number.parseInt(readline());
    var solveCount = 0;
    for (var i = 1; i <= n; ++i) {
        var x = 0;
        var num = readline().split(' ').map(x => Number.parseInt(x));
        x = num[0] + num[1] + num[2];
        if (x >= 2) {
            solveCount += 1;
        }
    }
    console.log(solveCount);
}
