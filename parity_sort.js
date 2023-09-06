function solveTheProblem() {
    var n = parseInt(readline());
    var arr = readline().split(' ').map(x => parseInt(x));
    var arrCopy = arr.map((x) => x);
    arrCopy.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < n; i++) {
        if ((arrCopy[i] % 2) !== (arr[i] % 2)) {
            print("NO");
            return;
        }
    }
    print("YES");
}
var testCase = parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    solveTheProblem();
}