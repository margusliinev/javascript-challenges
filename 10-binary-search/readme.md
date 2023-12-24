# Challenge: Binary Search

Binary Search looks up an item in the array that is pre-sorted which is faster than going through all the elements.

## Instructions

Implement a function called `binarySearch` that takes in two (primary) arguments: array of numbers and element. Write the binary search algorithm to find the index of the element in the array or -1 if not found.

### Function Signature

```js
/**
 * Finds the index of a target element in a sorted array using Binary Search.
 * @param {number[]} arr - The sorted array.
 * @param {number} element - The target element to find.
 * @param {number} [startIdx=0] - The starting index of the search range.
 * @param {number} [endIdx=array.length] - The ending index of the search range.
 * @returns {number} - The index of the target element, or -1 if not found.
 */
function binarySearch(arr: number[], element: number): number[]
```

### Examples

```js
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([11, 12, 22, 25, 34, 64, 90], 25)); // Output: 3
```

### Constraints

-   The input array must be sorted in ascending order.
-   The elements in the input array are unique and positive integers.

### Notes

-   Binary Search efficiently locates the index of a target element in a sorted array.
-   The search range is narrowed by half in each iteration, making it significantly faster than linear search.
-   Binary Search assumes a sorted array, utilizing the divide-and-conquer strategy to quickly pinpoint the target.

### Hints

-   Ensure the array is sorted before applying Binary Search.
-   The search range is updated based on whether the target is less than, greater than, or equal to the middle element.
-   Recursively apply Binary Search to the narrowed search range.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function binarySearch(arr, element, startIdx = 0, endIdx = arr.length) {
    if (endIdx <= startIdx) {
        return -1;
    }

    const midIdx = Math.floor((startIdx + endIdx) / 2);

    if (arr[midIdx] === element) {
        return midIdx;
    } else if (element < arr[midIdx]) {
        return binarySearch(arr, element, startIdx, midIdx);
    } else {
        return binarySearch(arr, element, midIdx + 1, endIdx);
    }
}
```

### Explanation

- The `binarySearch` function is designed to efficiently find the index of a target element within a sorted array.
- The function takes parameters such as the sorted array (`arr`), the target element (`target`), and optionally, the range within which to search (`start` and `end`).
- Initially, the function checks if the search range is valid (i.e., `start` is less than or equal to `end`). If not, it means the target element is not present, and `-1` is returned.
- If the range is valid, the function calculates the middle index (`mid`) within the specified range.
- It then compares the element at the middle index with the target element. If they match, the function returns the middle index.
- If the target is less than the middle element, the search is narrowed to the left half of the array. Similarly, if the target is greater, the search is narrowed to the right half.
- This process repeats recursively until the target is found or the search range becomes invalid.
- The efficiency of binary search lies in halving the search range at each step, making it significantly faster than linear search for large sorted datasets.

### Test Cases

```js
test('Empty array', () => {
    expect(binarySearch([], 0)).toBe(-1);
});

test('single element', () => {
    expect(binarySearch([1], 0)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(0);
});

test('in the middle', () => {
    expect(binarySearch([1, 2, 3], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test('to the left of middle', () => {
    expect(binarySearch([1, 2, 3], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toBe(3);
});

test('to the right of middle', () => {
    expect(binarySearch([1, 2, 3], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6);
});

test('to the left of even sized array', () => {
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
});

test('to the right of even sized array', () => {
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4], 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).toBe(5);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
});
```

Feel free to customize the test cases according to your needs!