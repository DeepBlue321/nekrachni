import React, {useState} from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Shop from "./sites/Shop/Shop"
import Home from "./Home/Home"
import Profile from './sites/Profile/Profile';
import ProfileSettings from "./sites/ProfileSettings/ProfileSettings"
import CourseList from "./sites/CourseList/CourseList"
import WorldList from './sites/WorldList/WorldList';
import RootComponent from "./Root";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <RootComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
