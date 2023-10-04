#include <iostream>

int main() {
    int n, m;
    std::cin >> n >> m;
    int count = 0, k = 0;
    while (n > 0) {
        count++;
        n -= 1;
        k += 1;
        if (k % m == 0) {
            n += 1;
        }
    }
    std::cout << count << std::endl;
    return 0;
}
