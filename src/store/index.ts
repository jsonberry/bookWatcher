import * as sqlite3 from 'sqlite3';

export const db = new sqlite3.Database(`${__dirname}/../../db/bookwatcher.db`, (err) => {
    if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the bookwatcher database.');
});

