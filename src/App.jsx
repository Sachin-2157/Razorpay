import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RazorpayButton from './components/RazorpayButton'
function App() {
  

  return (
    <>
      <h1>Razorpay Integration with Frontend</h1>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RazorpayButton amount={50000} />  {/* ₹500 */}
    </div>
    </>
  )
}

export default App
