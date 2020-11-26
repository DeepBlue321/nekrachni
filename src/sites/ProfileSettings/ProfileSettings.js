import React from "react";
import { useHistory } from "react-router-dom";



const ProfileSettings = ({studyType}) =>{
   let history = useHistory();
    return(
        <div>
            <div>
                 <p onClick={()=> history.goBack()}>Back</p>
            <h1>Nastavení cílů</h1>
            </div>
            <div>
                <h2>Intenzita studia</h2> 
                <ul>
                    <li>Ležérní</li>
                    <li>Ležérní</li>
                    <li>Ležérní</li>
                </ul>
            </div>
            <div>
                <h2>Nastavení upozornění</h2> 
                <ul>
                    <li>Ležérní</li>
                    <li>Ležérní</li>
                    <li>Ležérní</li>
                </ul>
            </div>
           

         
        </div>
 
    )
}

export default ProfileSettings;