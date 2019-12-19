import React from 'react';
import {Link} from 'react-router-dom';
import friendship2 from './images/friendship2.png';

function EnterName(props){
    
    function enterName(event){
        props.setName(event.currentTarget.value);
    }
   
    return(
    <div className="mainbody">
        <div className="heading1">
            <h4>Lets get Started</h4>
            <img src={friendship2} style={{width: 400, height: 250}}/>
        </div>
        <div className="page1">
            
            <label><h4>Enter your name:</h4></label>    
            <input type="text" value={props.name} onChange={enterName} 
                style={{width:"400px", height:"40px", fontFamily:"sans-serif" , fontSize:"25px", fontVariant:"smallCaps" }}
                 required /> 
            
            
            <p>There are 7 Questions about you</p>
            <p>Answer them Honestly </p>
        </div>
        <div className="btn">
            <Link to ="/Question1"><h3>Next</h3></Link>
        </div>
    </div>
    )
}

export default EnterName;