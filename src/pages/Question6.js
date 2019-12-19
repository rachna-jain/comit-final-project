import React from 'react';
import {Link} from 'react-router-dom';

function Question6(props){
    
        let [ value1 ,setValue1]=React.useState('');
        let [ value2,setValue2]=React.useState('');

    function handleValueChange(event){
        if (props.counter1 === 0){
            setValue1(event.currentTarget.value);
            props.setVl(value1);   
            }
            else{
             setValue2(event.currentTarget.value);
            }
            
            if(props.vl === value2){
              props.setCounter2(props.counter2 + 1);
                }   
        }
      
    return(
        <div>
            <form>
                <div>
                    <h2>Question6 of 7</h2>
                 </div>
                 <div className="container">
                     <label className="question">What do I Value most ?</label>
                    <div className="inputContainer">
                        <div className="topics">
                            <label>Trust</label>
                            <input name= 'values' value = 'trust' type='radio' checked={value1==="trust"||value2==="trust"} onChange={handleValueChange}/> 
                        </div>
                        <div className="topics">
                            <label>Money</label>
                            <input name= "values" value = "money" type="radio" checked={value1==="money" || value2==="money"}  onChange={handleValueChange}/>
                        </div>
                        <div className="topics">
                            <label>Fame</label>
                            <input name= "values" value="fame" type="radio" checked={value1==="fame"|| value2==="fame"} onChange={handleValueChange} />
                        </div>
                        <div className="topics">
                            <label>Honesty</label>
                            <input name= "values" value= "honesty" type="radio" checked={value1==="honesty"||value2==="honesty"} onChange={handleValueChange} />
                        </div>
                    </div> 
                </div>
                <div className="links">
                     <button>
                         <Link to = "/Question7"><h3>Next </h3></Link>
                     </button>
                 </div>
            </form>
        </div>
    );
}

export default Question6;
