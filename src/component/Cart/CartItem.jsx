import React from 'react';

export default function CartItem({item, value}) {
    const {id, title, price, img, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"><img src={img} className='img-fluid'></img></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">{title}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">{price}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">{count}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">{total}</p>
                </div>
            </div>
    );
}

