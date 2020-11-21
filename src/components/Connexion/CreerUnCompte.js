import React from 'react'

class CreerUnCompte extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            prenom : null,
            nom : null,
            pseudo: null,
            adresseMail: null,
            confirMail: null,
            password : null,
            confirmPassword: null,
        }
    }

    render(){
        
        return(
            <div>
                <h1>Créer mon compte</h1>

                <form>
                    <label>Prénom:<input type="text"></input></label> 
                    <label>Nom:<input type="text"></input></label> 
                    <label>Pseudo:<input type="text"></input></label> 
                    <label>Adresse mail:<input type="email"></input></label> 
                    <label>Confirmation adresse mail:<input type="email"></input></label> 
                    <label>Mot de passe:<input type="password"></input></label> 
                    <label>Confirmation mot de passe:<input type="password"></input></label>
                    <input type="submit" value="Valider"></input>
                </form>

            </div>
        )
    
    }



}export default CreerUnCompte