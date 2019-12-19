import React from 'react';
import {Link} from 'react-router-dom';

function Question4(props){
    let [ food1 ,setFood1]=React.useState('');
    let [ food2 ,setFood2]=React.useState('');

    function handleCartoonChange(event){
        if (props.counter1 === 0){
            setFood1(event.currentTarget.value);
            props.setFood(food1);   
            }
            else{
             setFood2(event.currentTarget.value);
            }
            
            if(props.food === food2){
              props.setCounter2(props.counter2 + 1);
                }   
        }
        
    return(
        <div>
            <form>
                <div>
                    <h2>Question 4 of 7</h2>
                </div>
                <div className="container">
                    <label className="question">Which Food I Detest most ?</label>
                    <div className="inputContainer">
                        <div className="topics">
                            <label>Pasta</label>
                            <input name= 'food' value = 'pasta' type='radio' checked={food1==="pasta" || food2==="pasta"} onChange={handleCartoonChange}/>
                         </div>
                        <div className="topics">
                            <label>Zuchinni</label>
                            <input name= "food" value = "zuchinni" type="radio" checked={food1==="zuchinni" || food2==="zuchinni"} onChange={handleCartoonChange}/>
                        </div>
                        <div className="topics">
                            <label>Red Meat</label>
                            <input name= "food" value="meat" type="radio" checked={food1==="meat" || food2==="meat"} onChange={handleCartoonChange}/>
                        </div>
                        <div className="topics">
                            <label>Tomato</label>
                            <input name= "food" value= "tomato" type="radio" checked={food1==="tomato"|| food2==="tomato"} onChange={handleCartoonChange}/>
                        </div>                             
                    </div>
                 </div>
                <div>
                     <button>
                        <Link to = "/Question5"><h3>Next </h3></Link>
                     </button>
                 </div>
             </form>
         </div>
    );
}

export default Question4;