package test.java.adventofcode2016;

import junit.framework.TestCase;

public class Day01Test extends TestCase {

    private Santa santa;
    private String instr;

    public void setUp() {
        santa = new Santa();
    }

    public void testSantaJustLanded() {
        assertEquals("north", santa.direction);
    }

    public void testSantaMovesRightOneBlock() {
        instr = "R1";
        santa.followInstructions(instr);
        assertEquals("east", santa.direction);
        assertEquals(1, santa.getDistanceToEasterBunnyHQ());
    }

    public void testSantaMovesLeftOneBlock() {
        instr = "L1";
        santa.followInstructions(instr);
        assertEquals("west", santa.direction);
        assertEquals(1, santa.getDistanceToEasterBunnyHQ());
    }

    public void testSantaMovesRightThreeBlocks() {
        instr = "R3";
        santa.followInstructions(instr);
        assertEquals("east", santa.direction);
        assertEquals(3, santa.getDistanceToEasterBunnyHQ());
    }

    public void testRightOneBlockThenLeftOneBlock() {
        instr = "R1, L1";
        santa.followInstructions(instr);
        assertEquals("north", santa.direction);
        assertEquals(2, santa.getDistanceToEasterBunnyHQ());
    }

    public void testEndingUpOnAlreadyPassedCrossing() {
        instr = "R2, R1, R1, R1";
        santa.followInstructions(instr);
        assertEquals(1, santa.getRealDistanceToEasterBunnyHQ());
    }

    public void testPassingAlreadyPassedCrossing() {
        instr = "R8, R4, R4, R8";
        santa.followInstructions(instr);
        assertEquals(4, santa.getRealDistanceToEasterBunnyHQ());
    }

/* Tests to get final answers*/

    public void testSantaFindsEasterBunnyHQ() {
        instr = "L5, R1, L5, L1, R5, R1, R1, L4, L1, L3, R2, R4, L4, L1, L1, R2, R4, R3, L1, R4, L4, L5, L4, R4, L5, R1, R5, L2, R1, R3, L2, L4, L4, R1, L192, R5, R1, R4, L5, L4, R5, L1, L1, R48, R5, R5, L2, R4, R4, R1, R3, L1, L4, L5, R1, L4, L2, L5, R5, L2, R74, R4, L1, R188, R5, L4, L2, R5, R2, L4, R4, R3, R3, R2, R1, L3, L2, L5, L5, L2, L1, R1, R5, R4, L3, R5, L1, L3, R4, L1, L3, L2, R1, R3, R2, R5, L3, L1, L1, R5, L4, L5, R5, R2, L5, R2, L1, L5, L3, L5, L5, L1, R1, L4, L3, L1, R2, R5, L1, L3, R4, R5, L4, L1, R5, L1, R5, R5, R5, R2, R1, R2, L5, L5, L5, R4, L5, L4, L4, R5, L2, R1, R5, L1, L5, R4, L3, R4, L2, R3, R3, R3, L2, L2, L2, L1, L4, R3, L4, L2, R2, R5, L1, R2";
        santa.followInstructions(instr);

/* Remove commenting here and run tests to get answers!

        assertEquals(0, santa.getDistanceToEasterBunnyHQ());
        assertEquals(0, santa.getRealDistanceToEasterBunnyHQ());
*/
    }
}
