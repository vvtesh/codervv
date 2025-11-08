import java.util.Collections;
import java.util.PriorityQueue;

public class PriorityQueueBasics {

        public static void main(String[] args) {

            PriorityQueue<Integer> minHeap = new PriorityQueue<>((a,b)->a-b);

            // Adding elements
            minHeap.offer(30);
            minHeap.offer(10);
            minHeap.offer(20);
            minHeap.offer(5);

            // Note: Output is not guaranteed to be sorted
            System.out.println("Initial Min-Heap: " + minHeap);

            // Retrieving and removing elements (The smallest element comes out first)
            System.out.println("Polling elements from Min-Heap:");
            while (!minHeap.isEmpty()) {
                System.out.println("Polled: " + minHeap.poll() + " | Queue state: " + minHeap);
            }

            System.out.println("\n-----------------------------------\n");

            System.out.println("--- 2. Max-Heap (Custom Ordering) ---");

            // Option A: Using Collections.reverseOrder()
            PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b)->b-a);

            // Adding elements
            maxHeap.offer(15);
            maxHeap.offer(45);
            maxHeap.offer(25);
            maxHeap.offer(55);

            System.out.println("Initial Max-Heap: " + maxHeap);

            // Retrieving and removing elements (The largest element comes out first)
            System.out.println("Polling elements from Max-Heap:");
            while (!maxHeap.isEmpty()) {
                System.out.println("Polled: " + maxHeap.poll() + " | Queue state: " + maxHeap);
            }

            System.out.println("\n-----------------------------------\n");
        }
}
