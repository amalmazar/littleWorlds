import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.jsx';
import Shop from './components/shop.jsx';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import Callback from './components/Callback'

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='shop' component={Shop}></Route>
        <Route path='home' component={Home}></Route>
        <Route path='about' component={About}></Route>
        <Route path='callback' component={Callback}></Route>
    </Route>

);