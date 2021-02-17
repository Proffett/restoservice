import React from 'react';
import {MainPage, CartPage, ProductPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import { Route, Switch} from "react-router-dom";

const App = (state) => {
    // RestoService.getMenuItems()
    //     .then( menu => console.log(menu))
    //     .catch( error => {console.log('ошибка')})
    return (
      <div
        style={{ background: `url(${Background}) center center/cover no-repeat` }}
        className="app"
      >
        <AppHeader total={state.summaryPrice} />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/:id" component={ProductPage} />
        </Switch>
      </div>
    );
}

export default App;