import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Leftworkplace from './components/Leftworkplace/Leftworkplace'
import Rightworkplace from './components/Rightworkplace/Rightworkplace'

function App() {


  return (
    <div className='apptest'>
      <div className='headertest'>
        <Header />
      </div>
      <div className='contenttest'>
        <div><Leftworkplace /></div>
        <div><Rightworkplace /></div>
      </div>
    </div>
  )
}

export default App
