import React from 'react';
import Footer from "../../Footer/Footer";
import {Route} from "react-router-dom";


export default class ProfilePage extends React.Component {
    constructor() {
        super()
        this.state = {
            companies: [],
            internships: [],
            events: []
        }
    }


    render() {
        return <div className="page withHero" id="landingPage">

            <h2>Profile page</h2>
            <Footer />
        </div>
    }
}
