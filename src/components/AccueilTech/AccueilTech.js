import React from 'react'
import LastTech from './LastTech/LastTech'
import ActusTech from './ActusTech/ActusTech'
import SondageTech from './SondageTech/SondageTech'
//import TestTech from './TestTech/TestTech' 


class AccueilTech extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>AccueilTech</h1>
                <div>
                    <LastTech></LastTech>
                </div>
                <div>
                    <ActusTech></ActusTech>
                </div>
                <div>
                    <SondageTech></SondageTech>
                </div>
                <div>
                    
                </div>
            </div>

        )
    }

} export default AccueilTech