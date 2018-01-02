const execFile = require('child_process').execFile;
execFile('node', ['slapstick.js'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});
execFile('node', ['marxForBeginners.js'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});
execFile('node', ['powerOfHabit.js'], (error, stdout, stderr) => {
    if (error) {
        throw error;e
    }
    console.log(stdout);
});
