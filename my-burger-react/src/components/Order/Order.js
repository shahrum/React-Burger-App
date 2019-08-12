import React from 'react';
import cls from './Order.css';

const order = (props) => (
    <div className={cls.Order}>
        <p>Ingredients: Salad (1)</p>
        <p>Price: <strong>USD 4.5</strong></p>
    </div>
);

export default order;