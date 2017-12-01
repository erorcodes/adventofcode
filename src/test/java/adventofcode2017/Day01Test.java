package adventofcode2017;

import junit.framework.TestCase;

public class Day01Test extends TestCase {

    public void test1122ShouldReturn3() throws Exception {
        String captcha = "1122";
        CaptchaPad captchaPad = new CaptchaPad();

        assertEquals(3, captchaPad.sumOfEqualNumbers(captcha));
    }

    public void test1111ShouldReturn4() throws Exception {
        String captcha = "1111";
        CaptchaPad captchaPad = new CaptchaPad();

        assertEquals(4, captchaPad.sumOfEqualNumbers(captcha));
    }

}
