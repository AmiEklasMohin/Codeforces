import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class EraserOne {
    public static int minOperation(int n, int k, String str) {
        int op = 0;
        for (int i = 0; i < n; ++i) {
            if (str.charAt(i) == 'B') {
                op += 1;
                i = i + k - 1;
            }
        }
        return op;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testCase = Integer.parseInt(br.readLine());
        for (int i = 1; i <= testCase; ++i) {
            int n, k;
            String str;
            String[] input = br.readLine().split(" ");
            n = Integer.parseInt(input[0]);
            k = Integer.parseInt(input[1]);
            str = br.readLine();
            int minOp = minOperation(n, k, str);
            System.out.println(minOp);
        }
    }
}


