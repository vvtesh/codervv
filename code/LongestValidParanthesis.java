import java.util.Stack;

public class LongestValidParanthesis {

    public int longestValidParentheses(String s) {
        int maxans = 0;
        Stack<Integer> stack = new Stack<>();
        push(stack, -1);
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                push(stack, i);
            } else {
                pop(stack);
                if (stack.empty()) {
                    push(stack, i);
                } else {
                    maxans = Math.max(maxans, i - stack.peek());
                }
            }
        }
        return maxans;
    }

    private void push(Stack stack, int i) {
        stack.push(i);
        //System.out.println("Pushing " + i);
        System.out.println(stack);
    }

    private void pop(Stack stack) {
        stack.pop();
        //System.out.println("Popping");
        System.out.println(stack);
    }

    public static void main(String[] args) {
        LongestValidParanthesis longestValidParanthesis = new LongestValidParanthesis();
        //System.out.println(longestValidParanthesis.longestValidParentheses("(()"));
        System.out.println(longestValidParanthesis.longestValidParentheses(")()())"));
        //System.out.println(longestValidParanthesis.longestValidParentheses(""));
        //System.out.println(longestValidParanthesis.longestValidParentheses("()(()"));
    }
}
