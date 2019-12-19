import React from 'react';
import {Link} from 'react-router-dom';
import friendship7 from './images/friendship7.png';


function Submit1(props){
    function setCounters(){
        props.setCounter1(1);
        props.setCounter2(0);
    }
    return(
        <div className="mainbody">
            <div className="heading1">            
                <h4> Your Quiz is Complete!!!  </h4>
                <img src={friendship7}  style={{width: 400, height: 250}} />
            </div>
            <div className="page1">
                <p>Now its time to test your Friends</p>
                <p>Ask your Friend to answer the Quiz</p>
                <p>Then Verify the Result</p>
                <p>All THE BEST!!!</p>
                
            </div>
            <div className="btn">
            
            <Link to = "/FriendName" onClick={setCounters}><h3>Next</h3></Link>
            
            </div>

        </div>
    );
}

export default Submit1;