const execFile = require('child_process').execFile;
execFile('node', ['finished/raceMatters.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
execFile('node', ['finished/blindSpots.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
execFile('node', ['finished/playerPiano.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
execFile('node', ['finished/pragmaticProgrammer.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
execFile('node', ['finished/noIsNotEnough.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
