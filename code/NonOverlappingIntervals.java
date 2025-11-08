import java.util.Arrays;
import java.util.Comparator;

public class NonOverlappingIntervals {

        public int eraseOverlapIntervals(int[][] intervals) {

            //This is the key step.
            Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));

            int ans = 0;
            int prevEnd = Integer.MIN_VALUE;

            for (int i = 0; i < intervals.length; i++) {
                int start = intervals[i][0];
                int end = intervals[i][1];

                if (start >= prevEnd) {
                    prevEnd = end;
                } else {
                    ans++;
                }
            }

            return ans;
        }

    public static void main(String[] args) {
        NonOverlappingIntervals obj = new NonOverlappingIntervals();
        int[][] intervals = {{1,2},{2,3},{3,4},{1,3}};
        obj.eraseOverlapIntervals(intervals);
        System.out.println(obj.eraseOverlapIntervals(intervals));
    }
}
