import logo from './logo.svg';
import './App.css';
import Header from './header';
import Content from './Content';
import DemoForm from './components/DemoForm'
import MtoKM from './components/MtoKM';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      <h1>Welcome to React</h1>
      <MtoKM></MtoKM>
      {/* <DemoForm/> */}
    </div>
  );
}

export default App;
