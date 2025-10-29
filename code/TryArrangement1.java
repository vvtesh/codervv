import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TryArrangement1 {

    static String[] words = {"apple", "orange", "mango"};
    static List<String> result = new ArrayList<>();

    public static void backtrack() {

        if (result.size()==3) {
            System.out.println(Arrays.toString(result.toArray()));
            return;
        }
        for(int j=0; j<words.length; j++) {
            result.add(words[j]);
            backtrack();
            result.removeLast();
        }
    }

    public static void main(String[] args) {

        backtrack();
    }
}
