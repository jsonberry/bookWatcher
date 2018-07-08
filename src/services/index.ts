import { Book } from '../models';
import { db } from '../store';
import { serviceResolver } from '../utils';

export function getBooksByAuthor($author: string): Promise<Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT rowid, * FROM Books WHERE author=$author',
            { $author },
            serviceResolver.bind(this, resolve, reject)
        );
    });
}

export function getAllBooks(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT rowid, * FROM Books',
            serviceResolver.bind(this, resolve, reject)
        );
    });
}

export function getBook($rowid: number): Promise<Book> {
    return new Promise((resolve, reject) => {
        db.get(
            'SELECT rowid, * FROM Books WHERE rowid=$rowid',
            {$rowid},
            serviceResolver.bind(this, resolve, reject)
        )
    })
}
