import java.util.Scanner;
import java.util.Arrays;
import java.lang.Math;

public class HonestCoach {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCase = sc.nextInt();
        int[] inputArray = new int[50];
        for (int i = 1; i <= testCase; i++) {
            int sizeOfArray = sc.nextInt();
            for (int x = 0; x < sizeOfArray; x++) {
                inputArray[x] = sc.nextInt();
            }
            int minDifference = Integer.MAX_VALUE;
            Arrays.sort(inputArray, 0, sizeOfArray);
            for (int x = 1; x < sizeOfArray; x++) {
                minDifference = Math.min((inputArray[x] - inputArray[x - 1]), minDifference);
            }
            System.out.println(minDifference);
        }
        sc.close();
    }
}