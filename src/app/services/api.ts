/* http is a service, how do we use services in other services ->
with dependency injection  */
/* injectable est un decorateur qui permet a nos services detre injecter par
dautre services */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()

export class ApiService {

    /* json server running in the back  */
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    /* url we use for the api */
    api_url: string = 'http://localhost:3500';

    /* from ES6 , allow us to inject http service into our api service  */
    constructor(private http: Http) {

    }

    /** have to resolve the json ourselves */
    private getJson(resp: Response) {
        return resp.json();
    }

    private checkForError(resp: Response): Response {
        if (resp.status >= 200 && resp.status < 300) {
            return resp;
        } else {
            const error = new Error(resp.statusText);
            error['response'] = resp;
            console.error(error);
            throw error;
        }
    }

    /**get ost methods from angular use observables by default */
    get(path: string): Observable<any> {
        /** use concatenation here to set the url */
        /**can use .map cas cest un observable 
         * http methods by default return observables
        */
        return this.http.get(`${this.api_url}${path}`, { headers: this.headers })
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson) /** if no errors get the json */
    }

    post(path: string, body): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson) /** if no errors get the json */
    }

    delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`,
      { headers: this.headers }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson)
  }

    /** update API headers with the json webtoken from auth.ts */
    setHeaders(headers) {
        /** so add an element to the header */
        Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
    }
};
