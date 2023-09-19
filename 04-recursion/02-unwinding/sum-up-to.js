// Recursive approach

/*
function sumUpTo(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumUpTo(n - 1);
}
*/

// Iterative approach

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumUpTo;
