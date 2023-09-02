function solveTheProblem(rectangleDimension) {
    var numberOfSquare = rectangleDimension[0] * rectangleDimension[1];
    return (parseInt(numberOfSquare / 2));
}
var rectangleDimension = readline().split(' ').map(x => parseInt(x));
var maximalDominoes = solveTheProblem(rectangleDimension);
print(maximalDominoes);