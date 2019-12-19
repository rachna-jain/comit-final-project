import React from 'react';
import{
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import Page2 from './pages/Page2';
import EnterName from './pages/EnterName';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import Question6 from './pages/Question6';
import Question7 from './pages/Question7';
import Submit1 from './pages/Submit1';
import Check from './pages/Check';
import FriendName from './pages/FriendName';
import Complete from './pages/Complete';

import './App.css';

function App() {
 
  let [counter1,setCounter1]=React.useState(0);
  let [counter2,setCounter2]=React.useState(0);
  let [name,setName]= React.useState('');
  let [fname,setFName]= React.useState('');
 
  let [ptime,setPtime]=React.useState(null);
  let [hday,setHday]=React.useState('');
  let [ctoon,setCtoon]=React.useState('');
  let [food,setFood]=React.useState('');
  let [ic,setIc]=React.useState('');
  let [vl,setVl]=React.useState('');
  let [int,setInt]=React.useState('');
 

  return (
    <BrowserRouter basename={'/comit-final-project'}>  
     <div>
       <Route path="/" component ={IndexPage} exact={true}/>
       <Route path="/page2" component={Page2} exact={true} ><Page2 counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route  path="/enterName" exact={true} ><EnterName counter1={counter1} name ={name} setName={setName} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route  path="/Question1" exact={true} ><Question1 ptime={ptime} setPtime={setPtime} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Question2" exact={true} ><Question2 hday={hday} setHday={setHday} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Question3" exact={true} ><Question3 ctoon={ctoon} setCtoon={setCtoon} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Question4" exact={true} ><Question4 food={food} setFood={setFood} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Question5" exact={true} ><Question5 ic={ic} setIc={setIc} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Question6" exact={true} ><Question6 vl={vl} setVl={setVl} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Question7" exact={true} ><Question7 int={int} setInt={setInt} counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /></Route>
       <Route path="/Submit1" exact={true} ><Submit1 counter1={counter1} counter2={counter2} setCounter1={setCounter1} setCounter2={setCounter2} /> </Route>
       <Route path="/Check" exact={true} ><Check counter1={counter1} counter2={counter2} name={name} fname={fname} /></Route>
       <Route path="/FriendName" exact={true}><FriendName counter1={counter1} counter2={counter2} name ={name} fname={fname} setFName={setFName} ></FriendName></Route>
       <Route path="/Complete" exact={true}><Complete counter1={counter1} counter2={counter2} name={name} fname={fname} ></Complete></Route>    
    </div>
    </BrowserRouter>
 
  );
}

export default App;
