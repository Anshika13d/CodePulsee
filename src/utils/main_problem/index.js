import { maxSubArray } from "../level2_probs/kadanesAlgorithm";
import { checkIfSortedAndRotated } from "../level3_probs/checkIfSortedAndRotated";
import { sortColors } from "../level4_probs/sortArrayOf012";
import { removeDuplicates } from "../level5_probs/removeDuplicatesFromSortedArray";
import { twoSum } from "../problems/twoSum";
import { searchInsert } from "../problems/searchInsert";
import { summaryRanges } from "../problems/SummaryRanges";
import { firstBadVersion } from "../problems/FirstBadVersion";
import { palindromeNumber } from "../problems/PalindromeNumber";


export const main_problems = {
    id: "main_problems",
    "twoSum":twoSum,
    "removeDuplicates":removeDuplicates,
    "checkIfSortedAndRotated":checkIfSortedAndRotated,
    "kadanesAlgorithm":maxSubArray,
    "sortArrayOf012":sortColors,
    "searchInsert":searchInsert,
    "summaryRanges":summaryRanges,
    "firstBadVersion":firstBadVersion,
    "palindromeNumber":palindromeNumber,
}