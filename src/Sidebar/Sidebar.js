import React, { Component } from 'react';
import Context from '../Context/Context'
import PropTypes from 'prop-types';


class Sidebar extends Component {
    static contextType = Context;

    static defaultProps = {
        note: {}
    }

    render() {
        const note = this.context.notes.filter(note => +note.id === +this.props.nav.match.params.note_id).shift()

        const noteFolder = note.folder_id;
        const folder = this.context.folders.filter(folder => folder.id === noteFolder).shift()
        return (
            <>        
                <button title="Go back" onClick={() => this.props.nav.history.goBack()}> Go back </button>
                <h3>{folder.folder_name}</h3>
            </>
        );
    }
}

Sidebar.propTypes = {
    nav: PropTypes.object.isRequired
};

export default Sidebar;