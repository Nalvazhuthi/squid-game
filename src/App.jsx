import React, { useState } from 'react'
import './assets/style/main.scss'
import RedLightGreenLight from './redLightGreenLight/redLightGreenLight'
const App = () => {
  const [game, setGame] = useState("redLightGreenLight")

  return (
    <div className='main-content'>
      {game === "redLightGreenLight" && <RedLightGreenLight />}

    </div>
  )
}

export default App
