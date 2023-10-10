import java.util.HashMap;
import java.util.Scanner;

public class AntonAndPolyhedrons {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        HashMap<String, Integer> polyhedronsList = new HashMap<>();
        polyhedronsList.put("Tetrahedron", 4);
        polyhedronsList.put("Cube", 6);
        polyhedronsList.put("Octahedron", 8);
        polyhedronsList.put("Dodecahedron", 12);
        polyhedronsList.put("Icosahedron", 20);

        int numberOfPolyhedrons, totalFaces = 0;
        numberOfPolyhedrons = scanner.nextInt();
        for (int i = 1; i <= numberOfPolyhedrons; i += 1) {
            String nameOfPolyhedron = scanner.next();
            totalFaces += polyhedronsList.get(nameOfPolyhedron);
        }
        System.out.println(totalFaces);
        scanner.close();
    }
}
