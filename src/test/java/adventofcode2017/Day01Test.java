package adventofcode2017;

import junit.framework.TestCase;

public class Day01Test extends TestCase {

    public void test1122ShouldBe3() throws Exception {
        String captcha = "1122";
        CaptchaPad captchaPad = new CaptchaPad();

        assertEquals(3, captchaPad.sumOfEqualNumbers(captcha));
    }

}
