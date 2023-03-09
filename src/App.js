import "./App.css";
import Hello from "./components/Hello/Hello";
import Hobby from "./components/Hello/Hobby";

function App() {
  return (
    <div className="App">
      <h1>Приветствие</h1>
      <Hello name = "Arsen" age= "23"/>
      <Hobby hobby= "Football, Boxing, Proper nutrition."/>
      <Hello name= "Kenan" age= "21"/>
      <Hobby hobby= "Counter-Strike, Army."/>
      <Hello name= "Kairat" age= "17"/>
      <Hobby hobby= "Frontend, English."/>
    </div>
  );
}

export default App;


//Feature Slices


//ДЗ. Создать Компонент Hobby
// 1. В компоненте в теге h5 должны отображаться хобби, которые вы передаете как пропс
// Вызвать компонент Hobby под компонентом Hello каждого пользователя
// 2. В компонент Hello так же передавать пропс age и отобразите его в другом
// теге p внутри компонента hello. Передать age для каждого <Hello />