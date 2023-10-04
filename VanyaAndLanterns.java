import java.util.Arrays;
import java.util.Scanner;

public class VanyaAndLanterns {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfLanterns = scanner.nextInt();
        int lengthOfTheStreet = scanner.nextInt();
        int[] lanternsLocation = new int[numberOfLanterns];
        for (int i = 0; i < numberOfLanterns; i++) {
            lanternsLocation[i] = scanner.nextInt();
        }
        Arrays.sort(lanternsLocation);
        double firstLanternRadius = lanternsLocation[0];
        double lastLanternRadius = lengthOfTheStreet - lanternsLocation[numberOfLanterns - 1];
        double minLightRadius = 0;
        for (int i = 1; i < numberOfLanterns; i++) {
            double x = lanternsLocation[i] - lanternsLocation[i - 1];
            x /= 2.0;
            minLightRadius = Math.max(x, minLightRadius);
        }
        minLightRadius = Math.max(minLightRadius, firstLanternRadius);
        minLightRadius = Math.max(minLightRadius, lastLanternRadius);
        System.out.println(minLightRadius);
        scanner.close();
    }
}
