import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orederSummary = (props) => {
    const ingredientsSumamry = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSumamry}
            </ul>
            <p><strong>Total Amount: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
        </Auxiliary>
    )
};

export default orederSummary;