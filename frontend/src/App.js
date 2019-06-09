import React from 'react';
import axios from 'axios';
import Note from './Note';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            title: '',
            noteText: ''

        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000')
            .then(response => {
                this.setState({notes: response.data});
            })
            .catch(error => {
                console.log(`Error... ${error}`);
            });
    }

    addNote = (event) => {

        axios.post('http://localhost:4000', `title=${this.state.title}&noteText=${this.state.noteText}`)
            .then(() => {
                alert("Success!");
                return (<div className="alert alert-dark" role="alert"> This is a dark alert—check it out!</div>);
            });
        event.preventDefault();
    };

    updateNote = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (

            <div className="App">
                <form onSubmit={this.addNote}>
                    <input name="title" type="text" placeholder="title"
                           onChange={event => this.updateNote(event)}/>
                    <input name="noteText" type="text" placeholder="new note"
                           onChange={event => this.updateNote(event)}/>
                    <input type="submit" value="+" className="btn btn-primary"/>
                </form>
                <Note notes={this.state.notes}/>
            </div>
        );
    }
}

