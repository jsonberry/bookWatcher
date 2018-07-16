import { Book } from '../models';

export function serviceResolver(resolve, reject, err: Error, rows: Book[]): void {
    if (err) {
        reject(err.message);
    }

    if (rows) {
        resolve(rows);
    } else {
        resolve([]);
    }
}

export function mapBookRelations(book) {
    const {author, dueDate, finishedDate, pages, place, rowid, startDate, status, title} = book;
    return {
        $author: author,
        $dueDate: dueDate,
        $finishedDate: finishedDate,
        $pages: pages,
        $place: place,
        $rowid: rowid,
        $startDate: startDate,
        $status: status,
        $title: title
    }
}

export function isReqBodyEmpty(body) {
    return !Object.keys(body).length;
}
