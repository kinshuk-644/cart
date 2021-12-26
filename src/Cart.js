import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;

    return (
        <div className='cart'>
            {/* <CartItem qty={1} price={99} title={"Watch"} img={''} /> */}

            {products.map((product) => {
                // return <CartItem qty={product.qty} price={product.price} title={product.title} img={product.img} />
                return <CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                />
            })}
        </div>
    );
}

export default Cart;