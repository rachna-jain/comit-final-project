import React from 'react';
import {Link} from 'react-router-dom';
import friendship11 from './images/friendship11.png'

function Page2(){
    return(
        <div className="mainbody">
            <div className="heading1">
                <h2>Wondering how to do it</h2>
                <img src={friendship11} style={{width:400, height:200}} />
            </div>
            <div className="page1">
                <p><h4 style={{textAlign:"center"}}>Its Simple!!!! </h4></p>
                <p>1. Answer some questions about Yourself.</p>
                <p>2. A Quiz will be created.</p>
                <p>3. Now ask your friend to answer these questions</p>
                <p>4. Finally check the result</p>
                <p style={{textAlign: "center"}}><b>ALL THE BEST!!!!</b></p>
            </div>
            <div className="btn">
                <Link to = "/EnterName"><h3>Next</h3></Link>
            </div>
        </div>
        
    )
    
}

export default Page2;