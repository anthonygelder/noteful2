import React, { Component } from 'react';


class Sidebar extends Component {
    render() {
        const note = this.props.notes.notes.filter(note => note.id === this.props.nav.match.params.note_id).shift()
        const noteFolder = note.folderId;
        
        const folder = this.props.notes.folders
                                        .filter(folder => folder.id === noteFolder).shift()


        return (
            <>        
                <button title="Go back" onClick={() => this.props.nav.history.goBack()}> Go back </button>
                <h3>{folder.name}</h3>
            </>
        );
    }
}

export default Sidebar;