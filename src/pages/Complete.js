import React from 'react';
import {Link} from 'react-router-dom';
import friendship10 from './images/th.jpg'

function Complete(props){
    let [result,setResult]=React.useState('');
    function displayResult(){
        switch(props.counter2){
            case 7: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Soulmates" </h4>) ;break;}
            case 6: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Besties" </h4>);break;}
            case 5: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Close Friends" </h4>);break;}
            case 4: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Good Pals" </h4>);break;}
            case 3: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Acquaintances"</h4>);break;}
            case 2: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Colleagues"</h4>);break;}
            case 1: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Strangers"</h4>);break;}
            case 0: {return setResult(<h4 style={{fontFamily:"sans-serif" , fontSize:"25px" , fontVariant:"small-caps"}}>{props.name} & {props.fname} are  "Who the Hell are You?"</h4>);break;}
        }
    }
    return(
        
        <div className="mainbody">
            <div className="heading1">
                <h2>Congrats!!! Quiz is Complete</h2>
                <img src={friendship10} style={{width: 500, height: 200}} />
            </div>
            <div className="page1" style={{textAlign: "center"}}>
                <p><h4>To know the Result click the button below</h4></p>
                <div>
                  <button onClick={displayResult} 
                        style={{color: "darkred" , backgroundColor:"tomato" , border: "none", fontSize:"25px", fontFamily:"sans-serif" ,width:"95px" , height:"50px"}}>Result</button>
                </div>
    <p></p>
                <p>{result}</p>
            </div>
            
        </div>
    );

}

export default Complete;