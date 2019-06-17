import React from 'react';
import cls from './Burger.css'

import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={cls.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );    
}

export default burger;