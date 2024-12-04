import { expect } from 'chai';

export const removeDuplicatesHandler = (fn) => {
    try {
        const tests = [
            { nums: [1, 1, 2], expectedNums: [1, 2], expectedK: 2 },
            { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedNums: [0, 1, 2, 3, 4], expectedK: 5 },
            { nums: [1, 2, 3, 3, 4, 4, 5], expectedNums: [1, 2, 3, 4, 5], expectedK: 5 },
            { nums: [0, 0, 0, 0, 0], expectedNums: [0], expectedK: 1 },
        ];

        for (let i = 0; i < tests.length; i++) {
            const { nums, expectedNums, expectedK } = tests[i];
            const k = fn(nums);
            expect(k).to.equal(expectedK);
            for (let j = 0; j < k; j++) {
                expect(nums[j]).to.equal(expectedNums[j]);
            }
        }
        return true;
    } catch (error) {
        console.log("Error from removeDuplicatesHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeRemoveDuplicatesJS = `function removeDuplicates(nums) {
  // Write your code here
};`;

export const removeDuplicates = {
    id: "removeDuplicates",
    title: "Remove Duplicates from Sorted Array",
    problemStatement: `<p class='mt-3'>
        Given an integer array <code>nums</code> sorted in non-decreasing order, remove the duplicates in-place such that 
        each unique element appears only once. The relative order of the elements should be kept the same. 
        Then return the number of unique elements in <code>nums</code>.
    </p>
    <p class='mt-3'>
        Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:
    </p>
    <ul>
        <li class='mt-2'>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially.</li>
        <li class='mt-2'>The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
        <li class='mt-2'>Return <code>k</code>.</li>
    </ul>
    `,
    examples: [
        {
            id: 0,
            inputText: `nums = [1,1,2]`,
            outputText: `2, nums = [1,2,_]`,
            explanation: `Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k.`,
        },
        {
            id: 1,
            inputText: `nums = [0,0,1,1,1,2,2,3,3,4]`,
            outputText: `5, nums = [0,1,2,3,4,_,_,_,_,_]`,
            explanation: `Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k.`,
        },
    ],
    constraints: `<li class='mt-2'><code>1 <= nums.length <= 3 * 10^4</code></li>
    <li class='mt-2'><code>-100 <= nums[i] <= 100</code></li>
    <li class='mt-2'><code>nums</code> is sorted in non-decreasing order.</li>`,
    starterCode: starterCodeRemoveDuplicatesJS,
    handlerFunction: removeDuplicatesHandler,
    starterFunctionName: "function removeDuplicates(",
    order: 3,
};
