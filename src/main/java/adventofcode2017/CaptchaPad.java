package adventofcode2017;

public class CaptchaPad {

    public int sumOfEqualNumbers(String captcha) {
        int sum = 0;
        for (int i = 0; i < captcha.length(); i++) {
            int firstNumber = Integer.parseInt(String.valueOf(captcha.charAt(i)));
            if (i == captcha.length() - 1) {
                if (firstNumber == Integer.parseInt(String.valueOf(captcha.charAt(0)))){
                    sum += firstNumber;
                }
                break;
            }
            int secondNumber = Integer.parseInt(String.valueOf(captcha.charAt(i + 1)));

            if (firstNumber == secondNumber) {
                sum += firstNumber;
            }
        }
        return sum;
    }
}
