import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddNoteButton extends Component {

    render() {
        return (
            <Link to={'/addNote'}>
                <button>Add Note</button>
            </Link>
        )
    }
}

export default AddNoteButton;