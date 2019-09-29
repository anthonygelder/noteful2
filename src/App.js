import React, {Component} from 'react';
import FolderList from './FolderList/FolderList';
import Sidebar from './Sidebar/Sidebar'
import NoteDetail from './NoteDetail/NoteDetail'
import NoteList from './NoteList/NoteList'
import FilteredNotes from './FilteredNotes/FilteredNotes'
import { Route, Link } from 'react-router-dom';
import Context from './Context/Context'
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
import AddNoteButton from './AddNoteButton/AddNoteButton';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      folders: []
    };
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => response.json())
      .then(data => {
        this.setState({
          folders: data
        })
    })
    fetch('http://localhost:9090/notes')
    .then(response => response.json())
    .then(data => {
      this.setState({
        notes: data
      })
    })
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    }
    return (
      <Context.Provider value={contextValue}>
        <div>
          <Link to='/'>
            <h1 className="title">
              Noteful
            </h1>
          </Link>
          <ErrorBoundry>
            <main className="main">
              <div className="sidebar">
                <Route exact path='/' render={() => <FolderList /> } />
                <Route exact path='/folder/:folder_id' render={(props) => <FolderList folders={this.state.folders} /> } />
                <Route exact path='/note/:note_id' render={(props) => <Sidebar nav={props} /> }/>
              </div>
              <div>
                <Route exact path='/' render={() => <NoteList /> } />
                <Route exact path='/folder/:folder_id' render={(routeProps) => <FilteredNotes folderId={routeProps.match.params.folder_id}/> }/>
                <Route exact path='/note/:note_id' render={(routeProps) => <NoteDetail props={routeProps}/> }/>
                <Route exact path='/addFolder' render={({ history }) => <AddFolder /> }/>
                <Route exact path='/addNote' render={({ history }) => <AddNote /> }/>
                <Route exact path='/' component={AddNoteButton} />
                <Route exact path='/folder/:folder_id' component={AddNoteButton} />
              </div>
            </main>
          </ErrorBoundry>
        </div>
      </Context.Provider>
    );
  }
}

export default App;