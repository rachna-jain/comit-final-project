import React from'react';
import {Link} from 'react-router-dom';

function Question5(props){
    let [ icecream1 ,setIcecream1]=React.useState('');
    let [ icecream2 ,setIcecream2]=React.useState('');

    function handleIcecreamChange(event){
        if (props.counter1 === 0){
            setIcecream1(event.currentTarget.value);
            props.setIc(icecream1);   
            }
            else{
             setIcecream2(event.currentTarget.value);
            }
            
            if(props.ic ===icecream2){
              props.setCounter2(props.counter2 + 1);
                }   
        }    
   
    return(
        <div>
            <form>
                <div>
                    <h2>Question 5 of 7</h2>
                 </div>
                 <div className="container">
                     <label className="question">Which is my Favorite Ice-cream Favor ?</label>
                    <div className="inputContainer">
                        <div className="topics">
                            <label>Chocolate</label>
                            <input name= 'icream' value = 'chocolate' type='radio' checked={icecream1==="chocolate"||icecream2==="chocolate"} onChange={handleIcecreamChange}/> 
                        </div>
                        <div className="topics">
                            <label>Blueberry</label>
                            <input name= "icream" value = "blueberry" type="radio" checked={icecream1==="blueberry" || icecream2==="blueberry"} onChange={handleIcecreamChange} />
                        </div>
                        <div className="topics">
                            <label>Strawberry</label>
                            <input name= "icream" value="strawberry" type="radio" checked={icecream1==="strawberry" || icecream2==="strawberry"} onChange={handleIcecreamChange}/>
                        </div>
                        <div className="topics">
                            <label>Black Currant</label>
                            <input name= "icream" value= "blackcurrant" type="radio" checked={icecream1==="blackcurrant" || icecream2==="blackcurrant"} onChange={handleIcecreamChange} />                    </div>
                        </div>
                 </div>
                 <div>
                    <button>
                         <Link to = "/Question6"><h3>Next </h3></Link>
                     </button>
                 </div>
             </form>
        </div>
    );
}

export default Question5;