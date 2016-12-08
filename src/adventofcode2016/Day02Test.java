package adventofcode2016;

import junit.framework.TestCase;

public class Day02Test extends TestCase{

    private KeyPad keyPad;

    public void setUp() {
        keyPad = new KeyPad();
    }

    public void testStartKeyIsFive() {
        assertEquals(5, keyPad.key);
    }
}
