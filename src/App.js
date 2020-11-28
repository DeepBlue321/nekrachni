import "./App.css";
import RootComponent from "./Root";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <RootComponent/>
            </Router>
        </div>
    );
}

export default App;
