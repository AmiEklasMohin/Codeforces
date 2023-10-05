function lexicographicallySmallestString() {
    var firstLine = readline().split(' ').map(x => Number.parseInt(x));
    var secondLine = readline().split(' ').map(x => Number.parseInt(x));
    var n = firstLine[0], m = firstLine[1];
    var tempArray = [];
    var smallestString = "";
    for (var i = 0; i < m; i++) {
        tempArray[i] = "B";
    }
    for (var j = 0; j < n; j++) {
        var k = m - secondLine[j];
        var p = secondLine[j] - 1;
        if (k >= p && tempArray[p] === 'B') {
            tempArray[p] = "A";
        } else if (tempArray[k] === 'B') {
            tempArray[k] = "A";
        } else {
            tempArray[p] = "A";
        }
    }
    for (i = 0; i < tempArray.length; i++) {
        smallestString = smallestString.concat(tempArray[i]);
    }
    return smallestString;
}

var testCase = Number.parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    var smallestString = lexicographicallySmallestString();
    print(smallestString);
}
