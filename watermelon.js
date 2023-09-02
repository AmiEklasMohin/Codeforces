function solveTheProblem(watermelonWeight) {
    if (watermelonWeight >= 4 && watermelonWeight % 2 === 0) {
        return "YES";
    } else {
        return "NO";
    }
}
var watermelonWeight = readline();
var isPossible = solveTheProblem(watermelonWeight);
print(isPossible);
