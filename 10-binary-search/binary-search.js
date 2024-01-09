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

// Alternative solution

// function binarySearch(arr, element) {
//     let startIdx = 0;
//     let endIdx = arr.length - 1;

//     while (startIdx <= endIdx) {
//         const midIdx = Math.floor((startIdx + endIdx) / 2);

//         if (arr[midIdx] === element) {
//             return midIdx;
//         } else if (element < arr[midIdx]) {
//             endIdx = midIdx - 1;
//         } else {
//             startIdx = midIdx + 1;
//         }
//     }

//     return -1;
// }

module.exports = binarySearch;
