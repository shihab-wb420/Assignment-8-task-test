import { useState } from 'react'
import Header from './components/Header/Header'
import Tecno from './components/Tecno/Tecno'
import { Toaster } from 'react-hot-toast';



function App() {
 // const [count, setCount] = useState(0)
  return (
   <>

      <Header></Header>
      <Tecno></Tecno>
      
      <Toaster/>
    </>
  )
}
export default App
