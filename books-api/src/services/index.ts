import * as models from 'books-models'
import {db} from '../store'
import * as utils from '../utils'

// TODO type this return
export function createBook(values: any[], placeholders: string) {
    return new Promise((resolve, reject): void => {
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
            function(err: Error): void {
                if (err) {
                    reject(err.message)
                }

                if (this && this.lastID) {
                    resolve(this.lastID)
                }
            },
        )
    })
}

export function getAllBooks(): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT rowid, *
                FROM Books;
            `,
            utils.selectManyResolver.bind(this, resolve, reject),
        )
    })
}

export function getBook($rowid: number): Promise<models.Book> {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT rowid, *
                FROM Books
                WHERE rowid=$rowid;
            `,
            {$rowid},
            utils.selectOneResolver.bind(this, resolve, reject),
        )
    })
}

export function getBooksByAuthor($author: string): Promise<models.Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT rowid, *
                FROM Books
                WHERE author = $author;
            `,
            {$author},
            utils.selectManyResolver.bind(this, resolve, reject),
        )
    })
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
            function(err: Error): void {
                if (err) {
                    reject(err.message)
                }

                if (this && this.changes) {
                    resolve(this.changes)
                }
            },
        )
    })
}

export async function deleteBook($rowid) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM Books
                WHERE rowid = $rowid;
            `,
            $rowid,
            function(err: Error): void {
                if (err) {
                    reject(err.message)
                }

                if (this && this.changes) {
                    resolve(this.changes)
                }
            },
        )
    })
}
