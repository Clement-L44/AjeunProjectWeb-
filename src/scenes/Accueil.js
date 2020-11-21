import React from 'react'
import ActusAccueil from '../components/Accueil/Actus/ActusAccueil'
import PodiumActus from '../components/Accueil/PodiumActus/PodiumActus'
import TopSondages from '../components/Accueil/TopSondages/TopSondages'



class Accueil extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <ActusAccueil></ActusAccueil>
                </div>
                <div>
                    <PodiumActus></PodiumActus>
                </div>  
                <div>
                    <TopSondages></TopSondages>
                </div>             
            </div>

        )
    }

} export default Accueil