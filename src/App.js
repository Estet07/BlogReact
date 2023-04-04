import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";



function App() {
  return (
    <div className="App">
      <Header />
        <Posts />
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