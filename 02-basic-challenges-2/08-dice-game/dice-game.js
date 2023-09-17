function diceGameSimulation(numOfSimulations) {
    const simulations = [];
    for (let i = numOfSimulations; i > 0; i--) {
        const dice1 = Math.ceil(Math.random() * 6);
        const dice2 = Math.ceil(Math.random() * 6);
        const sum = dice1 + dice2;
        const result = sum === 7 || sum === 11 ? 'win' : sum === 2 || sum === 3 || sum === 12 ? 'lose' : 'roll again';
        simulations.push({ dice1, dice2, sum, result });
    }
    return simulations;
}

module.exports = diceGameSimulation;
