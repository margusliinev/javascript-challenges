function analyzeCarMileage(cars) {
    const averageMileage = cars.reduce((acc, cur) => {
        return (acc += cur.mileage / cars.length);
    }, 0);

    const totalMileage = cars.reduce((acc, cur) => {
        return (acc += cur.mileage);
    }, 0);

    const highestMileageCar = cars.reduce((acc, cur) => {
        if (acc.mileage < cur.mileage) {
            acc = cur;
        }
        return acc;
    }, cars[0]);

    const lowestMileageCar = cars.reduce((acc, cur) => {
        if (acc.mileage > cur.mileage) {
            acc = cur;
        }
        return acc;
    }, cars[0]);

    return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
