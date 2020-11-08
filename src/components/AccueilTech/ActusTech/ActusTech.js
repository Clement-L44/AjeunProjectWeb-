import React from 'react'


class ActusTech extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlActusTech = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/11"
        const responseActusTech = await fetch(urlActusTech);
        const dataActusTech = await responseActusTech.json();
        this.setState({ articles : dataActusTech['hydra:member'], loading: false});

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
                <h1>Tech Actus</h1>
                {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
            </div>

        )
    }

} export default ActusTech