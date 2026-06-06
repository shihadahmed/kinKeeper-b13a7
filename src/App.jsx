import React from 'react'
import { toast } from 'react-toastify';

function App() {
  const notify = () => toast.success("Wow so easy!");

  return (
    <div><button onClick={notify}>Notify!</button></div>
  )
}

export default App