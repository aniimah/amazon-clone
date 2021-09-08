import React from 'react';
import './Checkout.css';
import ad from './nikead.jpg';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"
            src={ad}
            alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty.</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, 
                        click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket.</h2>

                    {/* List out all of the checkout products */}
                    {basket.map(item => (
                        
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    
                    {/*<Subtotal />*/}
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
