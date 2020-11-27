import React from "react";
import GoaslView from "../compoments/GoalsView/GoalsView";
import CourseView from "../compoments/CourseView/CourseView";
import AchievementsView from "../compoments/AchievementsView/AchievementsView";
import Footer from "../compoments/Footer/Footer";
import MenuProfile from "./MenuProfile/MenuProfile";
import { Link } from "react-router-dom";

const Home = ({ setMenu, menu }) => {
  console.log(menu);
  return (
    <div>
      {menu ? (
        <h3 className="menuIcon" onClick={() => setMenu(!menu)}>
          menu
        </h3>
      ) : (
        <MenuProfile />
      )}

      <div onClick={() => setMenu(true)}>
        <Link to="prehled_kurzu">
          <CourseView />
        </Link>

        <GoaslView />
        <AchievementsView />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
