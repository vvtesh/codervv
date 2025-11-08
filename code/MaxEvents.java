import java.util.Arrays;
import java.util.PriorityQueue;

public class MaxEvents {

    public int maxEvents(int[][] events) {
        int n = events.length;

        //ending time of last event.
        int maxDay = 0;
        for (int[] event : events) {
            maxDay = Math.max(maxDay, event[1]);
        }

        //the heap contains all meetings available to attend on day i or earlier.
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        Arrays.sort(events, (a, b) -> a[0] - b[0]);
        System.out.println("Sorted by start time: " + Arrays.deepToString(events));
        int ans = 0;

        //for each day
        for (int i = 1, j = 0; i <= maxDay; i++) {
            //add end times of events that have started for day i
            while (j < n && events[j][0] <= i) {
                pq.offer(events[j][1]);
                j++;
            }
            //remove if end times are already over.
            while (!pq.isEmpty() && pq.peek() < i) {
                pq.poll();
            }
            if (!pq.isEmpty()) {
                //We have events that started before and ends after today.
                pq.poll();
                //Top item has the event that ends first.
                ans++;
            }
        }

        return ans;
    }

    public int[][] eventsRunningOnDay(int[][] events, int day) {

        Arrays.sort(events, (a,b)->a[0]-b[0]);
        System.out.println(Arrays.deepToString(events));
        PriorityQueue<int[]> endTimesQueue = new PriorityQueue<int[]>((a,b)->a[1]-b[1]);
        for(int i=0; i<events.length; i++) {
            int[] event = events[i];
            if (event[0] <= day) {
                endTimesQueue.offer(event);
            } else {
                break;
            }
        }
        while(!endTimesQueue.isEmpty() && endTimesQueue.peek()[1] < day) {
            endTimesQueue.poll();
        }
        int[][] ans = new int[endTimesQueue.size()][2];
        while(!endTimesQueue.isEmpty()) {
            ans[endTimesQueue.size()-1] = (int[])endTimesQueue.poll();
        }
        return ans;
    }

    public static void main(String[] args) {
        MaxEvents maxEvents = new MaxEvents();
        int[][] events = {{1,2},{2,3},{3,4}};
        int ans = maxEvents.maxEvents(events);
        System.out.println(ans);
        System.out.println(Arrays.deepToString(maxEvents.eventsRunningOnDay(events, 3)));
    }
}
