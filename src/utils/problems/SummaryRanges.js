import { expect } from 'chai';

// Starter code template
const starterCodeSummaryRanges = `function summaryRanges(nums) {
    // Your code here
}`;

// Handler function for the problem
const handlerSummaryRanges = (fn) => {
    // Test cases
    const testCases = [
        { nums: [0, 1, 2, 4, 5, 7], output: ["0->2", "4->5", "7"] },
        { nums: [0, 2, 3, 4, 6, 8, 9], output: ["0", "2->4", "6", "8->9"] },
        { nums: [], output: [] },
        { nums: [-1], output: ["-1"] },
        { nums: [1, 3], output: ["1", "3"] },
    ];

    // Loop through each test case
    for (const { nums, output } of testCases) {
        const result = fn(nums);
        console.log(`Test case with nums=${JSON.stringify(nums)}:`, { result, expected: output });

        // Assert that the user's output matches the expected output
        expect(result).to.deep.equal(output);
    }
};

// Problem configuration object
export const summaryRanges = {
    id: 'summaryRanges',
    title: 'Summary Ranges',
    problemStatement: `<p class='mt-3'>
                        You are given a sorted unique integer array <code>nums</code>.
                      </p>
                      <p class='mt-3'>
                        A range <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).
                      </p>
                      <p class='mt-3'>
                        Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
                        That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.
                      </p>
                      <p class='mt-3'>
                        Each range <code>[a,b]</code> in the list should be output as:
                      </p>
                      <ul class='list-disc list-inside'>
                        <li>"<code>a->b</code>" if <code>a != b</code></li>
                        <li>"<code>a</code>" if <code>a == b</code></li>
                      </ul>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [0,1,2,4,5,7]",
            outputText: "output = [\"0->2\",\"4->5\",\"7\"]",
            explanation: "The ranges are: [0,2] --> \"0->2\", [4,5] --> \"4->5\", [7,7] --> \"7\""
        },
        {
            id: 2,
            inputText: "nums = [0,2,3,4,6,8,9]",
            outputText: "output = [\"0\",\"2->4\",\"6\",\"8->9\"]",
            explanation: "The ranges are: [0,0] --> \"0\", [2,4] --> \"2->4\", [6,6] --> \"6\", [8,9] --> \"8->9\""
        }
    ],
    constraints: `
                <li class='mt-2'>
                    <code>0 ≤ nums.length ≤ 20</code>
                </li>
                <li class='mt-2'>
                    <code>-2^31 ≤ nums[i] ≤ 2^31 - 1</code>
                </li>
                <li class='mt-2'>
                    <code>All the values of nums are unique.</code>
                </li>
                <li class='mt-2'>
                    <code>nums is sorted in ascending order.</code>
                </li>`,
    handlerFunction: handlerSummaryRanges,
    starterCode: starterCodeSummaryRanges,
    order: 4,
    starterFunctionName: "function summaryRanges(",
};
