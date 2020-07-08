import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;
@Injectable({
    providedIn: 'root',
})
export class ApiHandlerService {
    shareNewsItem: any;
    constructor(private _http: HttpClient) {}
    public getNews(url) {
        return this._http.get(`${apiUrl}/top-headlines?country=in&${url}&apiKey=${apiKey}`);
    }
}
