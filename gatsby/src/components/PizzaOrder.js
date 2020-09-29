import React from 'react';
import Img from 'gatsby-image';

import MenuItemStyles from '../styles/MenuItemStyles.js';
import calculatePizzaPrice from '../utils/calcuatePizzaPrice.js';
import formatMoney from '../utils/formatMoney.js';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const pizzaMatch = pizzas.find((pizza) => pizza.id === singleOrder.id);
        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={pizzaMatch.image.asset.fluid} />
            <h2>{pizzaMatch.name}</h2>
            <p>
              {formatMoney(
                calculatePizzaPrice(pizzaMatch.price, singleOrder.size)
              )}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.szie} ${pizzaMatch.name} from order.`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
