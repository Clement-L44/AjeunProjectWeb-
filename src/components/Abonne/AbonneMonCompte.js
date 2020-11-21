import React from 'react'

class AbonneMonCompte extends React.Component {

    constructor(props){
        super(props);
     
        this.state = {
           
        };
    }


    /*async componentDidMount() {

    }*/

    render(){  

        return(
            <div>
                
                <h1>Mon Compte</h1>
                <label>Nom:</label>
                <label>Prénom:</label>
                <label>Pseudo:</label>
                <label>Adresse mail</label>
                <label>Mot de passe</label>
                
            </div>

        )
    }

} export default AbonneMonCompte
