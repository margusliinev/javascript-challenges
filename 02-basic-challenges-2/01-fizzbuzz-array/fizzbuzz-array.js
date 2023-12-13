function fizzBuzzArray(number) {
    const newArr = [];

    for (let i = 1; i <= number; i++) {
        switch (true) {
            case i % 5 === 0 && i % 3 === 0:
                newArr.push('FizzBuzz');
                break;
            case i % 5 === 0:
                newArr.push('Buzz');
                break;
            case i % 3 === 0:
                newArr.push('Fizz');
                break;
            default:
                newArr.push(i);
                break;
        }
    }

    return newArr;
}

module.exports = fizzBuzzArray;
