
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeadComponent from './components/HeadComponent';
import FootComponent from './components/FootComponent';
import CreateSupplierComponent from './components/CreateSupplierComponent';
//import ViewSupplierComponent from './components/ViewSupplierComponent';

function App() {
  return (
    <div>
      <Router>
        {<HeadComponent />}
        <div className="container">
          <Switch>
            <Route path="/" exact component={CreateSupplierComponent}></Route>
            <Route path="/add-supplier/:supplierUserName" component={CreateSupplierComponent}></Route>
                        
             {/* <Route path="/" exact component={ViewSupplierComponent}></Route> 
             <Route path = "/supplier" component = {ViewSupplierComponent}></Route> */}
          </Switch>
        </div>
        {<FootComponent />}
      </Router>
    </div>
  );
}

export default App;

