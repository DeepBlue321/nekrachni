import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import GoaslView from "./GoalsView/GoalsView";
import CourseView from "./CourseView/CourseView";
import AchievementsView from "./AchievementsView/AchievementsView";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profil">
            <Footer />
          </Route>
          <Route path="/obchod">
            <Footer />
          </Route>

          <Route path="/">
            <CourseView />
            <GoaslView />
            <AchievementsView />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
