import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom'

/*Components*/
import Accueil from './scenes/Accueil';
import Header from './components/Header/header';
import Footer from './components/Footer/footer.js';
import AccueilTech from './scenes/AccueilTech';
import AccueilDev from './scenes/AccueilDev';
import Interviews from './components/Dev/Interview/Interviews';
import Projets from './components/Dev/Projets/projets';
import TestTech from './components/AccueilTech/TestTech/TestTech';
import TechActus from './components/AccueilTech/ActusTech/TechActus';
import Actus from './components/Dev/DevActus/Actus';
import CreerUnCompte from './components/Connexion/CreerUnCompte';
import Admin from './Admin';
import Markdown from './components/Admin/Markdown/Markdown';
import MonCompteAdmin from './components/Admin/MonCompte/MonCompteAdmin';

const routing = (
  <Router>   
      <div>
        <Header></Header>
          <Route exact path= "/" component= {Accueil}></Route>
          <Route exact path= "/tech" component= {AccueilTech}></Route>
          <Route exact path="/tech/actus" component = {TechActus}></Route>
          <Route exact path="/tech/tests" component = {TestTech}></Route>
          <Route exact path="/dev" component={AccueilDev}></Route>
          <Route exact path="/dev/actus" component={Actus}></Route>
          <Route exact path="/dev/interviews" component={Interviews}></Route>
          <Route exact path="/dev/projets" component={Projets}></Route>
          <Route exact path="/admin/admin" component={Admin}></Route>
          <Route exact path="/admin/monCompte" component={MonCompteAdmin}></Route>
          <Route exact path="/creerUnCompte" component={CreerUnCompte}></Route>
          <Route exact path="/markdown" component={Markdown}></Route> 
         <Footer></Footer>  
      </div>
  </Router>

)

ReactDOM.render(routing, document.getElementById('root'));


