import { useState } from 'react'
import styles from'./styles/App.module.css'
import Fight from './components/Fight'
import GameOver from './components/GameOver'
import StartMenu from './components/StartMenu'
import PlayerSummary from './components/PlayerSummary'



function App() {
 
const [mode, setMode] = useState('StartMenu');
  return (
    <div className={styles.main} >
      {mode==='StartMenu' && <StartMenu onStartClick={()=>setMode('Fight')}/>}
      {mode==='Fight' && <Fight />}
      {mode==='GameOver' && <>GameOver</>}
    </div>
  )
}

export default App
