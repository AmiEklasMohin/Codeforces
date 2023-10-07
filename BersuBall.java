import java.util.Scanner;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Collections;

public class BersuBall {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfBoys, numberOfGirls, maxPairs, in;
        ArrayList<Integer> boysDancingSkill = new ArrayList<>();
        HashMap<Integer, Integer> girlsDancingSkill = new HashMap<>();
        maxPairs = 0;
        numberOfBoys = scanner.nextInt();
        for (int i = 0; i < numberOfBoys; i += 1) {
            in = scanner.nextInt();
            boysDancingSkill.add(in);
        }
        numberOfGirls = scanner.nextInt();
        for (int i = 0; i < numberOfGirls; i += 1) {
            in = scanner.nextInt();
            if (girlsDancingSkill.containsKey(in)) {
                girlsDancingSkill.put(in, girlsDancingSkill.get(in) + 1);
            } else {
                girlsDancingSkill.put(in, 1);
            }
        }
        Collections.sort(boysDancingSkill);
        for (int i = 0; i < numberOfBoys; i += 1) {
            if (girlsDancingSkill.containsKey(boysDancingSkill.get(i) - 1) && girlsDancingSkill.get(boysDancingSkill.get(i) - 1) > 0) {
                maxPairs += 1;
                girlsDancingSkill.put(boysDancingSkill.get(i) - 1, girlsDancingSkill.get(boysDancingSkill.get(i) - 1) - 1);
            } else if (girlsDancingSkill.containsKey(boysDancingSkill.get(i)) && girlsDancingSkill.get(boysDancingSkill.get(i)) > 0) {
                maxPairs += 1;
                girlsDancingSkill.put(boysDancingSkill.get(i), girlsDancingSkill.get(boysDancingSkill.get(i)) - 1);
            } else if (girlsDancingSkill.containsKey(boysDancingSkill.get(i) + 1) && girlsDancingSkill.get(boysDancingSkill.get(i) + 1) > 0) {
                maxPairs += 1;
                girlsDancingSkill.put(boysDancingSkill.get(i) + 1, girlsDancingSkill.get(boysDancingSkill.get(i) + 1) - 1);
            }
        }
        System.out.println(maxPairs);
        scanner.close();
    }
}
