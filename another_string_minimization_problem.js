function solveTheProblem() {
    var nm = readline().split(' ').map(x => parseInt(x));
    var ar = readline().split(' ').map(x => parseInt(x));
    var n = nm[0];
    var m = nm[1];
    var s = [];
    var text = '';
    for (var i = 0; i < m; i++) {
        s[i] = 'B';
    }
    for (var j = 0; j < n; j++) {
        var k = m - ar[j];
        var x = ar[j] - 1;
        if (x <= k && s[x] === 'B') {
            s[x] = 'A';
        } else if (s[k] === 'B') {
            s[k] = 'A';
        } else {
            s[x] = 'A';
        }
    }
    for (var xx = 0; xx < m; xx++) {
        text = text + s[xx];
    }
    return text;
}
var testCase = parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    var smallestString = solveTheProblem();
    print(smallestString);
}