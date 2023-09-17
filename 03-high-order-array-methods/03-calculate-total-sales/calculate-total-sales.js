const products = [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, taxRate) {
    const preTaxPrice = products.reduce((acc, cur) => {
        acc = cur.price * cur.quantity + acc;
        return acc;
    }, 0);

    const priceWithTax = (taxRate / 100) * preTaxPrice + preTaxPrice;
    return priceWithTax;
}

module.exports = calculateTotalSalesWithTax;
