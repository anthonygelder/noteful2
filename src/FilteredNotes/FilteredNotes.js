import React, { Component } from 'react';
import Note from '../Note/Note'

class FilteredNotes extends Component {
    render() {
        // const filteredNotes = this.props.notes
        //                                 .filter(note => note.id === this.props.match.params.folder_id)
        //                                 .map(note => <Note {...note} key={note.id} />)

        return (
            <div>
                {/* {filteredNotes} */}
                {console.log(this.props.notes)}
                {/* {console.log(this.props.match.params.folder_id)} */}
                <p>These are filtered notes</p>
                <button>Add Note</button>
            </div>
        )
    }
}

export default FilteredNotes;