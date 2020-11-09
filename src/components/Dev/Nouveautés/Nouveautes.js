import React from 'react'


class Nouveautes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            article : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlNouveautes = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/13"
        const responseNouveautes = await fetch(urlNouveautes);
        const dataNouveautes = await responseNouveautes.json();
        this.setState({ articles : dataNouveautes['hydra:member'], loading: false});
        console.log(this.state.articles);

        const urlLastNouveautes = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/13&itemPerPage=1"
        const responseLastNouveautes = await fetch(urlLastNouveautes);
        const dataLastNouveautes = await responseLastNouveautes.json();
        this.setState({ article : dataLastNouveautes['hydra:member'], loading: false});
        console.log(this.state.article);

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
                <h1>Nouveautés</h1>
                
                <div>
                    {(this.state.article || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}                  
                </div>
                
                <ul>
                    {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </ul>                     
            </div>
        )
    }

} export default Nouveautes