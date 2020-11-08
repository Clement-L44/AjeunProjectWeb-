import React from 'react'
import ActusAccueil from './Actus/ActusAccueil'
import PodiumActus from './PodiumActus/PodiumActus'
import TopSondages from './TopSondages/TopSondages'



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