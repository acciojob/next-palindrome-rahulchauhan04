function nextPalindrome(num) {
  // Helper function to check if a number is a palindrome
  function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
  }

  // Start looking for the next palindrome after the given number
  let nextNum = num + 1;
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }
  
  return nextNum;
}

// This part would be outside of the function in your actual code,
// since prompt and alert can't be run in this environment.
const input = parseInt(prompt("Enter a number to find the next palindrome."));
alert(nextPalindrome(input));
