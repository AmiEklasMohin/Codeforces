import java.util.Scanner;

public class Fench {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int k = scanner.nextInt();
        int[] arr = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            arr[i] = scanner.nextInt();
        }
        int minSum = Integer.MAX_VALUE;
        int minIndex = 0;
        int x = 0;
        arr[0] = 0;
        for (int i = 1; i <= n; i++) {
            x = x + arr[i];
            if (i > k) {
                x = x - arr[i - k];
            }
            if (minSum > x && i >= k) {
                minIndex = i - k + 1;
                minSum =  x;
            }
        }
        System.out.println(minIndex);
        scanner.close();
    }
}
