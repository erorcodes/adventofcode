package adventofcode2016;

import junit.framework.TestCase;

public class Day02Test extends TestCase{

    private KeyPad keyPad;
    private String instr;

    public void setUp() {
        keyPad = new KeyPad();
    }

    public void testStartKeyIsFive() {
        assertEquals(5, keyPad.key);
    }

    public void testOnceUpIsTwo() {
        instr = "U";
        keyPad.pressKey(instr);
        assertEquals(2, keyPad.key);
    }

    public void testTwoTimesUp() {
        instr = "UU";
        keyPad.pressKey(instr);
        assertEquals(2, keyPad.key);
    }

    public void testUpDownLeftLeftRight() {
        instr = "UDLLR";
        keyPad.pressKey(instr);
        assertEquals(5, keyPad.key);
    }

    public void testLeftDownDownDown() {
        instr = "LDDD";
        keyPad.pressKey(instr);
        assertEquals(7, keyPad.key);
    }

    public void testTwoKeys() {
        instr = "U,L";
        keyPad.pressKey(instr);
        assertEquals("21", keyPad.combination);
    }
}