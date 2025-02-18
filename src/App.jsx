import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponet from './componets/Mycomponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Mycomponet></Mycomponet>
	    </div>
    </>
  )
}

export default App
