import React, { Component } from 'react';
import Context from '../Context/Context'

class Sidebar extends Component {
    static contextType = Context;

    render() {
        const note = this.context.notes.filter(note => note.id === this.props.nav.match.params.note_id).shift()
        const noteFolder = note.folderId;
        
        const folder = this.context.folders.filter(folder => folder.id === noteFolder).shift()


        return (
            <>        
                {console.log(this.context)}
                <button title="Go back" onClick={() => this.props.nav.history.goBack()}> Go back </button>
                <h3>{folder.name}</h3>
            </>
        );
    }
}

export default Sidebar;