import React from 'react';
import {Link} from 'react-router-dom';
import friendship9 from './images/friendship9.png';

function FriendName(props){

    function enterfName(event){
        props.setFName(event.currentTarget.value);
    }
   
    return(
        <div className="mainbody">
            <div className="heading1">
                <h2>Welcome TO {props.name} Quiz </h2>
                <img src={friendship9}  style={{width: 400, height: 250}}/>
            </div>
            <div className="page1">
            <p> <label><h4>Enter your name:</h4></label>    
            <input type="text" value={props.fname} onChange={enterfName}
             style={{width:"400px", height:"40px", fontFamily:"sans-serif" , fontSize:"25px", fontVariant:"smallCaps"}} required /> 
            </p>

                <p>1. There are 7 Questions</p>
                <p>2. Try to Answer them Honestly</p>
                <p>3. Wishing you Luck</p>
                
            </div>
            <div className="btn">
            <Link to ="/Question1"><h3>Next</h3></Link>
            </div>

        </div>
    );


}

export default FriendName;