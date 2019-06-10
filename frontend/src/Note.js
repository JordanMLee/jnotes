import React from 'react';
import './index.css';

export default class Note extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.notes.map(note =>
                    <li className="list-group-item clearfix" key={note.id}>
                        {note.notetext}
                        <span className="pull-right button-group">
                            <a href="/id" className="btn btn-primary" id="btn">Edit</a>
                            <button type="button" className="btn btn-danger" id="btn" onClick={this.props.deleteNote}> Delete</button>
                        </span>
                    </li>)}
            </ul>
        );
    }
}


