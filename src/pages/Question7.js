import React from 'react';
import {Link} from 'react-router-dom';



function Question7(props){
    let [ interest1 ,setInterest1]=React.useState('');
    let [ interest2,setInterest2]=React.useState('');

function handleInterestChange(event){
    if (props.counter1 === 0){
        setInterest1(event.currentTarget.value);
        props.setInt(interest1);   
        }
        else{
         setInterest2(event.currentTarget.value);
        }
        
        if(props.int === interest2){
          props.setCounter2(props.counter2 + 1);
            }   
    }
    return(
        <div>
            <form>
                <div>
                    <h2>Question7 of 7</h2>
                </div>
                <div className="container">
                    <label className="question">What is my Topic of Interest ?</label>
                    <div className="inputContainer">
                        <div className="topics">
                            <label>Politics</label>
                            <input name= 'interest' value = 'politics' type='radio' checked={interest1==="politics"|| interest2==="politics"} onChange={handleInterestChange} /> 
                        </div>
                        <div className="topics">
                            <label>Medicine</label>
                            <input name= "interest" value = "medicine" type="radio" checked={interest1==="medicine" || interest2==="medicine"} onChange={handleInterestChange} />
                        </div>
                        <div className="topics">
                            <label>People</label>
                            <input name= "interest" value="people" type="radio" checked={interest1==="people" || interest2==="people"} onChange={handleInterestChange} />
                        </div>
                        <div className="topics">
                            <label>Art</label>
                            <input name= "interest" value= "art" type="radio" checked={interest1==="art"|| interest2==="art"} onChange={handleInterestChange}  />
                        </div>
                    </div>
                </div>
                <div>
                     <button>
                         <Link to = "/Submit1"  ><h3>Submit </h3></Link>
                     </button>
                    <button>
                         <Link to="/Complete"><h3>Check</h3></Link>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Question7;