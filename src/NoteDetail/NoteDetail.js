import React, { Component } from 'react';
import Context from '../Context/Context'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './NoteDetail.css'

function deleteNoteRequest(noteId, cb) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(error => {
                throw error
            })
            }
            return res.json()
        })
        .then(data => {
            cb(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }


class NoteDetail extends Component {
    static contextType = Context;

    render() {
        const note = this.context.notes.filter(note => note.id === this.props.match.params.note_id).shift()

        return (
            <>
                <div className="note">
                    <h2>{note.name}</h2>
                    <p>Modified on {note.modified.slice(0, 10)}</p> 
                    <Link to={'/'}>
                    <button onClick={() => {
                        deleteNoteRequest(
                            note.id,
                            this.context.deleteNote
                        )
                    }}>Delete Note</button>
                    </Link>
                </div>
                <p>{note.content}</p>
            </>
        )
    }
}

NoteDetail.propTypes = {
    props: PropTypes.object.isRequired
};

export default withRouter(NoteDetail);