import React, { Component } from 'react';


class NoteDetail extends Component {
    render() {
        const note = this.props.notes.filter(note => note.id === this.props.folderId.match.params.note_id).shift()

        return (
            <>
                <div>
                    <h2>{note.name}</h2>
                    <p>Modified on {note.modified}</p> 
                    <button>Delete Note</button>
                </div>
                <p>{note.content}</p>
            </>
        )
    }
}

export default NoteDetail;