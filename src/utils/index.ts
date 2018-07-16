import * as models from '../models';

export function selectManyResolver(resolve, reject, err: Error, rows: models.Book[]): void  {
    if (err) {
        reject(err.message);
    }

    if (rows) {
        resolve(rows);
    } else {
        resolve([]);
    }
}

export function selectOneResolver(resolve, reject, err: Error, book: models.Book): void {
    if (err) {
        reject(err.message);
    }

    if (book) {
        resolve(book);
    } else {
        resolve(null);
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
    return !!!Object.keys(body).length;
}
