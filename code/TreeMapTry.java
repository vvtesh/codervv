import java.util.Comparator;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;

class Solution {

    public static void main(String[] args) {

        TreeMap<Integer,Integer> map = new TreeMap<>();
        insertIntoMap(map);
        printEntries(map);

        tryFloorKey(3, map);
        tryCeilingKey(3, map);

        System.out.println("(4,5) overlaps? = " + hasOverlappingEntry(map, 4, 5, false));
        System.out.println("(6,7) overlaps? = " + hasOverlappingEntry(map, 6, 7, false));
        System.out.println("(50,55) overlaps? = " + hasOverlappingEntry(map, 50, 55, false));

        System.out.println("Use reverse order map.");

        map = new TreeMap<>(Comparator.reverseOrder());
        insertIntoMap(map);
        printEntries(map);

        tryFloorKey(3, map);
        tryCeilingKey(3, map);

        System.out.println("(4,5) overlaps? = " + hasOverlappingEntry(map, 4, 5, true));
        System.out.println("(6,7) overlaps? = " + hasOverlappingEntry(map, 6, 7, true));
        System.out.println("(50,55) overlaps? = " + hasOverlappingEntry(map, 50, 55, true));
    }

    private static boolean hasOverlappingEntry(TreeMap<Integer, Integer> map, int x, int y, boolean isReversed) {
        return  !isReversed? map.floorKey(y) != null && map.get(map.floorKey(y)) >= x :
                map.ceilingKey(y) != null && map.get(map.ceilingKey(y)) >= x;
    }

    private static void tryCeilingKey(int keyToFind, TreeMap<Integer, Integer> map) {
        int key = map.ceilingKey(keyToFind);
        System.out.println("Ceiling Key of " + keyToFind + " = " + key);
    }

    private static void tryFloorKey(int keyToFind, TreeMap<Integer, Integer> map) {
        int key = map.floorKey(keyToFind);
        System.out.println("Floor Key of " + keyToFind + " = " + key);
    }

    private static void printEntries(TreeMap<Integer, Integer> map) {
        System.out.println("Map entries:");
        Iterator iter = map.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry)iter.next();
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }

    private static void insertIntoMap(TreeMap<Integer, Integer> map) {
        map.put(10,20);
        map.put(1,5);
        map.put(30,100);
    }
}