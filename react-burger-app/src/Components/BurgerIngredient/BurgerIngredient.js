import React, { Component } from 'react';
import PropType from 'prop-types';
import cls from './BurgerIngredient.css';


class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    console.log('ingredient: ', ingredient);

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={cls.breadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={cls.breadTop}>
            <div className={cls.seed1}></div>
            <div className={cls.seed2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={cls.meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={cls.cheese}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={cls.bacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={cls.salad}></div>;
        break;
      default:
        ingredient = null;
    }
    console.log('after', ingredient);
    return ingredient;
  }
};

BurgerIngredient.protoType = {
  type: PropType.string.isRequired
}



export default BurgerIngredient;
