#include <iostream>

int main() {
    long long numberOfStudents, degreeRatio;
    std::cin >> numberOfStudents >> degreeRatio;
    long long maxNumberOfWinners = numberOfStudents / 2;
    long long numberOfDiplomas = maxNumberOfWinners / (degreeRatio + 1);
    long long numberOfCertificates = numberOfDiplomas * degreeRatio;
    long long numberOfLoosers = numberOfStudents - numberOfDiplomas - numberOfCertificates;
    std::cout << numberOfDiplomas << " " << numberOfCertificates << " " << numberOfLoosers << std::endl;
    return 0;
}
