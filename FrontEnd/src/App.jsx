import { useState } from 'react'
import Signup from './components/Signup'
import SignupHeader from './components/SignupHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <SignupHeader />
      <main className="flex min-h-[calc(100vh-4rem)] flex-col">
        <Signup />
      </main>
    </div>
  )
}

export default App
