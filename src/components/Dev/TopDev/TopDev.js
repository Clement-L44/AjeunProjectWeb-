import React from 'react'


class TopDev  extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlTopDev= "http://127.0.0.1:8000/api/articles?order[Aime]=desc&categorie=/api/categories/13&itemPerPage=3"
        const responseTopDev = await fetch(urlTopDev);
        const dataTopDev = await responseTopDev.json();
        this.setState({ articles : dataTopDev['hydra:member'], loading: false});

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
                <h1>Top Dev</h1>
                {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
            </div>

        )
    }

} export default TopDev