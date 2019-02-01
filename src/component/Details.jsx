import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                   const {id, title, img, company, inCart, price, info} = value.detailProduct;
                   return (
                       <div className='container py-5'>
                        <div className="row">
                            <div className="col-10 mx-auto text-blue text-center text-slanted my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <img src={img} className='img-fluid' alt='product'/>
                               </div>
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h2>model: {title}</h2>
                                   <h4 className='text-title text-muted text-uppercase mt-3 mb-2'>
                                       made by: <span className='text-uppercase'>{company}</span>
                                   </h4>
                                   <h4 className='text-blue'>
                                      <strong>
                                          price: <span>$ {price}</span>
                                      </strong>
                                   </h4>
                                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                      some info about product
                                   </p>
                                   <p className='text-muted lead'>
                                       {info}
                                   </p>
                                   {/*{buttons}*/}
                                   <div>
                                       <Link to='/'>
                                           <ButtonContainer>
                                               Back to Products
                                           </ButtonContainer>
                                       </Link>
                                       <ButtonContainer
                                           cart
                                           disabled={inCart}
                                           onClick={() => {
                                               value.addToCart(id);
                                               value.openModal(id);
                                           }}>
                                           {inCart? 'InCart':'Add to cart'}
                                       </ButtonContainer>
                                   </div>

                               </div>
                           </div>
                       </div>
                   )

               }}
           </ProductConsumer>
        );
    }
}

