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

function minOperation(n, k, str) {
    let op = 0;
    for (let i = 0; i < n; ++i) {
        if (str.charAt(i) === 'B') {
            op += 1;
            i = i + k - 1;
        }
    }
    return op;
}

function main() {
    let testCase = parseInt(readline());
    for (let i = 1; i <= testCase; ++i) {
        let num = readline().split(' ').map(x => parseInt(x));
        let str = readline();
        let n = num[0];
        let k = num[1];
        let minOp = minOperation(n, k, str);
        console.log(minOp);
    }
}
