const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your notes:"));
  notes.forEach((note) => console.log(note.title));
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note Added."));
  } else {
    console.log(chalk.red("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removedNoteArray = notes.filter((note) => note.title != title);
  if (notes.length === removedNoteArray.length) {
    console.log(chalk.red("No note found."));
  } else {
    console.log(chalk.green("Note removed."));
    saveNotes(removedNoteArray);
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red("No note with that title"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
};
