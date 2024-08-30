import { expect } from 'chai';

// Starter code template
const starterCodeFirstBadVersion = `function firstBadVersion(n) {
    // Your code here
}`;

// Handler function for the problem
const handlerFirstBadVersion = (fn, isBadVersion) => {
    // Mock data: array of versions and the first bad version
    const testCases = [
        { n: 5, bad: 4 },
        { n: 1, bad: 1 },
        { n: 10, bad: 7 },
    ];

    // Loop through each test case
    for (const { n, bad } of testCases) {
        // Mock the isBadVersion API
        const isBadVersionMock = (version) => version >= bad;

        // Execute the user's function with the mock API
        const result = fn(n, isBadVersionMock);
        console.log(`Test case with n=${n} and bad=${bad}:`, { result, expected: bad });

        // Assert that the user's output matches the expected output
        expect(result).to.equal(bad);
    }
};

// Problem configuration object
export const firstBadVersion = {
    id: 'firstBadVersion',
    title: 'First Bad Version',
    problemStatement: `<p class='mt-3'>
                        You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check.
                        Since each version is developed based on the previous version, all the versions after a bad version are also bad.
                      </p>
                      <p class='mt-3'>
                        Suppose you have <code>n</code> versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
                        You are given an API <code>bool isBadVersion(version)</code> which returns whether version is bad. Implement a function to find the first bad version.
                      </p>
                      <p class='mt-3'>
                        You should minimize the number of calls to the API.
                      </p>`,
    examples: [
        {
            id: 1,
            inputText: "n = 5, bad = 4",
            outputText: "output = 4",
            explanation: "Version 4 is the first bad version because versions 4 and later are bad."
        },
        {
            id: 2,
            inputText: "n = 1, bad = 1",
            outputText: "output = 1",
            explanation: "Version 1 is the first and only bad version."
        }
    ],
    constraints: `
                <li class='mt-2'>
                    <code>1 ≤ bad ≤ n ≤ 2^31 - 1</code>
                </li>`,
    handlerFunction: handlerFirstBadVersion,
    starterCode: starterCodeFirstBadVersion,
    order: 3,
    starterFunctionName: "function firstBadVersion(",
};
