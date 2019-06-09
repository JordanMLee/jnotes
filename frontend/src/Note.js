import React from 'react';
import axios from 'axios';

export default class Note extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000')
            .then((response) => {
                this.setState({notes: response.data});
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render() {
        return (
            <ul className="list-group"> {this.state.notes.map(note => <li className="list-group-item" key={note.id}> {note.notetext}</li>)} </ul>
        );
    }
}


