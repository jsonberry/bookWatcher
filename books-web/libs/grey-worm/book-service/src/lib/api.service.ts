import {HttpClient, HttpResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import * as models from 'books-models'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    public getAllBooks(): Observable<models.GenericResponse<models.Book[]>> {
        return this.http.get<models.GenericResponse<models.Book[]>>('/api/books')
    }

    public getBooksByAuthor(author: string): Observable<HttpResponse<any>> {
        return this.http.get<any>('/api/books', {
            params: {
                author,
            },
        })
    }
}
