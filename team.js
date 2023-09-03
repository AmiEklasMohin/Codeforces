function solveTheProblem(numberOfProblems) {
    var count = 0;
    for(var i = 1; i <= numberOfProblems; i++) {
        var isSure = readline().split(' ').map(x => parseInt(x));
        var sureAboutSolution = isSure[0] + isSure[1] + isSure[2];
        if(sureAboutSolution >= 2) {
            count++;
        }
    }
    return count;
}
var numberOfProblems = readline();
var solutionImpelmented = solveTheProblem(numberOfProblems);
print(solutionImpelmented);