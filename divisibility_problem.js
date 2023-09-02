function solveTheProblem() {
    var twoNumbers = readline().split(' ').map(x => parseInt(x));
    var a = twoNumbers[0];
    var b = twoNumbers[1];
    var minimumMoves = a / b;
    if(a % b !== 0) {
        minimumMoves++;
    }
    minimumMoves = parseInt(minimumMoves);
    minimumMoves = minimumMoves * b - a;
    return minimumMoves;
}
var testCase = readline();
for (var i = 1; i <= testCase; i++) {
    var minimumMoves = solveTheProblem();
    print(minimumMoves); 
}