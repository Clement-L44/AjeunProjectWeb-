import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom'

/*Components*/
import App from './App';
import Accueil from './components/Accueil/Accueil';
import AccueilTech from './components/AccueilTech/AccueilTech';
import AccueilDev from './components/Dev/AccueilDev';
import Nouveautes from './components/Dev/Nouveautés/Nouveautes';



const routing = (

  <Router>
      <div>
          <Route path="/" component = {App}></Route>
          <Route exact path= "/accueil" component= {Accueil}></Route>
          <Route exact path= "/tech" component= {AccueilTech}></Route>
          <Route exact path="/dev" component={AccueilDev}></Route>
          <Route exact path="/interview" component={AccueilDev}></Route>
          <Route exact path="/nouveautés" component= {Nouveautes}></Route>
      </div>
  </Router>

)

ReactDOM.render(routing, document.getElementById('root'));


