import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/layouts/Header';
import Task from './components/Task';
import Footer from './components/layouts/Footer';

interface Taks {
  title: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<Taks[]>(() => {
    const storedNotes = localStorage.getItem('Tasks');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const addNote = (newNote: Taks) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem('Tasks', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const deleteNote = (title: string) => {
    const newNotes = notes.filter((note) => note.title !== title);
    localStorage.setItem('Tasks', JSON.stringify(newNotes));
    setNotes(newNotes);
  };
  return (
    <>
      <Header />
      <CreateTask onAdd={addNote} />

      {notes.map((note: Taks) => (
        <Task
          key={note.title}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
