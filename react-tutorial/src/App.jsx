import { useState } from 'react'
import './App.css'
import Xheader from './components/xheader'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="min-h-screen bg-white text-[#24292e]">
      <Xheader />
      {/* ここに他のコンテンツを追加できます */}
      <main className="max-w-[960px] mx-auto px-[4%]">
        {/* メインコンテンツ */}
      </main>
    </div>
  )
}

export default App