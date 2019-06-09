import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import Note from './Note';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000')
            .then(response => {
                this.setState({notes: response.data});
            })
            .catch(error => {
                console.log(`Error... ${error}`);
            });
    }



    render() {
        return (

            <div className="App">
                <button className="btn btn-primary" onClick={() => console.log('add note button clicked')}> +</button>
                <Note notes={this.state.notes}/>
            </div>
        );
    }
}

