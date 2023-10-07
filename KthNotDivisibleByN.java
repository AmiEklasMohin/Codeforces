import java.util.Scanner;

public class KthNotDivisibleByN {
    public static long findKthInteger(long n, long k) {
        long kthPositiveInteger = (n * k - 1) / (n - 1);
        return kthPositiveInteger;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int testCase = scanner.nextInt();
        for (int i = 1; i <= testCase; i += 1) {
            long n = scanner.nextLong();
            long k = scanner.nextLong();
            long kthPositiveInteger = findKthInteger(n, k);
            System.out.println(kthPositiveInteger);
        }
        scanner.close();
    }
}
