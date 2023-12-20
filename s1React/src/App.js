import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [newCountry, setNewCountry] = useState([]);

  const hook = () => {;
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setNotes(response.data);
      });
  };

  useEffect(hook, []);

  useEffect(() => {
    setNewCountry(notes.filter(note => note.name.common.includes(newNote)));
  }, [newNote, notes]);

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Encontrar paises</h1>
      <input value={newNote} onChange={handleNoteChange} />
      <ul>
          {newCountry.map(note => <Note key={note.cca3} note={note} />)}
      </ul>
    </div>
  );
};



export default App