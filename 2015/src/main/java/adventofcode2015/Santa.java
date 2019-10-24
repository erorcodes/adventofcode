package main.java.adventofcode2015;

public class Santa {

    public int floor = 0;
    int position;

    public void followInstructions (String instructions) {

        char[] characters = instructions.toCharArray();
        position = 0;

        for (int i = 0; i < characters.length; i++) {

            String comparison = String.valueOf(characters[i]);

            if (comparison.equalsIgnoreCase("(")) {
                floor += 1;
            }
            else if (comparison.equalsIgnoreCase(")")) {
                floor -= 1;
            }

            if (characters.length > 10 && floor == -1) {
                System.out.println(i + 1);
            }
        }
    }
}
