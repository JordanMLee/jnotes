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

    async componentDidMount() {
        await axios.get('localhost:4000')
            .then(response => {
                this.setState({notes: response.data});
            })
            .catch(error => {
                console.log(`Error... ${error}`);
            });
    }

    updateNotes = async () => {
        await axios.get('localhost:4000')
            .then(response => {
                this.setState({notes: response.data});
            })
            .catch(error => {
                console.log(`Error... ${error}`);
            });
    };

    addNote = (event) => {

        axios.post('localhost:4000', `title=${this.state.title}&noteText=${this.state.noteText}`)
            .then(() => {
                this.updateNotes();

            });
        event.preventDefault();
    };

    updateNote = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    deleteNote = (note) => {
        const url = `localhost:4000/${note.id}`;

        axios
            .delete(url)
            .then(res => {
                this.setState(previousState => {
                    return {
                        notes: previousState.notes.filter(n => n.id !== note.id)
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    editNote = (note) => {
        const url = `localhost:4000/${note.id}`;
        axios
            .put(url, {title: this.state.title, noteText: this.state.noteText})
            .then(() => {
                this.updateNotes();
            });
    };

    clearInput = () => {
        //reset state
        this.setState({noteText:''});
        //reset ui
        document.getElementById("sdf").value = "";
    };


    render() {
        return (

            <div className="App">
                <form onSubmit={this.addNote}>
                    {/*<input name="title" type="text" placeholder="title"*/}
                    {/*       onChange={event => this.updateNote(event)}/>*/}
                    <div className="input-group">
                        <input type="submit" value="+" className="btn btn-primary"/>
                        <input className="form-control width100" name="noteText" id="sdf" type="text" placeholder="new note"
                               onChange={event => this.updateNote(event)}/>
                        {/*<button onClick={this.clearInput} value="-" className="btn btn-primary">-</button>*/}
                    </div>
                </form>
                <Note notes={this.state.notes} deleteClick={this.deleteNote} editClick={this.editNote}/>
            </div>
        );
    }
}

