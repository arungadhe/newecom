
import './App.css';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './Product';
import Produ from './Produ';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={Produ}/>


      </Switch>

    </>
  );
}

export default App;
