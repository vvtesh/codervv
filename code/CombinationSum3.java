import java.util.ArrayList;
import java.util.List;

public class CombinationSum3 {

    public void backtrack(int remain, int kSize, List<Integer> comb, int startDigit,
                              List<List<Integer>> results) {

        if (remain == 0 && comb.size() == kSize) {
            results.add(new ArrayList<Integer>(comb));
            return;
        }
        if (remain < 0 || comb.size() == kSize) {
            return;
        }

        for (int digit = startDigit; digit <= 9; ++digit) {
            comb.add(digit);
            this.backtrack(remain - digit, kSize, comb, digit + 1, results);
            comb.removeLast();
        }
    }

    public List<List<Integer>> combinationSum(int k, int n) {

        List<List<Integer>> results = new ArrayList<List<Integer>>();
        List<Integer> comb = new ArrayList<Integer>();
        this.backtrack(n, k, comb, 1, results);
        return results;
    }

    public static void main(String[] args) {

        CombinationSum3 combinationSum = new CombinationSum3();
        List<List<Integer>> result = combinationSum.combinationSum(3,9);
        for(List<Integer> list: result) {
            System.out.println(list);
        }
    }
}
