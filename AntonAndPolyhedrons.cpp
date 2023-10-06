#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<string, int> polyhedronsList = {
        {"Tetrahedron", 4},
        {"Cube", 6},
        {"Octahedron", 8},
        {"Dodecahedron", 12},
        {"Icosahedron", 20}
    };
    int numberOfPolyhedrons, totalFaces = 0;
    cin >> numberOfPolyhedrons;
    for (int i = 1; i <= numberOfPolyhedrons; i++) {
        string nameOfPolyhedron;
        cin >> nameOfPolyhedron;
        totalFaces += polyhedronsList[nameOfPolyhedron];
    }
    cout << totalFaces << endl;
    return 0;
}
