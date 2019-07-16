import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingredient => {
      return [...Array(ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type = {ingredient} />
      }
    );
    });
    transformedIngredients = transformedIngredients.flat();
    if(transformedIngredients.length === 0) {
      transformedIngredients = <h2>Please Add ingredients</h2>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;