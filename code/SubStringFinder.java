import java.util.ArrayList;
import java.util.List;

public class SubStringFinder {

    public static List<String> find(String s) {

        List<String> substrings = new ArrayList<>();

        int n = s.length();
        for(int i=0; i<n; i++) {
            for (int j = i+1; j<=n; j++) {
                substrings.add(s.substring(i,j));
            }
        }

        return substrings;
    }


    public static void main(String[] args) {

        String s = "hello";

        String commaSeparated = String.join(", ", find(s));

        System.out.println(commaSeparated);
        System.out.println(s.substring(2,5)); //llo
    }
}
