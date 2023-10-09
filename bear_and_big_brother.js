function countYears(weightOfLimak, weightOfBob) {
    var requiredYears = 0;
    while(weightOfLimak <= weightOfBob) {
        weightOfLimak = weightOfLimak * 3;
        weightOfBob = weightOfBob * 2;
        requiredYears += 1;
    }
    return requiredYears;
}

var inputLine = readline().split(' ').map(x => Number.parseInt(x));
var weightOfLimak = inputLine[0];
var weightOfBob = inputLine[1];
var requiredYears = countYears(weightOfLimak, weightOfBob);
print(requiredYears);
