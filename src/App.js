import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./sites/Shop/Shop"
import Home from "./Home/Home"
import Profile from './sites/Profile/Profile';
import ProfileSettings from "./sites/ProfileSettings/ProfileSettings"
import CourseList from "./sites/CourseList/CourseList"
import WorldList from './sites/WorldList/WorldList';
function App() {
  const [menu,setMenu] =useState(true);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profil">
            <Profile level={5} avatar={"src"} points={25} name={"Karel"}/>
          </Route>
          <Route path="/obchod">
              <Shop money={25} />
          </Route>
          <Route path="/nastaveni_profilu">          
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
