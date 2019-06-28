import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Modal from '../../Components/UI/Modal/Modal';
import OrederSummary from '../../Components/Burger/OrederSummary/OrederSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.5,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchasableState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const oldPrice = this.state.totalPrice;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
        this.updatePurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients });
        this.updatePurchasableState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('Let\'s Continue');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrederSummary ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredinetRemovd={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;