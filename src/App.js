import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/homePage';
import MyForm from './pages/form';



export default function App() {
const [displayForm, setForm] = useState(false);

const toggleForm = () => {
  setForm(!displayForm);
};


return (
    <div className='app'>
     <HomePage toggleForm={toggleForm}/>
    {displayForm?
    <MyForm form={toggleForm}/>:""
    }
    </div>    
  )
}


