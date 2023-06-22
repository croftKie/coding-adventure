import { useMouse } from '@uidotdev/usehooks';
import { useState } from 'react';

import Popup from './comps/Popup';
import Background from './comps/Background';
import LowerNav from './comps/LowerNav';
import Points from './comps/Points';
import Splash from './comps/Splash';
import Settings from './comps/Settings';

import './css/App.css'

import { useSelector } from 'react-redux';
import { puzzleSelector } from './store/features/puzzlesSlice';
import { currentPuzzleSelector } from './store/features/progressSlice';

import { gsap } from 'gsap';

function App() {
  // const [mouse, ref] = useMouse();
  const [popUp, setPopup] = useState(false);
  const [splash, openSplash] = useState(false);
  const [save, openSave] = useState(false);
  const [classroom, openClassroom] = useState(false);
  
  const puzzles = useSelector(puzzleSelector);
  const currentPuzzle = useSelector(currentPuzzleSelector);

  // if(mouse.x > 340 && mouse.x < 360 && mouse.y > 250 && mouse.y < 270) {
  //   console.log("You found a puzzle")
  // } 

  const openPopup = ()=>{
    setPopup(!popUp);
  }
  const openSettings = ()=>{
    openSplash(!splash);
  }
  const openClassroomPage = ()=>{
    openClassroom(!classroom);
  }

  if (true) {
    return (
      <Splash />
    )
  }

  return (
    <>
      <Background />

      {popUp ? <Popup currentPuzzle={currentPuzzle} openPopup={openPopup}/> : <></>}

      {splash ? <Settings /> : <></>}
      {save ? <Save /> : <></>}
      {classroom ? <Classroom /> : <></>}

      <div className="hud">
        <Points puzzles={puzzles} openPopup={openPopup}/>
        <LowerNav openClassroom={openClassroomPage} openSettings={openSettings}/>
      </div>
    </>
  )
}

export default App
