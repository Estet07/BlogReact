import "./App.css";
import Hello from "./components/Hello/Hello";
import Hobby from "./components/Hobby/Hobby";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [counterLeft, setCounterLeft] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  const [counterHistory, setCounterHistory] = useState('')
  
  const clickLeft = () => {
    setCounterLeft(counterLeft + 1)
    setCounterHistory(counterHistory + 'L, ')
  }

  const clickRight = () => {
    setCounterRight(counterRight + 1)
    setCounterHistory(counterHistory + 'R, ')
  }
  const clikClear = () => {
    setCounterLeft(0)
    setCounterRight(0)
    setCounterHistory('')
  }
  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }

  // const handleClickMinus = () => {
  //   setCounter(counter - 1)
  // }
  // const handleClickDelete = () => {
  //   setCounter(0)
  // }

  return (
    <div className="App">
      <Header />
      <p style={{fontSize: '60px'}}> Клик левой кнопки {counterLeft} </p>
      <p style={{fontSize: '60px'}}> Клик правой кнопки {counterRight} </p>
      <button onClick={clickLeft}>Клик левой кнопки</button>
      <button onClick={clikClear}>Обнулить</button>
      <button onClick={clickRight}>Клик правой кнопки</button>
      <h1>История кликов {counterHistory}</h1>
      <Hello name = "Arsen" age= "23"/>
      <Hobby hobby= "Football, Boxing, Proper nutrition."/>
      <Hello name= "Kenan" age= "21"/>
      <Hobby hobby= "Counter-Strike, Army."/>
      <Hello name= "Kairat" age= "17"/>
      <Hobby hobby= "Frontend, English."/>
      <Footer />
    </div>
  );
}

export default App;


//Feature Slices
//rsc

//ДЗ. Создать Компонент Hobby
// 1. В компоненте в теге h5 должны отображаться хобби, которые вы передаете как пропс
// Вызвать компонент Hobby под компонентом Hello каждого пользователя
// 2. В компонент Hello так же передавать пропс age и отобразите его в другом
// теге p внутри компонента hello. Передать age для каждого <Hello />