import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import '../src/component/page/HomePage'
import { Routes , Route } from 'react-router-dom';
import HomePage from '../src/component/page/HomePage';

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
