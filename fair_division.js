function solveTheProblem() {
    var n = parseInt(readline());
    var arr = readline().split(' ').map(x => parseInt(x));
    var one = 0, two = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] === 1) {
            one++;
        } else {
            two++;
        }
    }
    if ((one === 0 && two % 2 === 1) || one % 2 === 1) {
        print("NO");
    } else {
        print("YES");
    }
}
var testCase = parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    solveTheProblem();
}