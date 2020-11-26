import React from "react";
import { useHistory } from "react-router-dom";



const WorldList = ({worlslist}) =>{
   let history = useHistory();
    return(
        <div>
            <div>
                 <p onClick={()=> history.goBack()}>Back</p>
            <h1>Základní pojmy</h1>
            </div>
            <div>
                
                <ul>
             
                      <li>slovo</li>
             
                    
                    <li>slovo</li>
                    <li>slovo</li>
                </ul>
            </div>
         
           

         
        </div>
 
    )
}

export default WorldList;