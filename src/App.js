import React, {Component} from 'react';
import FolderList from './FolderList/FolderList';
import Sidebar from './Sidebar/Sidebar'
import NoteDetail from './NoteDetail/NoteDetail'
import NoteList from './NoteList/NoteList'
import FilteredNotes from './FilteredNotes/FilteredNotes'
import { Route, Link } from 'react-router-dom';
import dummyStore from './dummy-store';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: dummyStore.notes,
      folders: dummyStore.folders
    };
  }

  render() {
    return (
      <div>
        <Link to='/'>
          <h1>
            Noteful
          </h1>
        </Link>
        <div>
          <Route exact path='/' render={() => <FolderList /> } />
          <Route exact path='/folder/:folder_id' render={() => <FolderList /> } />
          <Route exact path='/note/:note_id' render={(props) => <Sidebar nav={props} /> }/>
        </div>
        <div>
          <Route exact path='/' render={() => <NoteList /> } />
          <Route exact path='/folder/:folder_id' render={(routeProps) => <FilteredNotes folderId={routeProps.match.params.folder_id}/> }/>
          <Route exact path='/note/:note_id' render={(routeProps) => <NoteDetail folderId={routeProps}/> }/>
        </div>
      </div>
    );
  }
}

export default App;