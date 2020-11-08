import React from 'react'

import DevActus from './DevActus/DevActus'
import NouveautesDev from './Nouveautés/NouveautesDev'
import TopDev from './TopDev/TopDev'
import SondageDev from './Sondages/SondagesDev'


class AccueilDev extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Acceuil Dev</h1>
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