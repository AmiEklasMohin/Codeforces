import java.util.Scanner;

public class DiplomasAndCertificates {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long numberOfStudents = scanner.nextLong();
        long degreeRatio = scanner.nextLong();
        long maxNumberOfWinners = numberOfStudents / 2;
        long numberOfDiplomas = maxNumberOfWinners / (degreeRatio + 1);
        long numberOfCertificates = numberOfDiplomas * degreeRatio;
        long numberOfLoosers = numberOfStudents - numberOfDiplomas - numberOfCertificates;
        System.out.println(numberOfDiplomas + " " + numberOfCertificates + " " + numberOfLoosers);
        scanner.close();
    }
}
