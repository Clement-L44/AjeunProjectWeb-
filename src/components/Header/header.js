import React from 'react'

class header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <a href="/tech"><h1>TECH</h1></a>
                    <a href="/tech/actus"><h3>Actus</h3></a>
                    <a href="/tech/tests"><h3>Tests</h3></a>
                </div>
                <div>
                    <a href="/dev"><h1>DEV</h1></a>
                    <a href="/dev/actus"><h3>Actus</h3></a>
                    <a href="/dev/interviews"><h3>Interviews</h3></a>
                    <a href="/dev/projets"><h3>Projets</h3></a>
                </div>              
            </div>
        )
    }

} export default header