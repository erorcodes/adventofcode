package main.java.adventofcode2017;

class CaptchaPad {

    private String captcha;

    int sumOfEqualNumbers(String captcha) {
        int sum = 0;
        this.captcha = captcha;

        for (int i = 0; i < captcha.length(); i++) {
            int thisNumber = numberAtPosition(i);
            if (i == captcha.length() - 1) {
                if (thisNumber == numberAtPosition(0)){
                    sum += thisNumber;
                }
                break;
            }
            int nextNumber = numberAtPosition(i + 1);

            if (thisNumber == nextNumber) {
                sum += thisNumber;
            }
        }
        return sum;
    }

    private int numberAtPosition(int position) {
        return Integer.parseInt(String.valueOf(captcha.charAt(position)));
    }
}
