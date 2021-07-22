import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import {addOne, applyNumber, changeOperation, clearDisplay} from './actions/index';

function App() {
  const [state, dispatch] = useReducer()

  /*const handleaddOne = () => {
    dispatch(addOne(1))
  }*/
  const handleApplynum = (num) => {
    dispatch(applyNumber(num))
  }

  const handleOperator = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleclear = () => {
    dispatch(clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleOperator("M+")}/>
              <CalcButton value={"MR"} onClick={handleOperator("MR")}/>
              <CalcButton value={"MC"} onClick={handleOperator("MC")}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplynum(1)}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperator("+")}/>
              <CalcButton value={"*"} onClick={handleOperator("*")}/>
              <CalcButton value={"-"} onClick={handleOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleclear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
