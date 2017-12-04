package adventofcode2017;

import junit.framework.TestCase;

public class Day01Test extends TestCase {

    private String captcha;
    private CaptchaPad captchaPad;

    protected void setUp() {
        captchaPad = new CaptchaPad();
    }

    public void test1122_shouldReturn3() throws Exception {
        captcha = "1122";
        assertEquals(3, captchaPad.sumOfEqualNumbers(captcha));
    }

    public void test1111_shouldReturn4() throws Exception {
        captcha = "1111";
        assertEquals(4, captchaPad.sumOfEqualNumbers(captcha));
    }

    public void test1234_shouldReturn0() throws Exception {
        captcha = "1234";
        assertEquals(0, captchaPad.sumOfEqualNumbers(captcha));
    }

    public void test91212129_shouldReturn9() throws Exception {
        captcha = "91212129";
        assertEquals(9, captchaPad.sumOfEqualNumbers(captcha));
    }
}
