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
                                       <div id ='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                           <h5>Item added to the cart</h5>
                                           <img src={img} alt='product'></img>
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

