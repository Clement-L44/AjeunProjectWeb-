import React from 'react'


class SondageDev extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            sondages : null,
            article : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlSondageDev = "http://127.0.0.1:8000/api/sondages?order[nbr_votes]=desc&article.categorie=/api/categories/18&itemPerPage=3"
        const responseSondageDev = await fetch(urlSondageDev);
        const dataSondageDev = await responseSondageDev.json();
        this.setState({ sondages : dataSondageDev['hydra:member'], loading: false});

        
    }

    render(){

        if(this.state.loading) {
            
            return <div>Loading...</div>
        }
        if(!this.state.sondages) {
            return <div>Pas de sondages</div>
        }

        return(
            <div>
                <h1>SondageDev</h1>
                <div>
                    {this.state.sondages.map((item, index) => {return (<li key= {index}>{item.titre} - {(item.reponse).map((rep) => rep.libelle)} - {(item.article || []).map((article) => {(article.categorie).map((cat) => cat.libelle)})}</li>)})}
                </div>
            </div>
        )
    }

} export default SondageDev