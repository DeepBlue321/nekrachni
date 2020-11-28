import React from 'react';

import CourseView from "./CourseView/CourseView";
import GoaslView from "./GoalsView/GoalsView";
import AchievementsView from "./AchievementsView/AchievementsView";
import Footer from "../../Footer/Footer";


export default class LandingPage extends React.Component {
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
            <CourseView />
            <GoaslView />
            <AchievementsView />
            <Footer />
        </div>
    }
}
