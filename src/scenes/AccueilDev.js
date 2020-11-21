import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import DevActus from '../components/Dev/DevActus/DevActus'
import NouveautesDev from '../components/Dev/Nouveautés/NouveautesDev'
import TopDev from '../components/Dev/TopDev/TopDev'
import SondageDev from '../components/Dev/Sondages/SondagesDev'


class AccueilDev extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Accueil Dev</h1>
                <div>
                   <NouveautesDev></NouveautesDev>
                </div>
                <div>
                    <DevActus></DevActus>
                </div>
                <div>
                    <TopDev></TopDev>
                </div>
                <div>
                    <SondageDev></SondageDev>
                </div>
            </div>
        )
    }

} export default AccueilDev