import React from 'react'

class MonCompteAdmin extends React.Component {

    constructor(props){
        super(props);  
        this.state = {
            
        };
    }

    async componentDidMount() {

        const urlLastActus = "http://127.0.0.1:8000/api/articles?order[date]=desc&itemPerPage=3"
        const responseLastActus = await fetch(urlLastActus);
        const dataLastActus = await responseLastActus.json();
        this.setState({ LastArticles : dataLastActus['hydra:member'], loading: false});
    }

    render(){

        return(
            <div>
                
            </div>
        )
    }

} export default MonCompteAdmin