import React, { useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false)

  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)
  
  return (
    <div className="App">
      <h1 className='bg-gray-400 p-10 md:w-1/2 rounded text-5xl my-5 font-bold mx-auto' >{amount}</h1>
      <div className='flex flex-wrap justify-center gap-5'>
      <button className='btn  bg-green-700 p-2 rounded-full text-2xl' onClick={() => depositMoney(1000)}>Deposit</button>
      <button className='btn bg-blue-400 p-2 rounded-full text-2xl' onClick={() => withdrawMoney(500) }>Widthdraw</button>
      <button className='btn btn bg-red-400 p-2 rounded-full text-2xl' onClick={() => bankrupt() }>Bankrupt</button>
      </div>

    </div>
  );
}

export default App;
