import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CatalanNumberStrategy {

    public List<String> generateParenthesis(int n) {

        List<String>[] dp = new ArrayList[n+1];
        if (n == 0) {
            return new ArrayList(Arrays.asList(""));
        }

        if (dp[n] != null) {
            return dp[n];
        }

        dp[n] = new ArrayList<>();
        List<String> answer = new ArrayList();

        for (int leftCount = 0; leftCount < n; ++leftCount) {
            //System.out.println(leftCount);
            //System.out.println("Calling generateParanthesis(" + leftCount + ")");
            String ans = n + ": " +  leftCount + "," + (n-1-leftCount);
            System.out.println(ans);
            for (String leftString : generateParenthesis(leftCount)) {
                //System.out.println("   Left string: " + leftString);
                for (String rightString : generateParenthesis(n - 1 - leftCount)) {
                    //System.out.println("     Right string: " + rightString);


                    dp[n].add(ans);
                    answer.add(ans);
                }
            }
        }

        return answer;
    }

    public static void main(String[] args) {

        System.out.println(new CatalanNumberStrategy().generateParenthesis(3));
    }
}
