import React from 'react'



class ActusAccueil extends React.Component {


// loading : état de chargement, 
// article : Articles correspondant aux dernières actus, 
// categorie : Regroupant les catégories ayant le plus de j'aime, 
// affichage : Correspondant à ce que l'on veut afficher.
// articlesCat1 : Articles correspondant au premier index de article.
// articlseCat2 : Articles correspondant au deuxième index de article.
// articlseCat3 : Articles correspondant au troisième index de article.
// articlseCat4 : Articles correspondant au quatrième index de article.
// articlseCat5 : Articles correspondant au cinquième index de article.
    constructor(props) {
        super (props);
        this.ClickLastActus = this.ClickLastActus.bind(this);
        this.ClickCategorie = this.ClickCategorie.bind(this);
        
        this.state = {
            loading: true,
            article: null,
            categorie: null,
            affichage : null,
            articlesCat1 : null,
            articlesCat2 : null,
            articlesCat3 : null,
            articlesCat4 : null,
            articlesCat5 : null,
        };        
    };
    
    async componentDidMount() {

        //Je récupère les catégories par ordre desc par rapport aux nombres de j'aime correspondant au nombre total de j'aime 
        //d'article ayant comme catégorie la catéogrie correspondante. 
        const urlCategorie = "http://127.0.0.1:8000/api/categories?order[aime]=desc&itemPerPage=5"
        const responseCategorie = await fetch (urlCategorie);
        const dataCategorie = await responseCategorie.json();
        this.setState({ categorie : dataCategorie['hydra:member'], loading: false});
        
        //Récupération des derniers articles publiée avec un nombre limite de 6 donc les 6 derniers.
        const urlLastActus = "http://127.0.0.1:8000/api/articles?order[date]=desc&itemPerPage=6"
        const responseLastActus = await fetch(urlLastActus);
        const dataLastActus = await responseLastActus.json();
        this.setState({ article : dataLastActus['hydra:member'], loading: false});

        //Récupération des articles correspondant à la catégorie de l'index [0] de catégorie avec un trie des dates et un nombre limite d'articles = 6.
        const urlArticlesCategorie1 = "http://127.0.0.1:8000/api/articles?categorie=/api/categories/"+this.state.categorie[0].id+"&order[date]=desc&itemPerPage=6"
        const responseArticlesCategorie1 = await fetch(urlArticlesCategorie1);
        const dataArticlesCategorie1 = await responseArticlesCategorie1.json();
        this.setState({ articlesCat1 : dataArticlesCategorie1['hydra:member'], loading: false});

        //Récupération des articles correspondant à la catégorie de l'index [1] de catégorie avec un trie des dates et un nombre limite d'articles = 6.
        const urlArticlesCategorie2 = "http://127.0.0.1:8000/api/articles?categorie=/api/categories/"+this.state.categorie[1].id+"&order[date]=desc&itemPerPage=6"
        const responseArticlesCategorie2 = await fetch(urlArticlesCategorie2);
        const dataArticlesCategorie2 = await responseArticlesCategorie2.json();
        this.setState({ articlesCat2 : dataArticlesCategorie2['hydra:member'], loading: false});

        //Récupération des articles correspondant à la catégorie de l'index [2] de catégorie avec un trie des dates et un nombre limite d'articles = 6.
        const urlArticlesCategorie3 = "http://127.0.0.1:8000/api/articles?categorie=/api/categories/"+this.state.categorie[2].id+"&order[date]=desc&itemPerPage=6"
        const responseArticlesCategorie3 = await fetch(urlArticlesCategorie3);
        const dataArticlesCategorie3 = await responseArticlesCategorie3.json();
        this.setState({ articlesCat3 : dataArticlesCategorie3['hydra:member'], loading: false});

        //Récupération des articles correspondant à la catégorie de l'index [3] de catégorie avec un trie des dates et un nombre limite d'articles = 6.
        const urlArticlesCategorie4 = "http://127.0.0.1:8000/api/articles?categorie=/api/categories/"+this.state.categorie[3].id+"&order[date]=desc&itemPerPage=6"
        const responseArticlesCategorie4 = await fetch(urlArticlesCategorie4);
        const dataArticlesCategorie4 = await responseArticlesCategorie4.json();
        this.setState({ articlesCat4 : dataArticlesCategorie4['hydra:member'], loading: false});

        //Récupération des articles correspondant à la catégorie de l'index [4] de catégorie avec un trie des dates et un nombre limite d'articles = 6.
        const urlArticlesCategorie5 = "http://127.0.0.1:8000/api/articles?categorie=/api/categories/"+this.state.categorie[4].id+"&order[date]=desc&itemPerPage=6"
        const responseArticlesCategorie5 = await fetch(urlArticlesCategorie5);
        const dataArticlesCategorie5 = await responseArticlesCategorie5.json();
        this.setState({ articlesCat5 : dataArticlesCategorie5['hydra:member'], loading: false});
        
    }

    //Fonction ClickLastActus qui afficheles derniers articles en stockant ce que l'on affiche dans le state affichage
    ClickLastActus () {

        this.setState( {
        affichage : this.state.article.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})
        });
        return (this.state.affichage);
    } 

    //Fonction ClickCategorie avec en param data qui correspond à la catégorie qui a été sélectionnée. On affiche de la même manière que dans
    //ClickLastActus. On vérifie si la variable data correspond à l'une des catégories de catégorie.
    ClickCategorie (data) {
        console.log("clickCat");

        if(data ==this.state.categorie[0].id ){
            this.setState( {
                affichage : this.state.articlesCat1.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})
            });
        } else if (data == this.state.categorie[1].id) {
            this.setState( {
                affichage : this.state.articlesCat2.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})
            });
        } else if (data == this.state.categorie[2].id) {
            this.setState({
                affichage : this.state.articlesCat3.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})
            });
        } else if (data == this.state.categorie[3].id) {
            this.setState({
                affichage : this.state.articlesCat4.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})
            });
        } else if (data == this.state.categorie[4].id) {
            this.setState({
                affichage : this.state.articlesCat5.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {item.conclusion} - {(item.categorie).map((cat) => cat.libelle)}</li>)})
            });
        } else {
            this.setState({
                affichage : <div>Erreur d'affichage</div>
            });
        }
        return(this.state.affichage);

    }

    render () {

        if(this.state.loading) {
            return <div>Loading...</div>
        }

        if(!this.state.article) {
            return <div>Pas d'articles</div>
        }

        if(!this.state.categorie) {
            return <div>Pas de catégories</div>
        }

    return (
        <div>
             <div>
                <ul>
                    <button onClick={e=> this.ClickLastActus()}>Dernières actus</button>
                    
                    {this.state.categorie.map(itemCategorie => (
                        <button key= {itemCategorie.id} onClick= {e => this.ClickCategorie(itemCategorie.id)}>{itemCategorie.libelle} - {itemCategorie.aime}</button>
                    ))}
                </ul>               
            </div>
            <div>
                <ul>
                    {this.state.affichage}
                </ul>
            </div> 
        </div>
        );
    }
}

export default ActusAccueil