import React from 'react'


class InterviewDev extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            interview : null,
            loading: true,
        };
    }

    async componentDidMount() {

        const urlInterviewDev= "http://127.0.0.1:8000/api/articles?order[date]=desc&article.type=/api/types/7"
        const responseInterviewDev = await fetch(urlInterviewDev);
        const dataInterviewDev = await responseInterviewDev.json();
        this.setState({ interview : dataInterviewDev['hydra:member'], loading: false});
        

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
                <h1>Interview-Tech</h1>
                <div>
                {this.state.interview.map((item) => {return (<li key= {item.id}>{item.titre} - {item.id} - {item.date} - {(item.categorie).map((cat) => cat.libelle)} - {(item.type).amp((type) => type.libelle)}</li>)})}   
                </div>
            </div>
        )
    }

} export default InterviewDev