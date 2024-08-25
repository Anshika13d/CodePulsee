import { expect } from 'chai';

const starterCodeTwoSum = `function twoSum(nums, target) {
    // Your code here
}`;

// checks if user has the correct output/code
const handlerTwoSum = (fn) => {
    // fn is the callback that user's code is passed into
    try {
        const nums = [
            [2, 7, 11, 15],
            [3, 2, 4],
            [3, 3]
        ];

        const target = [9, 6, 6];
        const answers = [
            [0, 1],
            [1, 2],
            [0, 1]
        ];

        // loop all test cases
        for (let i = 0; i < nums.length; i++) {
            // result is output of user's function and is the expected output
            const result = fn(nums[i], target[i]);
            console.log(`Test case ${i + 1}:`, { result, expected: answers[i] });
            expect(result).to.deep.equal(answers[i]);
        }
        return true;

    } catch (err) {
        console.log("twoSum handler error: ", err);
        throw new Error(err);
    }
};

export const twoSum = {
    id: 'twoSum',
    title: '1. Two Sum',
    problemStatement: `<p class='mt-3'>
                        Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                        <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                      </p>
                      <p class='mt-3'>
                        You may assume that each input would have <strong>exactly one solution</strong>, and you
                        may not use the same element twice.
                      </p>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [2, 11, 15, 7], target = 9",
            outputText: "output = [0, 3]",
            explanation: "The sum of 2 and 7 is 9. Therefore, index 0 and 3 are returned."
        },
        {
            id: 2,
            inputText: "nums = [3, 2, 4], target = 6",
            outputText: "output = [1, 2]",
            explanation: "The sum of 2 and 4 is 6. Therefore, index 1 and 2 are returned."
        }
    ],
    constraints: `
                <li class='mt-2'>
                    <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li class='mt-2'>
                    <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li class='mt-2'>
                    <code>-10 ≤ target ≤ 10</code>
                </li>
                <li class='mt-2 text-sm'>
                    <strong>Only one valid answer exists.</strong>
                </li>
            `,
    handlerFunction: handlerTwoSum,
    starterCode: starterCodeTwoSum,
    order: 1,
    starterFunctionName: "function twoSum(",
};
