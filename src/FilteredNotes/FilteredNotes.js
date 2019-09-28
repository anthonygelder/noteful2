import React, { Component } from 'react';
import Note from '../Note/Note'
import Context from '../Context/Context'

class FilteredNotes extends Component {
    static contextType = Context;

    render() {
        const filteredNotes = this.context.notes
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