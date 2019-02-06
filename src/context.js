import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
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
       const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        //const product = this.getItem(id);
       product.inCart = true;
       product.count= product.count+1;
       product.total=product.price*product.count;
       this.setState(()=>{
           return {products:tempProducts, cart:[...this.state.cart, product]}
       }, ()=>{this.addTotals()})
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

    increment = (id) => {
        let tempCart = [...this.state.cart];
        let selectedProduct = tempCart.find(item=> item.id ===id);
        selectedProduct.count+=1;
        selectedProduct.total=selectedProduct.price*selectedProduct.count;

        this.setState(()=>{
            return { cart:[...tempCart]}
        }, ()=>{this.addTotals()});
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        let selectedProduct = tempCart.find(item=> item.id ===id);
        selectedProduct.count-=1;
        selectedProduct.total=selectedProduct.price*selectedProduct.count;
        debugger
        if( selectedProduct.count === 0 ){
            this.removeItem(id);
            return;
        }

        this.setState(()=>{
            return { cart:[...tempCart]}
        }, ()=>{this.addTotals()});
    }

    removeItem = (id) => {
       let tempProducts = [...this.state.products];
       let tempCart = [...this.state.cart];
        tempCart= tempCart.filter((item)=>item.id!==id);

        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = false;
        product.count = 0;
        product.total = 0;

        this.setState(()=>{
            return {products:[...tempProducts], cart:[...tempCart]}
        }, ()=>{this.addTotals()});
    }

    clearCart = () => {
        this.setState(()=>{
            return {cart:[]}
        }, ()=>{
            this.setProducts();
            this.addTotals();
        });
    }

    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal+=item.total));
        const tax = parseFloat((subTotal*0.1).toFixed(2));
        const total  = subTotal+tax;
        this.setState(()=>{
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total}
        });

    }
    render() {
        return (
           <ProductContext.Provider value={{...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart,
               openModal: this.openModal,
               closeModal: this.closeModal,
               clearCart: this.clearCart,
               removeItem: this.removeItem,
               increment: this.increment,
               decrement: this.decrement
           }}>
               {this.props.children}
           </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

