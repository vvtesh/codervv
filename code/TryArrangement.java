import java.util.*;

public class TryArrangement {

    static String[] words = {"apple", "orange", "mango"};
    static List<String> result = new ArrayList<>();

    public static void backtrack() {

        if (result.size()==3) {
            System.out.println(Arrays.toString(result.toArray()));
            return;
        }
        for(int j=0; j<words.length; j++) {
            if (result.contains(words[j])
                    || (j==1 && result.size() > 0 && result.getLast().equals(words[0]))
            ) {
                continue;
            }
            result.add(words[j]);
            backtrack();
            result.removeLast();
        }
    }

    public static void main(String[] args) {

        backtrack();
    }
}
