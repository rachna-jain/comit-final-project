import React from 'react';
import {Link} from 'react-router-dom';
import friendship8 from './images/Friendship8.png';


function IndexPage(){
    return(
        <div className="mainbody">
        <div>
            <div className="heading1">
            <h2>The Friendship Quiz</h2>
            <img src={friendship8} style={{width: 400, height: 200}} />
        
            </div>
            <div className="page1" >
                <p>Do you want to test your Friendship ? </p>
                <p>Then you have reached the Right Page </p>
                <p>Test your level of Friendship by asking them some questions related to you </p>
                <p> And lets find how much they know about you</p>
        
            </div>
        </div>
            <div className="btn">
                   
                    <Link to= "/Page2"><h3>Next</h3></Link>
                
            </div>
    
        </div>
    )
    
}

export default IndexPage;