import React, { Component } from 'react';
import Note from '../Note/Note'

class NoteList extends Component {
    render() {
        const notes = this.props.notes.map((note, key) => <Note {...note} key={key} />)

        return (
            <div>
                {notes}
                <button>Add Note</button>
            </div>
        )
    }
}

export default NoteList;