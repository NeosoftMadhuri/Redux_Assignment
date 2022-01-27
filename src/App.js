import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import Product from './Components/Product';
import Navi from './Components/Navi';

function App() {
  return (
    <>
      <Router>
    {/* <Navi/> */}
   <Switch>
   <Route path="/product" exact component={Product} />
    </Switch>
    </Router>
   
    </>
  );
}

export default App;
