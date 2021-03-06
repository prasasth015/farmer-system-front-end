
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeadComponent from './components/HeadComponent';
import FootComponent from './components/FootComponent';
import CreateSupplierComponent from './components/CreateSupplierComponent';
import SupplierQuoteComponent from './components/SupplierQuoteComponent';
import ListQuoteComponent from './components/ListQuoteComponent';
import UpdateQuoteComponent from './components/UpdateQuoteComponent';
import ViewQuoteComponent from './components/ViewQuoteComponent';
import SupplierLogin from './components/SupplierLogin';

function App() {
  return (
    <div>
      <Router>
        {<HeadComponent />}
        <div className="container">
          <Switch>
            <Route path="/" exact component={CreateSupplierComponent}></Route>
            <Route path="/add-supplier/:supplierUserName" component={CreateSupplierComponent}></Route>
            <Route path="/supplierLogin" component={SupplierLogin}></Route>
            <Route path="/" exact component={ListQuoteComponent}></Route>
            <Route path="/supplierQuote" component={ListQuoteComponent}></Route>
            <Route path="/" exact component={SupplierQuoteComponent}></Route>
            <Route path="/add-supplierQuote/:quoteId" component={SupplierQuoteComponent}></Route>
            <Route path="/view-supplierQuote/:quoteId" component={ViewQuoteComponent}></Route>
            <Route path="/add-supplierQuote/:quoteId" component={UpdateQuoteComponent}></Route>
          </Switch>
        </div>
        {<FootComponent />}
      </Router>
    </div>
  );
}

export default App;

