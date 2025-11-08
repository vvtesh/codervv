import java.util.ArrayList;
import java.util.List;

public class Subsets {

    List<List<Integer>> results = new ArrayList<>();
    int[] nums;

    public List<List<Integer>> subsets(int[] nums) {
        this.nums = nums;
        solve(0, new ArrayList<>());
        return results;
    }

    public void solve(int idx, List<Integer> curr) {

        System.out.println(curr);
        results.add(new ArrayList<>(curr));

        for(int i=idx; i<nums.length; i++) {
            curr.add(nums[i]);
            solve(i+1, curr);
            curr.remove(curr.size()-1);
        }
    }

    public static void main(String[] args) {

        Subsets subsets = new Subsets();
        List<List<Integer>> results = subsets.subsets(new int[]{1,2,3});
        for(List<Integer> list: results) {
            System.out.println(list);
        }
    }
}
