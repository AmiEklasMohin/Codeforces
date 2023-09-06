function solveTheProblem() {
    var n = parseInt(readline());
    return parseInt(n / 2);
}
var testCase = parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    var maximumGCD = solveTheProblem();
    print(maximumGCD);
}