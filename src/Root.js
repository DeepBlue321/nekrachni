import React, {useEffect, useState} from 'react';
import  {Switch, Route} from 'react-router'
import Profile from "./sites/Profile/Profile";
import Shop from "./sites/Shop/Shop";
import ProfileSettings from "./sites/ProfileSettings/ProfileSettings";
import CourseList from "./sites/CourseList/CourseList";
import WorldList from "./sites/WorldList/WorldList";
import Home from "./Home/Home";
import Error404 from "./sites/errors/Error404";

const RootComponent = function() {

    const [menu, setMenu] = useState(true);
    return (
    <div id="app">
            <Switch>
                <Route path="/profil/">
                    <Profile level={5} avatar={"src"} points={25} name={"Karel"}/>
                </Route>
                <Route path="/obchod">
                    <Shop money={25} />
                </Route>
                <Route path="/profil/nastaveni_profilu">
                    <ProfileSettings studyType="Ležérní"/>
                </Route>
                <Route path="/prehled_kurzu">
                    <CourseList />
                </Route>
                <Route path="/slovnicek_pojmu">
                    <WorldList />
                </Route>

                <Route path="/">
                    <Home setMenu={setMenu}
                          menu={menu}/>
                </Route>
                <Route path=""><Error404/></Route>
            </Switch>
        {/*<Toolbar/>
        <Footer/>
        <CookieConsent/>*/}
    </div>);
};

export default RootComponent