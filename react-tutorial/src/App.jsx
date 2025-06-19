import { useState } from 'react'
import './App.css'

import Xheader from './components/xheader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <html className='text-[100%] leading-none box-border text-[#24292e]'>
        <body className='m-0'>
          <Xheader></Xheader>
        </body>
      </html>
    </>
  )
}

export default App