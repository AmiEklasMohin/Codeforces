function calculateOutput(inputNumber) {
    var outputNumber = 0;
    if ((inputNumber % 2) === 0) {
        outputNumber = Number.parseInt(inputNumber / 2);
    } else {
        outputNumber = Number.parseInt((inputNumber / 2) + 1);
        outputNumber *= -1;
    }
    return outputNumber;
}

var inputNumber = Number.parseInt(readline());
var outputNumber = calculateOutput(inputNumber);
print(outputNumber);