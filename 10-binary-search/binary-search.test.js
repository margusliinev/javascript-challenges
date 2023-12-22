const binarySearch = require('./binary-search');

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
