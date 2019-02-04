import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";

export default class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value) => {
                   const {modalOpen, closeModal} = value;
                   const {id, title, price, img} = value.modalProduct;

                   return (
                       modalOpen ?
                           <ModalContainer>
                               <div className="container">
                                   <div className="row">
                                       <div id ='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                           <h5>Item added to the cart</h5>
                                           <img src={img} className='img-fluid' alt='product'></img>
                                           <h4 className='text-blue'>
                                               {title}
                                           </h4>
                                           <h4 className='text-blue'>
                                               <strong>
                                                   price: <span>$ {price}</span>
                                               </strong>
                                           </h4>
                                           <Link to='/'>
                                               <ButtonContainer
                                                   className='text-capitalize'
                                                   onClick={()=>{closeModal();}}>
                                                   Continue shopping
                                               </ButtonContainer>
                                           </Link>
                                           <Link to='/cart'>
                                               <ButtonContainer
                                                   cart
                                                   className='text-capitalize'
                                                   onClick={()=>{closeModal();}}>
                                                  go to the cart
                                               </ButtonContainer>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                           </ModalContainer> :
                           null
                   )
               }}
           </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.3);  
    #modal{
        background: var(--mainWhite);
    }
`;

