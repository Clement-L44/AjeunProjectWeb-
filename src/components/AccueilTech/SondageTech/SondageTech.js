import React from 'react'


class SondageTech extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            sondages : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlSondageTech = "http://127.0.0.1:8000/api/sondages?order[nbr_votes]=desc&article.categorie=/api/categories/17&itemPerPage=3"
        const responseSondageTech = await fetch(urlSondageTech);
        const dataSondageTech = await responseSondageTech.json();
        this.setState({ sondages : dataSondageTech['hydra:member'], loading: false});
        

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
                <h1>SondageTech</h1>
                <div>
                    {this.state.sondages.map((item, index) => {return (<li key= {index}>{item.titre} - {(item.reponse).map((rep) => rep.libelle)}</li>)})}
                </div>
            </div>
        )
    }

} export default SondageTech