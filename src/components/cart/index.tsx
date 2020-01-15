import React, { Fragment } from 'react';

import { CartItem } from './cart-item';
import { CartInterface } from '../../reducers/cart-reducer';
import { ProductInterface } from '../../reducers/catalog-reducer';
import { DiscountInterface } from '../../reducers/catalog-reducer';

export function Cart({
  products,
  discounts,
  cart,
  removeFromCart,
}: {
  products: ProductInterface[];
  discounts: DiscountInterface[];
  cart: CartInterface;
  removeFromCart: (id: number) => void;
}) {
  const items = cart.items.reduce((items: any, item) => {
    const productDiscount = discounts.find(discount => discount.productId === item.id);

    if (!productDiscount || item.amount < productDiscount.amount) {
      items.push({
        product: products.find(product => product.id === item.id),
        amount: item.amount,
      });

      return items;
    }

    const amountDiscount = Math.floor(item.amount / productDiscount.amount);
    const amountRemainder = item.amount % productDiscount.amount;

    items.push({
      product: productDiscount,
      amount: amountDiscount,
    });

    if (amountRemainder) {
      items.push({
        product: products.find(product => product.id === item.id),
        amount: amountRemainder,
      });
    }

    return items;
  }, []);

  const total = items.reduce((sum: any, item: any) => sum + item.product!.price * item.amount, 0);

  return (
    <Fragment>
      {items.map((item: any) => (
        <CartItem
          name={item.product!.name}
          amount={item.amount}
          removeFromCart={() => removeFromCart(item.product!.id)}
          key={item.product!.id}
        />
      ))}

      <div>Total: {total}</div>
    </Fragment>
  );
}
