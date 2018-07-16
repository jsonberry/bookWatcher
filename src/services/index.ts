import * as models from '../models';
import { db } from '../store';
import * as utils from '../utils';

// TODO type this return
export function createBook(values: any[], placeholders: string) {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO Books (
                author,
                dueDate,
                finishedDate,
                pages,
                place,
                startDate,
                status,
                title
            )
             VALUES (${placeholders});
            `,
            values,
            function(error) {
                if (error) {
                    reject(error.message);
                }

                if (this && this.lastID) {
                    resolve(this.lastID);
                }
            }
        );
    });
}

export function getAllBooks(): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT rowid, *
                FROM Books;
            `,
            utils.serviceResolver.bind(this, resolve, reject)
        );
    });
}

export function getBook($rowid: number): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT rowid, *
                FROM Books
                WHERE rowid=$rowid;
            `,
            { $rowid },
            (err, book) => {
                if (err) {
                    reject(err.message);
                }

                if (book) {
                    resolve(book);
                } else {
                    resolve(null);
                }
            }
        );
    });
}

export function getBooksByAuthor($author: string): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT rowid, *
                FROM Books
                WHERE author = $author;
            `,
            { $author },
            utils.serviceResolver.bind(this, resolve, reject)
        );
    });
}

// TODO type this return
export async function updateBook(values) {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE Books
                SET
                  author = $author,
                  dueDate = $dueDate,
                  finishedDate = $finishedDate,
                  pages = $pages,
                  place = $place,
                  startDate = $startDate,
                  status = $status,
                  title = $title
                WHERE rowid = $rowid
            `,
            values,
            function(error) {
                if (error) {
                    reject(error.message);
                }

                if (this && this.changes) {
                    resolve(this.changes);
                }
            }
        );
    });
}

export async function deleteBook($rowid) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM Books
                WHERE rowid = $rowid;
            `,
            $rowid,
            utils.serviceResolver.bind(this, resolve, reject)
        )
    })
}
