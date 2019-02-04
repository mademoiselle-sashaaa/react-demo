import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        return (cart.length > 0) ?
                             (
                                <React.Fragment>
                                    <Title name='your' title='cart'/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                </React.Fragment>
                            ) : <EmptyCart/>

                    }
                    }
                </ProductConsumer>
            </section>

        );
    }
}

