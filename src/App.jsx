import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matrix from './Matrix'

function App() {

  return (
    <div className = 'text-center py-4 bg-blue-300 h-screen flex flex-col items-center justify-center'>
      <span className = 'font-bold text-2xl m-4'>MATRIX</span>
      <Matrix/>
    </div>
  )
}

export default App
