import React from 'react';

//  Calculate the total price of the products
const calculatePrice = (products) => {
    return products.reduce((sum, obj) => sum + obj.price, 0);
}

//  Display the total price of the products
const Example2 = () => {
    const total = React.useMemo(() => calculatePrice(
        [...Array(20)].map((_, i) => ({ id: i, price: Math.random() * 100 }))
    ), []);

    return <h1>Цена: {total}</h1>
}

export default Example2;