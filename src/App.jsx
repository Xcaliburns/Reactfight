import { useState } from 'react'
import './App.css'
import Fight from './components/Fight'
import GameOver from './components/GameOver'
import StartMenu from './components/StartMenu'
import PlayerSummary from './components/PlayerSummary'
import HealthBar from './components/HealthBar'

function App() {
 
const [mode, setMode] = useState('StartMenu');
  return (
    <div >
      {mode==='StartMenu' && <StartMenu onStartClick={()=>setMode('Fight')}/>}
      {mode==='Fight' && <Fight />}
      {mode==='GameOver' && <>GameOver</>}
    </div>
  )
}

export default App
