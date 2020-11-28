import React from 'react';

import Footer from "../../Footer/Footer";


export default class ShopPage extends React.Component {
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

            <h2>Shop page</h2>
            <Footer />
        </div>
    }
}
