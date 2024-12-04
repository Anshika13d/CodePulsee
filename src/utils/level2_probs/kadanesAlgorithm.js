import { expect } from 'chai';

const maxSubArrayHandler = (fn) => {
    try {
        const tests = [
            { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expectedSum: 6 },
            { nums: [1], expectedSum: 1 },
            { nums: [5, 4, -1, 7, 8], expectedSum: 23 },
            { nums: [-1, -2, -3, -4], expectedSum: -1 }, // Edge case with all negative numbers
            { nums: [1, 2, 3, 4, 5], expectedSum: 15 }, // Edge case with all positive numbers
        ];

        for (let i = 0; i < tests.length; i++) {
            const { nums, expectedSum } = tests[i];
            const result = fn(nums);
            expect(result).to.equal(expectedSum);
        }
        return true;
    } catch (error) {
        console.log("Error from maxSubArrayHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeMaxSubArrayJS = `function maxSubArray(nums) {
  // Write your code here
};`;

export const maxSubArray = {
    id: "kadanesAlgorithm",
    title: "Maximum Subarray",
    problemStatement: `<p class='mt-3'>
        Given an integer array <code>nums</code>, find the <strong>subarray</strong> with the largest sum, and return its sum.
    </p>
    `,
    examples: [
        {
            id: 0,
            inputText: `nums = [-2,1,-3,4,-1,2,1,-5,4]`,
            outputText: `6`,
            explanation: `The subarray [4,-1,2,1] has the largest sum 6.`,
        },
        {
            id: 1,
            inputText: `nums = [1]`,
            outputText: `1`,
            explanation: `The subarray [1] has the largest sum 1.`,
        },
        {
            id: 2,
            inputText: `nums = [5,4,-1,7,8]`,
            outputText: `23`,
            explanation: `The subarray [5,4,-1,7,8] has the largest sum 23.`,
        },
    ],
    constraints: `<li class='mt-2'><code>1 <= nums.length <= 10^5</code></li>
    <li class='mt-2'><code>-10^4 <= nums[i] <= 10^4</code></li>`,
    starterCode: starterCodeMaxSubArrayJS,
    handlerFunction: maxSubArrayHandler,
    starterFunctionName: "function maxSubArray(",
    order: 1,
};



