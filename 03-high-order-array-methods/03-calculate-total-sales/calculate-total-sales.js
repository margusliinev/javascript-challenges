function calculateTotalSalesWithTax(products, taxRate) {
    const totalSalesAmount = products.reduce((acc, cur) => {
        let productCost = cur.quantity * cur.price;
        return (acc += productCost);
    }, 0);

    const salesAmountWithTax = totalSalesAmount + (totalSalesAmount * taxRate) / 100;

    return salesAmountWithTax;
}

module.exports = calculateTotalSalesWithTax;
