const argv = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

argv
  .command(
    "add <title> <body>",
    "Adding an entry",
    (yargs) => {
      yargs
        .positional("title", {
          type: "string",
          describe: "The title of the note.",
        })
        .positional("body", {
          type: "string",
          describe: "The note body",
        });
    },
    (argv) => {
      notes.addNote(argv.title, argv.body);
    }
  )
  .command(
    "remove <title>",
    "Remove a note",
    (yargs) => {
      yargs.positional("title", {
        type: "string",
        describe: "The title of the note to be removed.",
      });
    },
    (argv) => {
      notes.removeNote(argv.title);
    }
  )
  .command(
    "list",
    "Listing notes",
    () => {},
    () => {
      notes.getNotes();
    }
  )
  .command(
    "read <title>",
    "Read a note",
    (yargs) => {
      yargs.positional("note", {
        type: "string",
        describe: "The title of the note to read",
      });
    },
    (argv) => {
      notes.readNote(argv.title);
    }
  ).argv;
