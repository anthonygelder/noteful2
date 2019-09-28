import React, { Component } from 'react';
import Note from '../Note/Note'

class FilteredNotes extends Component {
    render() {
        const filteredNotes = this.props.notes
                                        .filter(note => note.folderId === this.props.folderId)
                                        .map(note => <Note {...note} key={note.id} />)

        return (
            <div>
                {filteredNotes}
                <button>Add Note</button>
            </div>
        )
    }
}

export default FilteredNotes;