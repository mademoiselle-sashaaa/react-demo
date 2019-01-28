import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Default from './component/Default';
import Details from "./component/Details";

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <ProductList/>
            <Details/>
            <Default/>
        </React.Fragment>
    );
  }
}

export default App;
