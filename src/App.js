import './App.css';
import Absa from './components/Absa';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/absa/:uuid">
            <Absa/>
          </Route>
        </Switch>
       
      </header>
    </div>
    </Router>
    
  
  );
}

export default App;
