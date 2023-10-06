function countTotalFaces(numberOfPolyhedrons) {
    const polyhedronList = {
        "Tetrahedron": 4,
        "Cube": 6,
        "Octahedron": 8,
        "Dodecahedron": 12,
        "Icosahedron": 20
    };
    var nameOfPolyhedron = null;
    var totalFaceCounter = 0;
    for (var i = 1; i <= numberOfPolyhedrons; i += 1) {
        nameOfPolyhedron = readline();
        totalFaceCounter += polyhedronList[nameOfPolyhedron];
    }
    return totalFaceCounter;
}

var numberOfPolyhedrons = Number.parseInt(readline());
var totalFaces = countTotalFaces(numberOfPolyhedrons);
print(totalFaces);
