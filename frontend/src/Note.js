import React from 'react';

export default class Note extends  React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    // componentDidMount() {
    //     axios.get('http://localhost:3000')
    //         .then((response) => {
    //             this.setState({notes: response.data});
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         });
    // }

    render() {
        return (
            <ul className="list-group"> {this.props.notes.map(note => <li className="list-group-item" key={note.id}> {note.notetext}</li>)} </ul>
        );
    }
}


