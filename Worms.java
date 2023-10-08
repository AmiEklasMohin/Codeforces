import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class Worms {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int numberOfPiles = input.nextInt();
        int[] numberOfWorms = new int[100005];
        int numberOfJuicyWorms, labelOfTheJuicyWorms;
        ArrayList<Long> cumulativeSum = new ArrayList<Long>();
        for (int i = 0; i < numberOfPiles; i++) {
            numberOfWorms[i] = input.nextInt();
        }
        cumulativeSum.add((long) numberOfWorms[0]);
        for (int i = 1; i < numberOfPiles; i += 1) {
            cumulativeSum.add(cumulativeSum.get(i - 1) + numberOfWorms[i]);
        }
        numberOfJuicyWorms = input.nextInt();
        for (int i = 1; i <= numberOfJuicyWorms; i += 1) {
            labelOfTheJuicyWorms = input.nextInt();
            int pileNumber = Collections.binarySearch(cumulativeSum, (long) labelOfTheJuicyWorms);
            if (pileNumber < 0) {
                pileNumber = -pileNumber - 1;
            }
            pileNumber += 1;
            System.out.println(pileNumber);
        }
        input.close();
    }
}
