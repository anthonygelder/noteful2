import React, { Component } from 'react';
import Note from '../Note/Note'
import Context from '../Context/Context'

class NoteList extends Component {
    static contextType = Context;

    render() {
        const notes = this.context.notes.map((note) => <Note {...note} key={note.id} />)

        return (
            <div>
                {notes}
            </div>
        )
    }
}

export default NoteList;