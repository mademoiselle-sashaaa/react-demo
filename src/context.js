import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct,
        cart: [],
        modalOpen: true,
        modalProduct: detailProduct
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() => {
                return {products: tempProducts}
            }
        )
    }

    getItem = (id) => {
        const item = this.state.products.find(item => item.id === id);
        return item;
    }

    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}})
    }

    addToCart = (id) =>{
       let tempProducts = [...this.state.products];
      // let index = tempProducts.indexOf(this.getItem(id));
     //  const product = tempProducts[index];
        const product = this.getItem(id);
       product.inCart = true;
       product.count= product.count+1;
       product.total=product.price*product.count;
       this.setState(()=>{
           return {products:tempProducts, cart:[...this.state.cart, product]}
       }, ()=>{console.log(this.state)})

    }

    openModal = (id) =>{
        const currItem = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: currItem, modalOpen: true}
        })

    }

    closeModal = () =>{
        this.setState(()=>{
            return { modalOpen: false}
        })

    }
    render() {
        return (
           <ProductContext.Provider value={{...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart,
               openModal: this.openModal,
               closeModal: this.closeModal
           }}>
               {this.props.children}
           </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

