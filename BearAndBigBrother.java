import java.util.Scanner;

public class BearAndBigBrother {
    public static int countYears(int weightOfLimak, int weightOfBob) {
        int requiredYears = 0;
        while (weightOfLimak <= weightOfBob) {
            weightOfLimak = weightOfLimak * 3;
            weightOfBob = weightOfBob * 2;
            requiredYears += 1;
        }
        return requiredYears;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int weightOfLimak, weightOfBob, requiredYears;
        weightOfLimak = scanner.nextInt();
        weightOfBob = scanner.nextInt();
        requiredYears = countYears(weightOfLimak, weightOfBob);
        System.out.println(requiredYears);
        scanner.close();
    }
}
