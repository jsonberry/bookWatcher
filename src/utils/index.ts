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
