import React from 'react';
import {Link} from 'react-router-dom';


function Question1(props){
    
    let [pastime2,setPastime2]=React.useState('');
    let [pastime1,setPastime1]=React.useState('');
    //let [counter1,setCounter1]= React.useState(0);
    //let [pastime,setPastime]=React.useState('');

    function handlePastimeChange(event){
       
        if (props.counter1 === 0){
        setPastime1(event.currentTarget.value);
        props.setPtime(pastime1);   
        }
        else{
         setPastime2(event.currentTarget.value);
        }
        
        if(props.ptime === pastime2){
          props.setCounter2(props.counter2 + 1);
            }   
    }
    return(
        <div>
            <form>
             <div>
               <h2>Question 1 of 7</h2>
             </div>
             
             <div className="container">
                <label className="question">What is my favourite pastime when I get bored?</label>
                
                    <div className="inputContainer">
                       <div className="topics">
                        <label  >Reading a book</label>
                        <input name= 'pastime' value = 'reading' type='radio' checked={pastime1==="reading"|| pastime2==="reading"} onChange={handlePastimeChange} /> 
                        </div>
                        <div className="topics">
                        <label >Gardening</label>
                        <input name= "pastime" value = 'gardening' type="radio" checked={pastime1==="gardening" || pastime2==="gardening"} onChange={handlePastimeChange} />
                        </div>
                        <div className="topics">
                          <label>Browsing Internet</label>
                        <input name= "pastime" value='browsing' type="radio" checked={pastime1==="browsing" || pastime2==="browsing"}  onChange={handlePastimeChange} />
                        </div>
                        <div className="topics">
                          <label>Watching TV </label>
                        <input name= "pastime" value= 'watching' type="radio" checked={pastime1==="watching" || pastime2==="watching"} onChange={handlePastimeChange} />
                        </div>
                    </div>
               </div>
            
            <div className="link">
                <button>
                    <Link to = "/Question2"> Next </Link>
                    </button>
            </div>
            </form>
        </div>
    );
}

export default Question1;