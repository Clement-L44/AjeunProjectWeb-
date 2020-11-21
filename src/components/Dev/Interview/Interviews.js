import React from 'react'


class Interviews extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            interview : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlInterview= "http://127.0.0.1:8000/api/articles?order[date]=desc&type=/api/types/11"
        const responseInterview = await fetch(urlInterview);
        const dataInterview = await responseInterview.json();
        this.setState({ interview : dataInterview['hydra:member'], loading: false});
        

    }

    render(){

        if(this.state.loading) {
            return <div>Loading...</div>
        }
        if(!this.state.interview) {
            return <div>Pas d'interviews</div>
        }

        return(
            <div>
                <h1>Interview</h1>
                <div>
                {(this.state.interview || []).map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie || []).map((cat) => cat.libelle)} - {(item.type || []).map((type) => type.libelle)}</li>)})}   
                </div>
            </div>
        )
    }

} export default Interviews