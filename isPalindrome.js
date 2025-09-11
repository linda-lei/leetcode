// https://www.educative.io/interview-prep/coding/valid-palindrome
function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {  // isAlphaNum check
            left++;
        }
        
        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) { // isAlphaNum check
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            // write your code here
            return false;
        }
        
        left++;
        right--;
    }

    return true;
}

export { isPalindrome };
