import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

let INGREDIENTS_PRICES = {
  salad:0.5,
  bacon:0.8,
  cheese:0.5,
  meat:1
}
class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice: 0,
    purchasing:false
  } 
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice:newPrice,
      ingredients:updatedIngredients
    })
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let updatedCount;
    if(oldCount > 0){
      updatedCount = oldCount - 1;
    }
    else updatedCount = 0;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice:newPrice,
      ingredients:updatedIngredients
    })
  }
  purchaseHandler = () => {
    this.setState({
      purchasing:true
    })
  }
  closeModalHandler = () => {
    this.setState({
      purchasing:false
    })
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0 
    }
    const orderInfo = this.state.totalPrice === 0;
    return (
      <div> 
        <Modal modalClosed = {this.closeModalHandler} show = {this.state.purchasing}>
          <OrderSummary ingredients = {this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
        ingredientAdded = {this.addIngredientHandler}
        ingredientRemoved = {this.removeIngredientHandler}
        disabled = {disabledInfo}
        price = {this.state.totalPrice.toFixed(2)}
        disabledOrder = {orderInfo}
        ordered = {this.purchaseHandler}
        />
      </div>
    );
  }
}

export default BurgerBuilder;