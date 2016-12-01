package adventofcode2016;

class Santa {
    public String direction = "north";
    public int x = 0;
    public int y = 0;

    public void followInstructions (String instr) {

        char[] charInstructions = instr.toCharArray();
        String turn = String.valueOf(charInstructions[0]);
        int blocks = Character.getNumericValue(charInstructions[1]);

/*
        System.out.println(instr);
        System.out.println(charInstructions);
        System.out.println(turn);
        System.out.println(blocks);
*/

        changeDirection(turn);
        walk(blocks);

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

    private void walk (int blocks) {
        if (direction.equals("west")) {
            x -= blocks;
        } else if (direction.equals("north")) {
            y += blocks;
        } else if (direction.equals("east")) {
            x += blocks;
        } else if (direction.equals("south")) {
            y -= blocks;
        }
    }

    public int getDistance () {
        return Math.abs(x) + Math.abs(y);
    }
}
