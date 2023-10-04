#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main() {
    int numberOfLanterns, lengthOfTheStreet;
    cin >> numberOfLanterns >> lengthOfTheStreet;
    vector<int> lanternsLocation(numberOfLanterns);
    for (int i = 0; i < numberOfLanterns; i++) {
        cin >> lanternsLocation[i];
    }
    sort(lanternsLocation.begin(), lanternsLocation.end());
    double firstLanternRadius = lanternsLocation[0];
    double lastLanternRadius = lengthOfTheStreet - lanternsLocation[numberOfLanterns - 1];
    double minLightRadius = 0;
    for (int i = 1; i < numberOfLanterns; i++) {
        double x = lanternsLocation[i] - lanternsLocation[i - 1];
        x /= 2.0;
        minLightRadius = max(x, minLightRadius);
    }
    minLightRadius = max(minLightRadius, firstLanternRadius);
    minLightRadius = max(minLightRadius, lastLanternRadius);
    cout << minLightRadius << endl;
    return 0;
}
