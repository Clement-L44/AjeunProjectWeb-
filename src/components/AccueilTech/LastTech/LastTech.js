import React from 'react'


class LastTech extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlLastTech = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/11&itemPerPage=3"
        const responseLastTech = await fetch(urlLastTech);
        const dataLastTech = await responseLastTech.json();
        this.setState({ articles : dataLastTech['hydra:member'], loading: false});

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
                <h1>Dernières Actus</h1>
                {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
            </div>

        )
    }

} export default LastTech