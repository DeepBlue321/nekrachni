import React from "react";
import { useHistory } from "react-router-dom";



const CourseList = ({courseList}) =>{
   let history = useHistory();
    return(
        <div>
            <div>
                 <p onClick={()=> history.goBack()}>Back</p>
                 <h1>Přehled kurzů</h1>
            </div>
            <div>
                
                <ul>
                    <li>Kurz</li>
                    <li>Kurz</li>
                    <li>Kurz</li>
                </ul>
            </div>
          
        </div>
 
    )
}

export default CourseList;