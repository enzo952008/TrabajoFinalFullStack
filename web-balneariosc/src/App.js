// src/App.js
import './App.css';
import Home from './home/home';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Route>
        <Route path="/home" component={Home} />
    </Route>
</Router>
  );
}

export default App;

