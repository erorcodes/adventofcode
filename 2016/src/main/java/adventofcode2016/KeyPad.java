package main.java.adventofcode2016;

public class KeyPad {
    public int key = 5;
    public String combination = "";
    
    //TODO: Add file reader to handle instructions from separate files.
    public void pressKey (String instruction) {
        for (int i = 0; i < instruction.length(); i++) {
            String nextInstruction = String.valueOf(instruction.charAt(i));

            //TODO: Maybe this can be made with a matrix and the instructions will increase or decrease the "coordinates" in the matrix.
            //If the position is [0,0] that means 1, [1,2] means 8 etc...
            if (nextInstruction.equals("U")) {
                switch (key) {
                    case 1:
                    case 4:
                        key = 1;
                        break;
                    case 2:
                    case 5:
                        key = 2;
                        break;
                    case 3:
                    case 6:
                        key = 3;
                        break;
                    case 7:
                        key = 4;
                        break;
                    case 8:
                        key = 5;
                        break;
                    case 9:
                        key = 6;
                        break;
                }
            } else if (nextInstruction.equals("D")) {
                switch (key) {
                    case 1:
                        key = 4;
                        break;
                    case 2:
                        key = 5;
                        break;
                    case 3:
                        key = 6;
                        break;
                    case 4:
                    case 7:
                        key = 7;
                        break;
                    case 5:
                    case 8:
                        key = 8;
                        break;
                    case 6:
                    case 9:
                        key = 9;
                        break;
                }
            } else if (nextInstruction.equals("L")) {
                switch (key) {
                    case 1:
                    case 2:
                        key = 1;
                        break;
                    case 3:
                        key = 2;
                        break;
                    case 4:
                    case 5:
                        key = 4;
                        break;
                    case 6:
                        key = 5;
                        break;
                    case 7:
                    case 8:
                        key = 7;
                        break;
                    case 9:
                        key = 8;
                        break;
                }
            } else if (nextInstruction.equals("R")) {
                switch (key) {
                    case 1:
                        key = 2;
                        break;
                    case 2:
                    case 3:
                        key = 3;
                        break;
                    case 4:
                        key = 5;
                        break;
                    case 5:
                    case 6:
                        key = 6;
                        break;
                    case 7:
                        key = 8;
                        break;
                    case 8:
                    case 9:
                        key = 9;
                        break;
                }
            }
            //TODO: Improve instruction reading to handle new row as sign of new key-instruction.
            if (nextInstruction.equals(",") || i == instruction.length()-1) {
                combination += key;
            }
        }
    }
}
