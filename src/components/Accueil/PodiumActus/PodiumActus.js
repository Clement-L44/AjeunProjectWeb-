import React from 'react'



class PodiumActus extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading : true,
            actus : null,
        };
    }

    async componentDidMount () {

        const urlPodiumActus = "http://127.0.0.1:8000/api/articles?order[Aime]=desc&order[date]=desc&itemPerPage=3"
        const responsePodiumActus = await fetch(urlPodiumActus);
        const dataPodiumActus = await responsePodiumActus.json();
        this.setState({ actus : dataPodiumActus['hydra:member'], loading: false});

    }

    render(){
    
        
        if(this.state.loading) {
            return <div>Loading...</div>
        }
        if(!this.state.actus) {
            return <div>Pas d'articles</div>
        }
        
        return (
            <div>
                <h1>Podium de l'actu</h1>
                <div>
                    <ul>
                        {this.state.actus.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}
                    </ul>
                </div>
            </div>
        )
    }
}
export default PodiumActus