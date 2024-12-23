const isPalindrome = (val) => {
    val = Number.parseInt(val); // Ensure input is an integer
    let temp = val;
    let rev = 0;
    let rem = 0;

    while (val > 0) {
        rem = val % 10;          // Get the last digit
        rev = rev * 10 + rem;    // Build the reversed number
        val = Math.floor(val / 10); // Remove the last digit
    }

    return temp === rev; // Compare the original number with the reversed number
};

module.exports=isPalindrome;