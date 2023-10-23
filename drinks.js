function orangePercentageCalculator(numOfDrinks, volumeOfDrink) {
    var totalVolume = 0;
    for (var i = 0; i < numOfDrinks; ++i) {
        totalVolume += volumeOfDrink[i];
    }
    return (totalVolume / numOfDrinks);
}

var numOfDrinks = Number.parseInt(readline());
var volumeOfDrink = readline().split(' ').map(x => Number.parseInt(x));
var orangePercentage = orangePercentageCalculator(numOfDrinks, volumeOfDrink);
print(orangePercentage);
