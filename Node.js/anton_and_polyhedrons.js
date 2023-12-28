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
    const polyhedronList = {
        "Tetrahedron": 4,
        "Cube": 6,
        "Octahedron": 8,
        "Dodecahedron": 12,
        "Icosahedron": 20
    };
    let numberOfPolyhedrons = parseInt(readline());
    let counter = 0;
    for (let i = 1; i <= numberOfPolyhedrons; ++i) {
        let nameOfPolyhedron = readline();
        counter += polyhedronList[nameOfPolyhedron];
    }
    console.log(counter);
}
