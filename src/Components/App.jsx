import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from local storage on component mount
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  function updateNote(id, updatedNote) {
    setNotes(prevNotes => {
      return prevNotes.map((note, index) =>
        index === id ? updatedNote : note
      );
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <div className="flex-grow w-full">
        <CreateArea onAdd={addNote} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
