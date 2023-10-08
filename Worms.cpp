#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int numberOfPiles, numberOfWorms[100005];
    int numberOfJuicyWorms, labelOfTheJuicyWorms;
    vector<long long>cumulativeSum;
    cin >> numberOfPiles;
    for (int i = 0; i < numberOfPiles; i++) {
        cin >> numberOfWorms[i];
    }
    cumulativeSum.push_back(numberOfWorms[0]);
    for (int i = 1; i < numberOfPiles; i += 1) {
        cumulativeSum.push_back(cumulativeSum[i - 1] + numberOfWorms[i]);
    }
    cin >> numberOfJuicyWorms;
    for (int i = 1; i <= numberOfJuicyWorms; i += 1) {
        cin >> labelOfTheJuicyWorms;
        int pileNumber = lower_bound(cumulativeSum.begin(),cumulativeSum.end(), labelOfTheJuicyWorms) - cumulativeSum.begin();
        pileNumber += 1;
        cout << pileNumber << endl;
    }
    return 0;
}
