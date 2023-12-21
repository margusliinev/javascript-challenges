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

module.exports = binarySearch;
