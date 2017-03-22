import { Injectable } from '@angular/core';
import { StoreHelper } from './store-helper';
import { Store} from '../store';
import { ApiService } from './api';
import { Observable } from 'rxjs/Observable';
/** auth service handles service such as if current user is authorized
 * the router attached to see if route can be activated
 * So protects our routes given auth state
*/
import {CanActivate, Router} from '@angular/router';
import 'rxjs/Rx';

@Injectable()

/*** can activate is an interface 
 * have to save the json web token in local folder for instance
*/
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  JWT: string = '';

  /** we use the router to navigate user away from unauthorized content */
  constructor(
    private storeHelper: StoreHelper,
     private api: ApiService,
     private router: Router,
     private store: Store
  ) {
    /** when auth service is initialized want to grab current auth state: 
     * scrap JWT where it is stored */
      const token = window.localStorage.getItem(this.JWT_KEY);
      /** need to update apiservice with the tokent, inside the headers -> 
       * update API headers with the json webtoken
       */
      if (token) {
        this.setJwt(token);
      }
  }

  /** make sure token is locally stored and in the api header */
  setJwt(jwt: string) {
    /** for safety store it to local storage too */
    window.localStorage.setItem(this.JWT_KEY, jwt);
    /** whats the API is looking for in its header auth token : "bearer : token"*/
    this.api.setHeaders({Authorization: `Bearer ${jwt}`});
  }

  isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem(this.JWT_KEY));
  }

  /** check if user can go to the page */
  /** the router calls this method to check user rights and return true/false*/
  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
      if (!canActivate) {
        this.router.navigate(['', 'auth']);
      }
    }
  /** handles sign up and sign in 
   * credits: password+username
   * path is either signup or signin
   * 
   * in authenticate need to set the new json webtoken
   * api is gonna return the new JSON webtoken
   * 
   * then update the store with the current user
   * 
   * map to get back the response 
  */
  authenticate(path, creds): Observable<any> {
    return this.api.post(`/${path}`, creds)
      .do((res: any) => this.setJwt(res.token))
      .do((res: any) => this.storeHelper.update('user', res.data))
      .map((res: any) => res.data);
  }


  /** clear local storage
   * then purge store 
   * then go back to auth page
   */
  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.store.purge();
    this.router.navigate(['', 'auth']);
  }
}
