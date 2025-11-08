import java.util.*;

public class CombinationSum {

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(list, new ArrayList<>(), candidates, target, 0);
        return list;
    }

    private void backtrack(List<List<Integer>> answer, List<Integer> tempList, int[] candidates,
                           int remain, int index) {

        if (remain < 0) return;
        if (remain == 0) {
            answer.add(new ArrayList<>(tempList));
            return;
        }

        for (int i = index; i < candidates.length; i++ ) {

            if (remain < candidates[i]) break;
            if (i > index && candidates[i] == candidates[i - 1]) continue;

            tempList.add(candidates[i]);
            backtrack(answer, tempList, candidates, remain - candidates[i], i + 1);
            tempList.remove(tempList.size() - 1);
        }
    }

    public static void main(String[] args) {
        CombinationSum combinationSum = new CombinationSum();
        int[] candidates = {10,1,2,7,6,1,5};
        int target = 8;
        List<List<Integer>> result = combinationSum.combinationSum2(candidates, target);
        for(List<Integer> list: result) {
            System.out.println(list);
        }
    }
}
