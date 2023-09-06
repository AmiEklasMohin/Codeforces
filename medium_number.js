function solveTheProblem() {
    var arr = readline().split(' ').map(x => parseInt(x));
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr[1];
}
var testCase = parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    var mediumValue = solveTheProblem();
    print(mediumValue);
}