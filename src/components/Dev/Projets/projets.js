import React from 'react'


class Projets extends React.Component {

    constructor(props){
        super(props);
     
        this.state = {
            projets : null,
            projet : null,
            topProjets : null,
            loading: true,
        };
    }

    

    async componentDidMount() {

        const current = new Date();
        const date = `${current.getFullYear()}`;

        const urlProjet = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/18&type=/api/types/12&itemPerPage=1"
        const responseProjet = await fetch(urlProjet);
        const dataProjet = await responseProjet.json();
        this.setState({ projet : dataProjet['hydra:member'], loading: false});

        const urlProjets = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/18&type=/api/types/12"
        const responseProjets = await fetch(urlProjets);
        const dataProjets = await responseProjets.json();
        this.setState({ projets : dataProjets['hydra:member'], loading: false});

        const urlTopProjets = "http://127.0.0.1:8000/api/articles?order[Aime]=desc&categorie=/api/categories/18&type=/api/types/12&date[after]="+date+"-01-01&date[before]="+date+"12-31&itemPerPage=5"
        const responseTopProjets = await fetch(urlTopProjets);
        const dataTopProjets = await responseTopProjets.json();
        this.setState({ topProjets : dataTopProjets['hydra:member'], loading: false});

    }

    render(){

        if(this.state.loading) {
            return <div>Loading...</div>
        }
        if(!this.state.projets) {
            return <div>Pas d'articles</div>
        }

        return(
            <div>
                <div>
                    {(this.state.projet || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>
                <div>
                    <h1>Projets</h1>
                    {(this.state.projets || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>
                <div>
                    <h1>TOP PROJETS 2020</h1>
                    {(this.state.topProjets || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>
                
            </div>

        )
    }

} export default Projets