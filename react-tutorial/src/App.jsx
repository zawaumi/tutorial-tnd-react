import { useState } from 'react'
import './App.css'
import Exhibit from './components/exhibit'
import Xheader from './components/xheader'
import Xaboutus from './components/xaboutus'

function App() {
  const [count, setCount] = useState(0)
  
  return (

    <div className="min-h-screen bg-white text-[#24292e]">
      <Xheader />
      {/* ここに他のコンテンツを追加できます */}
      <main className="max-w-[960px] mx-auto px-[4%]">
        <Exhibit>

      </Exhibit>
        <Xaboutus />
      </main>
    </div>
  )
}

export default App