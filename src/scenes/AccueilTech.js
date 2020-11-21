import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import LastTech from '../components/AccueilTech/LastTech/LastTech'
import ActusTech from '../components/AccueilTech/ActusTech/ActusTech'
import SondageTech from '../components/AccueilTech/SondageTech/SondageTech'
import TopTech from '../components/AccueilTech/TopTech/TopTech'


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
                    <TopTech></TopTech>
                </div>
            </div>

        )
    }

} export default AccueilTech