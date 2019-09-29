import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import Context from '../Context/Context'
import { Link } from 'react-router-dom';


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
                <Link to={'/addFolder'}>
                    <button>Add Folder</button>
                </Link>
            </div>
        )
    }
}

export default FolderList;