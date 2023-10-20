#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<string,int> polyhedron_list = {
        {"Tetrahedron", 4},
        {"Cube", 6},
        {"Octahedron", 8},
        {"Dodecahedron", 12},
        {"Icosahedron", 20}
    };
    int number_of_polyhedrons, total_faces = 0;
    cin >> number_of_polyhedrons;
    for (int i = 1; i <= number_of_polyhedrons; ++i) {
        string name_of_polyhedron;
        cin >> name_of_polyhedron;
        total_faces += polyhedron_list[name_of_polyhedron];
    }
    cout << total_faces << endl;
    return 0;
}
