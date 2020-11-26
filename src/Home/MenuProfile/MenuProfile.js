import React from 'react';
import Avatar from '@material-ui/core/Avatar'; 
import  "./MenuProfile.css";
import { Link } from "react-router-dom";

const MenuProfile = ({points,name,money,avatar})=>{
    return(
        <div className="menuProfile">
               <div className="menuProfile__header">
            <Avatar alt="Remy Sharp" src="/broken-image.jpg" >
                    B
            </Avatar>
              <p>{name}</p>
              <p>{points} bodů</p>
              <p>{money} penízků</p>
              </div>
                <Link to="prehled_kurzu">
                  <button>Přehled kurzů</button>
                </Link>
                <Link to="/obchod">
                  <button>Uplatnit penízky</button>
                </Link>
                <Link to="slovnicek_pojmu">
                  <button>Slovníček pojmů</button>
                </Link>
             

        </div>
    )
}

export default MenuProfile;