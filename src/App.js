import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
