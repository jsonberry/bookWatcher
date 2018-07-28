import {Injectable} from '@angular/core'
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    public getAllBooks(): Observable<HttpResponse<any>> {
        return this.http.get<any>('/api/books')
    }

    public getBooksByAuthor(author: string): Observable<HttpResponse<any>> {
        return this.http.get<any>('/api/books', {
            params: {
                author,
            },
        })
    }
}
