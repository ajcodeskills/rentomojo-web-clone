import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import { Route, Switch } from 'react-router-dom'
import { CartPage } from './CartPage/CartPage'
import Features from './Features'
import { Electronics } from '../pages/Electronics'
import { Fitness } from '../pages/Fitness';
import { Furniture } from '../pages/Furniture';
import { Packages } from '../pages/Packages';
import { Appliances } from '../pages/Appliance';
import { FurnitureProduct } from '../productPages/FurnitureProduct'
import { ApplianceProduct } from '../productPages/ApplianceProduct'
import { ElectronicsProduct } from '../productPages/ElectronicsProduct'
import SearchProducts from './searchBar/SearchProducts'
import { Product } from './Productpage/Product'

export default function RentoMain() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Features />
          </Route>
          <Route exact path="/cart">
            <CartPage/>
          </Route>
          <Route exact path='/search'>
            <SearchProducts />
          </Route>
          <Route exact path='/electronics-on-rent'>
            <Electronics />
          </Route>
          <Route exact path='/appliances-on-rent'>
            <Appliances />
          </Route>
          <Route exact path='/packages-on-rent'>
            <Packages />
          </Route>
          <Route exact path='/furniture-on-rent'>
            <Furniture />
          </Route>
          <Route exact path='/fitness-on-rent'>
            <Fitness />
          </Route>
          <Route exact path='/furniture/:name'>
            <FurnitureProduct />
          </Route>
          <Route exact path='/appliance/:name'>
            <ApplianceProduct />
          </Route>
          <Route exact path='/electronics/:name'>
            <ElectronicsProduct />
          </Route>
          <Route exact path='/product/:id'>
            <Product />
          </Route>
          <Route>
            <h1>404 PAGE NOT FOUND</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
}
