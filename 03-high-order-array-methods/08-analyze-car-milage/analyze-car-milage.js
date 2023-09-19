function analyzeCarMileage(cars) {
    const averageMileage = cars.reduce((acc, cur) => {
        return (acc += cur.mileage / cars.length);
    }, 0);

    const highestMileageCar = cars.reduce((acc, cur) => {
        if (cur.mileage > acc.mileage) {
            return cur;
        }
        return acc;
    }, cars[0]);

    const lowestMileageCar = cars.reduce((acc, cur) => {
        if (cur.mileage < acc.mileage) {
            return cur;
        }
        return acc;
    }, cars[0]);

    const totalMileage = cars.reduce((acc, cur) => {
        return (acc += cur.mileage);
    }, 0);

    return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
