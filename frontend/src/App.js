import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Note from './Note';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    render() {
        return (

            <div className="App">
                <button className="btn btn-primary" onClick={() => console.log('add note button clicked')}> +</button>
                <Note/>
            </div>
        );
    }
}

