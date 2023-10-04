#include <iostream>
using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;
    int k = max((n - a - b - 1), 0);
    cout << n - a - k << endl;
    return 0;
}
