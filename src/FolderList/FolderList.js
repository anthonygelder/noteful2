import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import Context from '../Context/Context'

class FolderList extends Component {
    static contextType = Context;

    static defaultProps = {
        folders: []
    }
    
    render() {
        const folders = this.context.folders.map((folder) => <Folder {...folder} key={folder.id} />)


        return (
            <div>
                {folders}
                <button>Add Folder</button>
            </div>
        )
    }
}

export default FolderList;