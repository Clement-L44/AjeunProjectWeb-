import React from 'react'

class MenuAdmin extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <a href="/admin/CréerUnArticle"><h1>Créer un article</h1></a>
                    <a href="/admin/admin"><h3>Admin</h3></a>
                    <a href="/admin/MonCompte"><h3>Mon Compte</h3></a>
                </div>    
            </div>
        )
    }
} export default MenuAdmin