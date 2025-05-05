import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RazorpayButton from './components/RazorpayButton'
function App() {
  

  return (
    <>
      <h1>new</h1>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RazorpayButton keyId="rzp_test_Q1Xv0fds2p6TzS" amount={50000} />
    </div>
    </>
  )
}

export default App
