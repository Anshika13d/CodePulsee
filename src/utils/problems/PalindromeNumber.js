import { expect } from 'chai';

const starterCodePalindrome = `function isPalindrome(x) {
    // Your code here
}`;

// checks if user has the correct output/code
const handlerPalindrome = (fn) => {
    // fn is the callback that user's code is passed into
    try {
        const nums = [121, -121, 10];
        const answers = [true, false, false];

        // loop all test cases
        for (let i = 0; i < nums.length; i++) {
            // result is output of user's function and is the expected output
            const result = fn(nums[i]);
            console.log(`Test case ${i + 1}:`, { result, expected: answers[i] });
            expect(result).to.deep.equal(answers[i]);
        }
        return true;

    } catch (err) {
        console.log("isPalindrome handler error: ", err);
        throw new Error(err);
    }
};

export const palindromeNumber = {
    id: 'palindromeNumber',
    title: 'Palindrome Number',
    problemStatement: `<p class='mt-3'>
                        Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome,
                        and <code>false</code> otherwise.
                      </p>
                      <p class='mt-3'>
                        A palindrome is a number that reads the same forward as backward.
                      </p>`,
    examples: [
        {
            id: 1,
            inputText: "x = 121",
            outputText: "output = true",
            explanation: "121 reads as 121 from left to right and from right to left, so it is a palindrome."
        },
        {
            id: 2,
            inputText: "x = -121",
            outputText: "output = false",
            explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
        },
        {
            id: 3,
            inputText: "x = 10",
            outputText: "output = false",
            explanation: "Reads 01 from right to left. Therefore it is not a palindrome."
        }
    ],
    constraints: `
                <li class='mt-2'>
                    <code>-2^31 ≤ x ≤ 2^31 - 1</code>
                </li>
                <li class='mt-2'>
                    <strong>Follow-up:</strong> Could you solve it without converting the integer to a string?
                </li>
            `,
    handlerFunction: handlerPalindrome,
    starterCode: starterCodePalindrome,
    order: 2,
    starterFunctionName: "function isPalindrome(",
};
