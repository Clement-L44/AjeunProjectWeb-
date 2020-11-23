import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class AdminAccueil extends React.Component {

    constructor(props){
        super(props);  
        this.state = {
            articles: null,
            LastArticles: null,
            loading: true,
            likes : 0,
            nbr_articles: 0,
        };
    }

    async componentDidMount() {

        const urlLastActus = "http://127.0.0.1:8000/api/articles?order[date]=desc&itemPerPage=3"
        const responseLastActus = await fetch(urlLastActus);
        const dataLastActus = await responseLastActus.json();
        this.setState({ LastArticles : dataLastActus['hydra:member'], loading: false});

        const urlArticles = "http://127.0.0.1:8000/api/articles"
        const responseArticles = await fetch(urlArticles);
        const dataArticles = await responseArticles.json();
        this.setState({ nbr_articles : dataArticles['hydra:member'].length, loading: false});

        const urlLikes = "http://127.0.0.1:8000/api/articles"
        const responseLikes = await fetch(urlLikes);
        const dataLikes = await responseLikes.json();
        this.setState({ articles : dataLikes['hydra:member'], loading: false});
    
        for(let i = 0 ; i < this.state.articles.length ; i++) {
            let ArticleLike = this.state.articles[i].Aime;
            this.setState({ likes : this.state.likes+ArticleLike , loading : false});
        }
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
                <CardContent>
                <div>
                   <h1>Derniers Contenus</h1>
                    {this.state.LastArticles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}
                </div>
                <div>
                    <h1>Statistiques</h1>
                    <h3>{this.state.nbr_articles} Articles</h3>
                </div>
                <div>
                    <h1>Likes</h1>
                    <h3>{this.state.likes}</h3>
                </div>
                </CardContent>
            </div>

        )
    }

} export default AdminAccueil