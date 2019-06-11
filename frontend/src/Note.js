import React from 'react';
import './index.css';

export default class Note extends React.Component {

    removeNote = (e, note) => {
        e.preventDefault();
        console.log(note)

        if (this.props.deleteClick) {
            this.props.deleteClick(note);
        }
    };

    changeNote = (e,note) => {
      e.preventDefault();
      if( this.props.editClick) {
          this.props.editClick(note);
      }
    };

    render() {
        return (
            <ul className="list-group">
                {this.props.notes.map(note =>
                    <li className="list-group-item clearfix" key={note.id}>
                        {note.notetext}
                        <span className="pull-right button-group">
                            <button type="button" className="btn btn-primary" id="btn" onClick={e => this.changeNote(e, note)}>Edit</button>
                            <button type="button" className="btn btn-danger" id="btn" onClick={e => this.removeNote(e, note)}>Delete</button>
                        </span>
                    </li>)}
            </ul>
        );
    }
}


