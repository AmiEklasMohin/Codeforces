#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int numberOfPiles;
    cin >> numberOfPiles;
    vector<int> numberOfWorms(100005);
    int numberOfJuicyWorms, labelOfTheJuicyWorms;
    vector<long long> cumulativeSum;
    for (int i = 0; i < numberOfPiles; i++) {
        cin >> numberOfWorms[i];
    }
    cumulativeSum.push_back((long long) numberOfWorms[0]);
    for (int i = 1; i < numberOfPiles; i += 1) {
        cumulativeSum.push_back(cumulativeSum[i - 1] + numberOfWorms[i]);
    }
    cin >> numberOfJuicyWorms;
    for (int i = 1; i <= numberOfJuicyWorms; i += 1) {
        cin >> labelOfTheJuicyWorms;
        int pileNumber = lower_bound(cumulativeSum.begin(), cumulativeSum.end(), (long long) labelOfTheJuicyWorms) - cumulativeSum.begin();
        if (pileNumber < 0) {
            pileNumber = -pileNumber - 1;
        }
        pileNumber += 1;
        cout << pileNumber << endl;
    }
    return 0;
}
