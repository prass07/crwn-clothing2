import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-items/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => {
    return(
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key = {cartItem.id} cartItem = {cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);