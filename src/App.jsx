import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Mainroutes from './routes/Mainroutes';
import Nav from './components/Nav';
import { asyncurrentuser } from './store/action/userAction';
import { asyncloadproduct } from './store/action/productAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncurrentuser()); // fetch current user on app mount
    dispatch(asyncloadproduct)
  }, [dispatch]); // runs once

  return (
    <div className='text-white font-thin w-screen h-screen bg-gray-800'>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
