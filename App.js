import React, { useState, useEffect } from 'react';
import './App.css';
// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ClassComponentCounter from './component/ClassComponentCounter';
//import FunctionalComponentCounter from './component/FunctionalComponentCounter';
//import MousePointer from './component/MousePointer';
//import MousePointerFunction from './component/MousePointerFunction';
// import Timeclass from './component/Timeclass';
// import TimeClassreverse from './component/TimeClassreverse';
// import TimerFunction from './component/TimerFunction';
// import ClickCounter from './component/ClickCounter';
// import HoverCount from './component/HoverCount';
// import Zomato from './component/zomato';
//  import Emoji from './component/Emoji';
// import E-commerse from './component/E-commerse';
// import Greet from './component/Greet';
// import Calc from './calc_fol/Calc';
// import Welcome from './component/Welcome1';
// import BMICalculator from './bmi-fol/BMICalculator';
// import Functionclick from './component/Functionclick';
// import Classclick from './component/Classclick';
// import Nameless from './component/Nameless';
// import Emojipicker from 'emoji-picker-react'
// import ComponentD from './component/ComponentD'
//  export const UserContext= React.createContext();
// function App() {
  
//  return (
//    <div className="App">
     {/* <UserContext.provider value={'bhavani'}><ComponentD/></UserContext.provider> */}
    {/* <Greet name="Bhavani" heroName="Devarakonda"/>
    <Greet name="peetani"/>
    <Greet name="shiney"/> */}
        {/* <Welcome name="vijay"/> */}
      {/* <Functionclick/>
      <Classclick/> */}
      {/* <Emoji/> */}
      {/* <E-commerse/> */}
      {/* <Zomato/> */}
      {/* <ClickCounter/>
      <HoverCount/> */}
       {/* <ClassComponentCounter/> */}
      {/* <FunctionalComponentCounter/>  */}
      {/* <MousePointer/>
      <MousePointerFunction/> */}
      {/* <Timeclass/>
      <TimeClassreverse/> */}
      {/* <TimerFunction/> */}
{/*       
    </div>
  );
}

export default App; */}


function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (gameRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameRunning(false);
    }
  }, [gameRunning, timeLeft]);

  const handleImageClick = () => {
    if (gameRunning) {
      setScore(prevScore => prevScore + 1);
    }
  };

  // const handleTopClick = () => {
  //   if (gameRunning) {
  //     setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
  //   }
  // };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameRunning(true);
  };

  return (
    <div className="App">
      <h1>Click the Image </h1>
      <h2>Click on the image as many times as you can in {timeLeft} wacky seconds.</h2>
      <br/>
      
      {/* <p>Time Left: {timeLeft} seconds</p> */}
      <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cSMXKPoduDrrPJ7WtsOnH0XZbk0co0TTug&usqp=CAU" alt="Click Me!" width="400" height="400" onClick={handleImageClick} />
        {/* <div className="top-click-area" onClick={handleTopClick}></div> */}
        <p>Score: {score}</p>
      </div>
      {!gameRunning && <p>Game over!!! <br/>Your Score: {score}</p>}
      <br/>
      <button onClick={restartGame} disabled={gameRunning}>Restart Game</button>
    </div>
  );
}

export default App;
