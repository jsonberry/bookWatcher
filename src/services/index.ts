import * as models from '../models';
import { db } from '../store';
import * as utils from '../utils';

export function getBooksByAuthor($author: string): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT rowid, * FROM Books WHERE author=$author',
            { $author },
            utils.serviceResolver.bind(this, resolve, reject)
        );
    });
}

export function getAllBooks(): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT rowid, * FROM Books',
            utils.serviceResolver.bind(this, resolve, reject)
        );
    });
}

export function getBook($rowid: number): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.get(
            'SELECT rowid, * FROM Books WHERE rowid=$rowid',
            { $rowid },
            utils.serviceResolver.bind(this, resolve, reject)
        );
    });
}

export function createBook(values: any[], placeholders) {
    console.log(values);
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
            function (error) {
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
