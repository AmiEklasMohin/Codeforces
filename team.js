function writeSolution(numberOfProblems) {
    var solveCount = 0;
    for (var i = 1; i <= numberOfProblems; i++) {
        var isSure = readline().split(' ').map(x => Number.parseInt(x));
        var sureAboutSolution = isSure[0] + isSure[1] + isSure[2];
        if (sureAboutSolution >= 2) {
            solveCount += 1;
        }
    }
    return solveCount;
}

var numberOfProblems = Number.parseInt(readline());
var solutionImpelmented = writeSolution(numberOfProblems);
print(solutionImpelmented);
