import './App.css';

import SearchNote from './components/SearchNote.jsx';
import NoteList from './components/notelist.jsx';
import ChangeTheme from './components/darkmode/Theme.jsx';
import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';

function App() {

  var localS = JSON.parse(localStorage.getItem('Note'))

  if (localS == null) { localS = '' }

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState(localS);

  const addNote = (text) => {
    const newNote = {
      text: text,
      id: nanoid()
    }

    setNotes([...notes, newNote]);
  }

  useEffect(() => localStorage.setItem('Note', JSON.stringify(notes)), [notes])

  const writeNotes = notes !== "" ? notes.filter((note) => note.text.toLowerCase().includes(search)) : ''

  function deleteNote(id) {
    const newNotes = notes.filter((notes) => notes.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="App">
      <header>
        <h3 id="title">React Notes</h3>
        <SearchNote setSearch={setSearch} />
        <ChangeTheme />
      </header>
        <NoteList nList={writeNotes} del={deleteNote} ar={addNote} />
    </div>
  );
}

export default App;
