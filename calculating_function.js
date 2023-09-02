function solveTheProblem(inputNumber) {
    if (inputNumber % 2 === 0) {
        result = Number.parseInt(inputNumber / 2);
    } else {
        result = Number.parseInt((inputNumber / 2) + 1);
        result *= -1;
    }
    return result;
}
var inputNumber = readline();
var result = solveTheProblem(inputNumber);
print(result);