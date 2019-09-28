import React, { Component } from 'react';
import Folder from '../Folder/Folder';

class FolderList extends Component {
    static defaultProps = {
        folders: []
    }
    
    render() {
        const folders = this.props.folders.map((folder) => <Folder {...folder} key={folder.id} />)


        return (
            <div>
                {folders}
                <button>Add Folder</button>
            </div>
        )
    }
}

export default FolderList;