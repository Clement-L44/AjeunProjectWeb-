import React from 'react'
import ActusTech from './ActusTech';


class TechActus extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            actusTech : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlTechActus = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/17"
        const responseTechActus = await fetch(urlTechActus);
        const dataTechActus = await responseTechActus.json();
        this.setState({ articles : dataTechActus['hydra:member'], loading: false});

        const urlLastTechActu = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/17&itemPerPage=1"
        const responseLastTechActu = await fetch(urlLastTechActu);
        const dataLastTechActu = await responseLastTechActu.json();
        this.setState({ actusTech : dataLastTechActu['hydra:member'], loading: false});

    }

    render(){

        if(this.state.loading) {
            return <div>Loading...</div>
        }
        if(!this.state.articles) {
            return <div>Pas d'articles</div>
        }

        return(
            <div>
                <div>
                    {(this.state.actusTech || []).map ((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>
                <h1>Dev Actus</h1>
                <div>
                    {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>           
            </div>


        )
    }

} export default TechActus