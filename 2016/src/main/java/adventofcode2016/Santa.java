package main.java.adventofcode2016;

import java.util.ArrayList;
import java.util.List;

public class Santa {
    public String direction = "north";
    public int x = 0;
    public int y = 0;
    private List<String> visitedCrossings = new ArrayList<String>();
    private List<String> crossingsVisitedMultipleTimes = new ArrayList<String>();
    private int distanceToEasterBunnyHQ = 0;

    public void followInstructions (String instr) {

        String[] arrayOfInstructions = instr.split(", ");

        for (String instruction : arrayOfInstructions) {

            String turn = String.valueOf(instruction.charAt(0));
            int blocks = Integer.parseInt(instruction.substring(1));

            changeDirection(turn);
            walkBlocks(blocks);
        }
    }


    private void changeDirection (String turn) {

        if (turn.equals("L")) {
            if (direction.equals("west")) {
                direction = "south";
            } else if (direction.equals("south")) {
                direction = "east";
            } else if (direction.equals("east")) {
                direction = "north";
            } else if (direction.equals("north")) {
                direction = "west";
            }
        } else if (turn.equals("R")) {
            if (direction.equals("west")) {
                direction = "north";
            } else if (direction.equals("north")) {
                direction = "east";
            } else if (direction.equals("east")) {
                direction = "south";
            } else if (direction.equals("south")) {
                direction = "west";
            }
        }
    }

    private void walkBlocks (int blocks) {
        for (int i = 0; i < blocks; i++) {
            if (direction.equals("west")) {
                x -= 1;
            } else if (direction.equals("north")) {
                y += 1;
            } else if (direction.equals("east")) {
                x += 1;
            } else if (direction.equals("south")) {
                y -= 1;
            }

            String currentPosition = x + "," + y;

            if (visitedCrossings.contains(currentPosition)) {
                if (!crossingsVisitedMultipleTimes.contains(currentPosition)) {
                    crossingsVisitedMultipleTimes.add(currentPosition);
                    if (distanceToEasterBunnyHQ == 0) {
                        distanceToEasterBunnyHQ = getDistanceToEasterBunnyHQ();
                    }
                }
            }
            else {
                visitedCrossings.add(currentPosition);
            }
        }
    }

    public int getDistanceToEasterBunnyHQ () {
        return Math.abs(x) + Math.abs(y);
    }

    public int getRealDistanceToEasterBunnyHQ () {
        return distanceToEasterBunnyHQ;
    }
}
