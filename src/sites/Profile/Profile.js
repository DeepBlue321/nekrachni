import React from "react";
import Avatar from '@material-ui/core/Avatar'; 
import Footer from "../../compoments/Footer/Footer";
import { Link } from "react-router-dom";


const Profile = ({money,points,avatar,profilesList,name}) =>{
   
    return(
        <div>
            <div>
                <div>
                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" >
                    B
                     </Avatar>
                    <h3>{name}</h3>
                      <p>Penízky: {money}</p>
                      <div>
                     <p>Level {points}</p>
                      </div>
                </div>
                <h4>Žebříček úspěchů</h4>
                <ul>
                    <li>Jméno</li>
                    <li>Jméno</li>
                    <li>Jméno</li> 
                    <li>Jméno</li>
                </ul>
          <Link to="nastaveni_profilu">
              <button>Nastavení cílů</button>
          </Link>
           
            </div>

          
            <Footer />
        </div>
 
    )
}

export default Profile;