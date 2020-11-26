import React from "react";

import Footer from "../../compoments/Footer/Footer";


const Shop = ({money,charityList}) =>{
   
    return(
        <div>
            <div>
                <h2>Uplatnění penízků</h2>
                 <p>Máte: {money} penízků</p>
            
            </div>

            <ul>
                <li>Charita</li>
                <li>Charita</li>
                <li>Charita</li>
                <li>Charita</li>
            </ul>
            <Footer />
        </div>
 
    )
}

export default Shop;