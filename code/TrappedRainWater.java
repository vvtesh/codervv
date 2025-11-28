import java.util.Stack;

public class TrappedRainWater {

    public int trap(int[] height) {
        int ans = 0;
        int right = 0;

        Stack<Integer> st = new Stack<Integer>();
        while (right < height.length) {
            //System.out.println("Stack is " + print(st, height) + ". Am at " + height[right]);
            while (!st.isEmpty() && height[right] > height[st.peek()]) {
                int middle = st.pop(); //Key question: when to pop?
                //A bigger right makes the middle to be popped. If no left available, we are done.
                //System.out.println("    Popped. Stack is " + print(st, height));
                if (st.isEmpty()) break;
                int left = st.peek();
                int trapped = calcTrapped(height, left, middle, right);
                ans += trapped;
            }
            st.push(right++);
        }
        return ans;
    }

    private String print(Stack<Integer> st, int[] height) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (Integer integer : st) {
            sb.append(height[integer]);
            sb.append(" ");
        }
        if (sb.length() > 1) sb.deleteCharAt(sb.length()-1);
        sb.append("]");
        return sb.toString();
    }

    private int calcTrapped(int[] height, int left, int base, int right) {

        int distance = right - left - 1;
        int bounded_height =
                Math.min(height[left], height[right]) - height[base];
        int trapped = distance * bounded_height;
        System.out.println("[" + height[left] + "," + height[base] + "," + height[right] + "] = " + trapped);
        return trapped;
    }

    /**
     * Calculate [2,1,9], [3,1,9], [4,1,9].
     * @param args
     */
    public static void main(String[] args) {

        TrappedRainWater trappedRainWater = new TrappedRainWater();
        int ans = trappedRainWater.trap(new int[] {0,1,0,2,1,0,1,3,2,1,2,1});
        //A simple example to understand.
        //int ans = trappedRainWater.trap(new int[] {8,7,6,5,4,3,2,1,9});
        System.out.println(ans);
    }

    /**
     * How do we approach [0,1,0,2,1,0,1,3,2,1,2,1] ?
     * [left,middle,right] = vol of water trapped
     * [1,0,2] = 1
     * [1,0,1] = 1
     * [1,1,3] = 0
     * [2,1,3] = 3
     * [2,1,2] = 1
     * 6
     *
     * Explanation: Try to make a convex.
     * [0 1] right found. middle found. no left.
     * [1 0 2] all found.
     * [1 2] no left.
     * [2 1 0 1] 101 found. [2 1 1]
     * [2 1 1 3] 113 found. 21_3 found.
     * [2 3] no left.
     * [3 2 1 2] 212 found.
     * [3 2 2 1] done.
     */

    /**
     * How do we approach [8,7,6,5,4,3,2,1,9] ?
     * [2,1,9] = 1
     * [3,2,9] = 2
     * [4,3,9] = 3
     * [5,4,9] = 4
     * [6,5,9] = 5
     * [7,6,9] = 6
     * [8,7,9] = 7
     * 28
     */
}
