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
                           <h1>modal</h1> :
                           null
                   )
               }}
           </ProductConsumer>
        );
    }
}

