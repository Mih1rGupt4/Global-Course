import logo from './logo.svg';
import './App.css';
import Header from './header';
import Content from './Content';
import DemoForm from './components/DemoForm'
import MtoKM from './components/MtoKM';
import GroceryList from './components/GroceryList';
import GroceryListNew from './components/GroceryListNew';
import Employee from './components/Employee';

function App() {

  const groceryitems=[
    {
        'slno':1,
        'item':'Rice',
        'rate':60,
        'qty':10,
        'amount':600
    },
    {
        'slno':2,
        'item':'Dal',
        'rate':90,
        'qty':2,
        'amount':180
    },
    {
        'slno':3,
        'item':'Oil',
        'rate':100,
        'qty':2,
        'amount':200
    },
]

  return (
    <div className="App">
      {/**
        <Header/>
        <Content/>
        <h1>Welcome to React</h1>
        <MtoKM/>
        <DemoForm/>
      */}
      {/* <GroceryListNew groceryitemsdata={groceryitems}></GroceryListNew> */}
      <Employee/>
    </div>
  );
}

export default App;
