package adventofcode2017;

import junit.framework.TestCase;

public class Day01Test extends TestCase {

    private String captcha;
    private CaptchaPad captchaPad;

    protected void setUp() {
        captchaPad = new CaptchaPad();
    }

    public void test1122ShouldReturn3() throws Exception {
        captcha = "1122";
        assertEquals(3, captchaPad.sumOfEqualNumbers(captcha));
    }

    public void test1111ShouldReturn4() throws Exception {
        captcha = "1111";
        assertEquals(4, captchaPad.sumOfEqualNumbers(captcha));
    }

    public void test1234ShouldReturn0() throws Exception {
        captcha = "1234";
        assertEquals(0, captchaPad.sumOfEqualNumbers(captcha));
    }

}
