import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom'

/*Components*/
import App from './App';
import Accueil from './components/Accueil/Accueil';
import AccueilTech from './components/AccueilTech/AccueilTech';



const routing = (

  <Router>
      <div>
          <h1>Routing React</h1>
          <Route path="/" component = {App}></Route>
          <Route exact path= "/accueil" component= {Accueil}></Route>
          <Route exact path= "/tech" component= {AccueilTech}></Route>
      </div>
  </Router>

)

ReactDOM.render(routing, document.getElementById('root'));


