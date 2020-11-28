import React, { useEffect } from 'react';
import  {Switch, Route, Redirect, useLocation } from 'react-router-dom'




import LandingPage from './pages/landingPage/LandingPage';
import ShopPage from "./pages/shopPage/ShopPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Error404 from "./pages/errors/Error404";

const RootComponent = function() {
    return (
    <div id="app">
        <Switch>
            <Route exact path="/"><LandingPage/></Route>
            <Route path="/home"><LandingPage/></Route>
            <Route path="/obchod"><ShopPage/></Route>
            <Route path="/profil"><ProfilePage/></Route>
            <Route path=""><Error404/></Route>
        </Switch>
        {/*<Toolbar/>
        <Footer/>
        <CookieConsent/>*/}
    </div>);
};

export default RootComponent