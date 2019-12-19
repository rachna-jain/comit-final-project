import React from 'react';
import {Link} from 'react-router-dom';

function Question3(props){
    let [ cartoon1 ,setCartoon1]=React.useState('');
    let [ cartoon2 ,setCartoon2]=React.useState('');

    function handleCartoonChange(event){
        
        if (props.counter1 === 0){
            setCartoon1(event.currentTarget.value);
            props.setCtoon(cartoon1);
          
            }
            else{
             setCartoon2(event.currentTarget.value);
             if(props.ctoon === cartoon2){
              props.setCounter2(props.counter2 + 1);
                  }
                }
             
    }
   
    return(
        <div>
            <form>
            <div>
            <h2>Question 3 of 7</h2>
            </div>
            <div className="container">
                <label className="question">Who is my favourite Cartoon Character?</label>
                <div className="inputContainer">
                    <div className="topics">
                        <label>Popeye</label>
                        <input name= 'cartoon' value = "popeye" type='radio' checked={cartoon1==="popeye" || cartoon2==="popeye"} onChange={handleCartoonChange} /> 
                    </div>
                    <div className="topics">
                        <label>Goofy</label>
                        <input name= "cartoon" value = "goofy" type="radio" checked={cartoon1==="goofy" || cartoon2==="goofy"} onChange={handleCartoonChange} />
                    </div>
                    <div className="topics">
                        <label>Donald</label>
                        <input name= "cartoon" value="donald" type="radio" checked={cartoon1==="donald" || cartoon2==="donald"} onChange={handleCartoonChange} />
                    </div>
                    <div className="topics">
                        <label> Winnie-the-Pooh</label>
                        <input name= "cartoon" value= "winnie" type="radio" checked={cartoon1==="winnie" || cartoon2==="winnie"} onChange={handleCartoonChange} />
                     </div>
                </div>
            </div>
            <div>
                <button>
                    <Link to = "/Question4"><h3>Next </h3></Link>
                 </button>
             </div>
            </form>
         </div>
    );
}

export default Question3;