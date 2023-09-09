#include <iostream>
#include <cmath>
#include <algorithm>
using namespace std;
int main() {
    int n, a, b, k;
    cin >> n >> a >> b;
    k = max((n - a - b - 1), 0);
    cout<<(n - a - k)<<endl;
    return 0;
}