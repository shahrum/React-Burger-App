import React, { Component } from 'react';
import PropType from 'prop-types';
import cls from './BurgerIngredient.css';


class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={cls.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={cls.BreadTop}>
            <div className={cls.Seed1}></div>
            <div className={cls.Seed2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={cls.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={cls.Cheese}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={cls.Bacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={cls.Salad}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
};

BurgerIngredient.protoType = {
  type: PropType.string.isRequired
}



export default BurgerIngredient;
