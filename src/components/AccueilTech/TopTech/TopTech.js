import React from 'react'


class TopTech extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlTopTech= "http://127.0.0.1:8000/api/articles?order[Aime]=desc&categorie=/api/categories/17&itemPerPage=3"
        const responseTopTech = await fetch(urlTopTech);
        const dataTopTech = await responseTopTech.json();
        this.setState({ articles : dataTopTech['hydra:member'], loading: false});

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
                <h1>Top Tech</h1>
                {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
            </div>

        )
    }

} export default TopTech