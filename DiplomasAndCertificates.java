import java.util.Scanner;

public class DiplomasAndCertificates {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        long k = sc.nextLong();
        long maxNumberOfWinners = n / 2;
        long numberOfDiplomas = maxNumberOfWinners / (k + 1);
        long numberOfCertificates = numberOfDiplomas * k;
        long numberOfLoosers = n - numberOfDiplomas - numberOfCertificates;
        System.out.println(numberOfDiplomas + " " + numberOfCertificates + " " + (numberOfLoosers));
        sc.close();
    }
}