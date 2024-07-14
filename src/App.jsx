import { useState } from 'react'
import Board from './tictacgame/Board'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board/>
    </>
  )
}

export default App
