import java.util.Scanner;
import java.util.HashMap;

public class SameDifference {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sizeOfArray;
        int[] inputArray = new int[200000];
        int testCase = scanner.nextInt();
        for (int i = 1; i <= testCase; i += 1) {
            sizeOfArray = scanner.nextInt();
            HashMap<Integer, Integer> sameValue = new HashMap<>();
            long pairCount = 0;
            for (int j = 0; j < sizeOfArray; j += 1) {
                inputArray[j] = scanner.nextInt();
                inputArray[j] = inputArray[j] - j;
            }
            for (int j = 0; j < sizeOfArray; j += 1) {
                pairCount += (long)(sameValue.getOrDefault(inputArray[j], 0));
                sameValue.put(inputArray[j], sameValue.getOrDefault(inputArray[j], 0) + 1);
            }
            System.out.println(pairCount);
        }
        scanner.close();
    }
}
