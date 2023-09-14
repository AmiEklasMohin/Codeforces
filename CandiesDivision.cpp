#include <iostream>
#include <cmath>

int main() {
    int testCase;
    std::cin >> testCase;
    for (int i = 1; i <= testCase; i++) {
        int n, k;
        std::cin >> n >> k;
        int maximumCandiesGiven = (n / k) * k;
        int x = std::min((n - maximumCandiesGiven), (k / 2));
        maximumCandiesGiven += x;
        std::cout << maximumCandiesGiven << std::endl;
    }
    return 0;
}
