import React from "react";
import { useHistory,Link } from "react-router-dom";



const WorldList = ({worlslist}) =>{
   let history = useHistory();
    return(
        <div>
            <div>
                 <p onClick={()=> history.goBack()}>Back</p>
            <h1>Slovníček pojmů</h1>
            </div>
            <div>
                
                <ul>
                    <Link path="/seznam-slov-zakladni">
                      <li>slovo</li>
                    </Link>
                    
                    <li>slovo</li>
                    <li>slovo</li>
                </ul>
            </div>
         
           

         
        </div>
 
    )
}

export default WorldList;