import { expect } from 'chai';

const starterCodeSearchInsert = `function searchInsert(nums, target) {
    // Your code here
}`;

// checks if user has the correct output/code
const handlerSearchInsert = (fn) => {
    // fn is the callback that user's code is passed into
    try {
        const nums = [
            [1, 3, 5, 6],
            [1, 3, 5, 6],
            [1, 3, 5, 6]
        ];

        const targets = [5, 2, 7];
        const answers = [2, 1, 4];

        // loop all test cases
        for (let i = 0; i < nums.length; i++) {
            // result is output of user's function and is the expected output
            const result = fn(nums[i], targets[i]);
            console.log(`Test case ${i + 1}:`, { result, expected: answers[i] });
            expect(result).to.equal(answers[i]);
        }
        return true;

    } catch (err) {
        console.log("searchInsert handler error: ", err);
        throw new Error(err);
    }
};

export const searchInsert = {
    id: 'searchInsert',
    title: 'Search Insert Position',
    problemStatement: `<p class='mt-3'>
                        Given a sorted array of distinct integers and a target value, return the index if the target is found.
                        If not, return the index where it would be if it were inserted in order.
                      </p>
                      <p class='mt-3'>
                        You must write an algorithm with <code>O(log n)</code> runtime complexity.
                      </p>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [1, 3, 5, 6], target = 5",
            outputText: "output = 2",
            explanation: "5 is found at index 2."
        },
        {
            id: 2,
            inputText: "nums = [1, 3, 5, 6], target = 2",
            outputText: "output = 1",
            explanation: "2 would be inserted at index 1."
        },
        {
            id: 3,
            inputText: "nums = [1, 3, 5, 6], target = 7",
            outputText: "output = 4",
            explanation: "7 would be inserted at index 4."
        }
    ],
    constraints: `
                <li class='mt-2'>
                    <code>1 ≤ nums.length ≤ 10^4</code>
                </li>

                <li class='mt-2'>
                    <code>-10^4 ≤ nums[i] ≤ 10^4</code>
                </li>
                <li class='mt-2'>
                    <code>nums contains distinct values sorted in ascending order.</code>
                </li>
                <li class='mt-2'>
                    <code>-10^4 ≤ target ≤ 10^4</code>
                </li>
            `,
    handlerFunction: handlerSearchInsert,
    starterCode: starterCodeSearchInsert,
    order: 2,
    starterFunctionName: "function searchInsert(",
};
