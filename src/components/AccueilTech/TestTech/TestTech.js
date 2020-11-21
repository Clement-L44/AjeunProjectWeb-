import React from 'react'


class TestTech extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            tests : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlTestTech= "http://127.0.0.1:8000/api/articles?order[date]=desc&type=/api/types/9&categorie=/api/categories/17"
        const responseTestTech = await fetch(urlTestTech);
        const dataTestTech = await responseTestTech.json();
        this.setState({ tests : dataTestTech['hydra:member'], loading: false});
        console.log(this.state.tests);

    }

    render(){

        if(this.state.loading) {
            return <div>Loading...</div>
        }
        if(!this.state.tests) {
            return <div>Pas de tests</div>
        }

        return(
            <div>
                <h1>Test-Tech</h1>
                <div>
                    {(this.state.tests || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie || []).map((cat) => cat.libelle)} - {(item.type || []).map((type) => type.libelle)}</li>)})}   
                </div>
            </div>
        )
    }

} export default TestTech