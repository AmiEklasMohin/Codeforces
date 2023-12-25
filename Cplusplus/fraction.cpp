#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool isCoprime (int a, int b) {
        int gcd = __gcd(a,b);
        return (gcd == 1);
    }
    vector<int> properFraction (int sum) {
        int numerator = sum / 2;
        int denominator = (sum + 1) / 2;
        vector<int> result;
        while (!isCoprime(numerator, denominator)) {
            numerator -= 1;
            denominator += 1;
        }
        result.push_back(numerator);
        result.push_back(denominator);
        return result;
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    #ifndef ONLINE_JUDGE
        freopen("input.txt","r",stdin);
        freopen("output.txt","w",stdout);
    #endif
    Solution ans;
    int given_sum;
    cin >> given_sum;
    vector<int> result = ans.properFraction(given_sum);
    cout<< result[0] << " " <<result[1] << endl;
    return 0;
}
