import java.util.Arrays;

public class PassByReferenceTry {

    public static void main(String[] args) {
        int[][] weightedEdges = new int[][] { { 1, 2, 3 }, { 4, 5, 6 } };
        init(weightedEdges);
        print(weightedEdges);
        update(weightedEdges);
        print(weightedEdges);
        weightedEdges = new int[][] { { 1, 2, 3 }, { 4, 5, 6 } };
        print(weightedEdges);
    }

    private static void update(int[][] weightedEdges) {
        //will not update.
        weightedEdges = new int[][] { { 1, 2, 3 }, { 4, 5, 6 } };
    }

    private static void print(int[][] weightedEdges) {
        System.out.println(Arrays.deepToString(weightedEdges));
    }

    public static void init(int[][] weightedEdges) {

        weightedEdges[0] = new int[] { 11, 2, 3 };
        weightedEdges[1] = new int[] { 41, 5, 6 };
    }
}
