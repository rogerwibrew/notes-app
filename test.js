require("yargs")
  .scriptName("pirate-parser")
  .command(
    "hello <name>",
    "welcome ter yargs!",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        describe: "the name to say hello to",
      });
    },
    function (argv) {
      console.log("hello", argv.name, "welcome to yargs.");
    }
  ).argv;
