import React from 'react';
import {Link} from 'react-router-dom';

function Question2(props){
    let [ holiday1 ,setHoliday1]=React.useState('');
    let [ holiday2 ,setHoliday2]=React.useState('');

    function handleHolidayChange(event){
        
        if (props.counter1 === 0){
            setHoliday1(event.currentTarget.value);
            props.setHday(holiday1);
          
            } else{
             setHoliday2(event.currentTarget.value);
            }
        if(props.hday === holiday2){
              props.setCounter2(props.counter2 + 1);
                  
                }           
    }
   
    return(
        <div>
            <form>
                <div>
                    <h2>Question 2 of 7</h2>
                </div>
                <div className="container">
                    <label className="question">Which is my favourite Holiday Destination?</label>
                    <div className="inputContainer">
                        <div className="topics">
                            <label>Paris</label>
                            <input name= 'holiday' value = 'paris' type='radio' checked={holiday1==="paris" || holiday2 === "paris"} onChange={handleHolidayChange} /> 
                         </div>
                         <div className="topics">
                             <label>Zurich</label>
                             <input name= "holiday" value = "zurich" type="radio" checked={holiday1==="zurich" || holiday2 ==="zurich"} onChange={handleHolidayChange} />
                         </div>                       
                        <div className="topics">
                            <label>Kashmir</label>
                            <input name= "holiday" value="kashmir" type="radio" checked={holiday1==="kashmir"|| holiday2 ==="kashmir" } onChange={handleHolidayChange} />
                        </div>    
                        <div className="topics">
                          <label>Australia</label>
                          <input name= "holiday" value= "australia" type="radio" checked={holiday1=== "australia"|| holiday2==="australia"} onChange={handleHolidayChange} /> 
                        </div>
                    </div>
                </div>
                 <div>
                     <button>
                         <Link to = "/Question3"><h3>Next </h3></Link>
                     </button>
                 </div>
             </form>
         </div>
    );
}

export default Question2;