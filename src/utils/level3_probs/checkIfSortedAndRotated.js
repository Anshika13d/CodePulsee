import { expect } from 'chai';

export const checkIfSortedAndRotatedHandler = (fn) => {
    try {
        const tests = [
            [3, 4, 5, 1, 2],
            [2, 1, 3, 4],
            [1, 2, 3],
            [1, 3, 2],
            [4, 5, 6, 7, 1, 2, 3],
        ];
        const answers = [true, false, true, false, true];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            expect(result).to.equal(answers[i]);
        }
        return true;
    } catch (error) {
        console.log("Error from checkIfSortedAndRotatedHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeCheckIfSortedAndRotatedJS = `function checkIfSortedAndRotated(nums) {
  // Write your code here
};`;

export const checkIfSortedAndRotated = {
    id: "checkIfSortedAndRotated",
    title: "Check if Array Is Sorted and Rotated",
    problemStatement: `<p class='mt-3'>
        Given an array <code>nums</code>, return <code>true</code> if the array was originally sorted in non-decreasing order, 
        then rotated some number of positions (including zero). Otherwise, return <code>false</code>.
    </p>
    <p class='mt-3'>
        There may be duplicates in the original array.
    </p>
    `,
    examples: [
        {
            id: 0,
            inputText: `nums = [3,4,5,1,2]`,
            outputText: `true`,
            explanation: `[1,2,3,4,5] is the original sorted array. You can rotate the array by x = 3 positions to get [3,4,5,1,2].`,
        },
        {
            id: 1,
            inputText: `nums = [2,1,3,4]`,
            outputText: `false`,
            explanation: `There is no sorted array that can be rotated to match [2,1,3,4].`,
        },
        {
            id: 2,
            inputText: `nums = [1,2,3]`,
            outputText: `true`,
            explanation: `[1,2,3] is the original sorted array and no rotation is needed.`,
        },
    ],
    constraints: `<li class='mt-2'><code>1 <= nums.length <= 100</code></li>
    <li class='mt-2'><code>1 <= nums[i] <= 100</code></li>`,
    starterCode: starterCodeCheckIfSortedAndRotatedJS,
    handlerFunction: checkIfSortedAndRotatedHandler,
    starterFunctionName: "function checkIfSortedAndRotated(",
    order: 2,
};
