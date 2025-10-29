import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class GraphBuilder {

    public static void main(String[] args) {
        int[][] weightedEdges = new int[][] { { 1, 2, 33 }, { 4, 5, 6 } };
        //sorting 2d array is difficult. Instead, we wills put it in a list and sort the list.
        ArrayList<int[]> edges = buildSortedEdgeList(weightedEdges);
        for(int[] edge: edges) {
            System.out.println(Arrays.toString(edge));
        }

        List<List<Integer>> adj = buildAdjacencyList(4);
        System.out.println("Adjacency List " + adj);

    }

    private static List<List<Integer>> buildAdjacencyList(int numCourses) {
        List<List<Integer>> adj =  new ArrayList<>(numCourses);
        for(int i=0; i<numCourses; i++) {
            adj.add(new ArrayList<>());
        }
        adj.get(0).add(1);
        adj.get(0).add(2);
        adj.get(1).add(3);
        return adj;
    }

    private static ArrayList<int[]> buildSortedEdgeList(int[][] weightedEdges) {
        ArrayList<int[]> edges = new ArrayList<>();
        for(int i = 0; i< weightedEdges.length; i++) {
            edges.add(weightedEdges[i]);
        }
        Collections.sort(edges, (a,b) -> a[2] - b[2] );
        return edges;
    }
}
