import React from 'react'


class TopSondages extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            loading : null,
            sondages : null,
        };
    }

    async componentDidMount() {

        const urlSondages = "http://127.0.0.1:8000/api/sondages?order[nbr_votes]=desc&itemPerPage=3"
        const responseSondages = await fetch(urlSondages);
        const dataSondages = await responseSondages.json();
        this.setState({ sondages : dataSondages['hydra:member'], loading: false});
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
                <h1>Top Sondages</h1>
                <div>
                    <ul>
                        {this.state.sondages.map((item, index) => {return (<li key= {index}>{item.titre} - {(item.reponse).map((rep) => rep.libelle)}</li>)})}
                    </ul>
                </div>  
            </div>

        )
    }

} export default TopSondages