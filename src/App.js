
import './App.css';
import { Component } from 'react';



class App extends Component {
  
  state = {
    post : {}
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/articles/70')
    .then((response) => {
     return response.json()
    })
    .then((result) => {
      this.setState({post : result})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Accueil</h1>
        <h1>Notre dernier article : {this.state.post.titre}</h1>
      </div>
    );
  }
}

export default App;
