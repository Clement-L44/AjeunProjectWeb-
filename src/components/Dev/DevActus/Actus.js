import React from 'react'


class Actus extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            articles : null,
            actus : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlDevActus = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/18"
        const responseDevActus = await fetch(urlDevActus);
        const dataDevActus = await responseDevActus.json();
        this.setState({ articles : dataDevActus['hydra:member'], loading: false});

        const urlLastDevActus = "http://127.0.0.1:8000/api/articles?order[date]=desc&categorie=/api/categories/18&itemPerPage=1"
        const responseLastDevActus = await fetch(urlLastDevActus);
        const dataLastDevActus = await responseLastDevActus.json();
        this.setState({ actus : dataLastDevActus['hydra:member'], loading: false});
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
                <div>
                    {(this.state.actus || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>
                <h1>Dev Actus</h1>
                <div>
                    {this.state.articles.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)}</li>)})}   
                </div>           
            </div>


        )
    }

} export default Actus