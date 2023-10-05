#include <iostream>
#include <cmath>

int minimumSumOne(int n, int m, int a, int b) {
    int minimumRubles = a * n;
    return minimumRubles;
}

int minimumSumTwo(int n, int m, int a, int b) {
    int k = n / m;
    int minimumRubles = k * b;
    int x = (n - (k * m)) * a;
    x = std::min(x, b);
    minimumRubles += x;
    return minimumRubles;
}

int main() {
    int n, m, a, b;
    std::cin >> n >> m >> a >> b;
    int minimumRubles = minimumSumOne(n, m, a, b);
    minimumRubles = std::min(minimumSumTwo(n, m, a, b), minimumRubles);
    std::cout << minimumRubles << std::endl;
    return 0;
}
