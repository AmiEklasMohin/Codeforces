var numberOfColumns = parseInt(readline());
var numberOfCubes = readline().split(' ').map(x => parseInt(x));
numberOfCubes.sort(function (a, b) {
    return a - b;
});
print(numberOfCubes.join(' '));
