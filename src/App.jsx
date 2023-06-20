import { useMouse } from '@uidotdev/usehooks';
import Popup from './comps/Popup';
import Background from './comps/Background';
import LowerNav from './comps/LowerNav';
import Points from './comps/Points';
import { useState } from 'react';
import './css/App.css'

import { useSelector } from 'react-redux';
import { puzzleSelector } from './store/features/puzzlesSlice';
import { currentPuzzleSelector } from './store/features/progressSlice';

function App() {
  // const [mouse, ref] = useMouse();
  const [popUp, setPopup] = useState(false);
  
  const puzzles = useSelector(puzzleSelector);
  const currentPuzzle = useSelector(currentPuzzleSelector);

  // if(mouse.x > 340 && mouse.x < 360 && mouse.y > 250 && mouse.y < 270) {
  //   console.log("You found a puzzle")
  // } 

  const openPopup = ()=>{
    setPopup(!popUp);
  }

  console.log(currentPuzzle);
  return (
    <>
      <Background />

      {popUp ? <Popup currentPuzzle={currentPuzzle} openPopup={openPopup}/> : <></>}
      
      <div className="hud">
        <Points puzzles={puzzles} openPopup={openPopup}/>
        <LowerNav />
      </div>
    </>
  )
}

export default App
