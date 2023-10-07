#include <iostream>
using namespace std;

long long findKthInteger(long long  n, long long k) {
    long long kthPositiveInteger = (n * k - 1) / (n - 1);
    return kthPositiveInteger;
}

int main() {
    int testCase;
    cin >> testCase;
    for (int i = 1; i <= testCase; i += 1) {
        long long n, k;
        cin >> n >> k;
        long long kthPositiveInteger = findKthInteger(n, k);
        cout << kthPositiveInteger << endl;
    }
    return 0;
}
