import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './component/page/navbar'
import { Routes , Route } from 'react-router-dom';
import HomePage from './component/page/HomPage';

function App() {
  

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}

export default App
