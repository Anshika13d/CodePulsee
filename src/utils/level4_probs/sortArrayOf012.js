import { expect } from 'chai';

export const sortColorsHandler = (fn) => {
    try {
        const tests = [
            { nums: [2, 0, 2, 1, 1, 0], expected: [0, 0, 1, 1, 2, 2] },
            { nums: [2, 0, 1], expected: [0, 1, 2] },
            { nums: [0, 0, 0], expected: [0, 0, 0] }, // Edge case with all elements the same
            { nums: [2, 1, 0], expected: [0, 1, 2] }, // Reverse order
            { nums: [1, 1, 1], expected: [1, 1, 1] }, // Edge case with all elements the same
        ];

        for (let i = 0; i < tests.length; i++) {
            const { nums, expected } = tests[i];
            fn(nums);
            expect(nums).to.deep.equal(expected);
        }
        return true;
    } catch (error) {
        console.log("Error from sortColorsHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeSortColorsJS = `function sortColors(nums) {
  // Write your code here
};`;

export const sortColors = {
    id: "sortArrayOf012",
    title: "Sort an array of 0's, 1's and 2's",
    problemStatement: `<p class='mt-3'>
        Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
    </p>
    <p class='mt-3'>
        We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.
    </p>
    <p class='mt-3'>
        You must solve this problem without using the library's sort function.
    </p>
    `,
    examples: [
        {
            id: 0,
            inputText: `nums = [2,0,2,1,1,0]`,
            outputText: `[0,0,1,1,2,2]`,
        },
        {
            id: 1,
            inputText: `nums = [2,0,1]`,
            outputText: `[0,1,2]`,
        },
    ],
    constraints: `<li class='mt-2'><code>n == nums.length</code></li>
    <li class='mt-2'><code>1 <= n <= 300</code></li>
    <li class='mt-2'><code>nums[i]</code> is either <code>0</code>, <code>1</code>, or <code>2</code>.</li>`,
    starterCode: starterCodeSortColorsJS,
    handlerFunction: sortColorsHandler,
    starterFunctionName: "function sortColors(",
    order: 5,
};
