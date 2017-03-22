import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';


/*** template woks for sign in and sign up its toggles so its faster */
@Component({
  selector: 'auth-container',
  styles: [`
    .auth {
      height: 100%;
    }
    input {
      border-bottom: 1px solid lightgrey;
    }
    .ng-invalid.ng-dirty {
      border-bottom: 1px solid red;
    }
    form {
      width: 100%;
      border-radius: 2px;
      background-color: white;
      padding: 20px;
      height: 400px;
    }
    .inputs {
      height: 100%;
      position: relative;
    }
    .link {
      color: lightblue;
    }
    .link:hover {
      background-color: transparent;
    }
    .title {
      font-size: 36px;
      font-weight: 300;
      text-transform: capitalize;
    }
    .error {
      color: red;
      position: absolute;
      right: 20px;
    }
  `],
  /** ngfor is the model created for us in the bckground, we create a local var that 
   * access that object, we have acces to the state of this for to dicable 
   * the signin button
   */
  template: `
    <div class="auth row center-xs middle-xs">
      <form class="col-xs-6 shadow-2" (ngSubmit)="authenticate()" 
        #authForm="ngForm">
        <div class="inputs row center-xs middle-xs">
          <h3 class="col-xs-8 title">
            {{ mode }}
          </h3>
          <input
            class="col-xs-8"
            type="email"
            name="email"
            placeholder="email"
            required
            [(ngModel)]="user.email"
            #email="ngModel"
          >
          <div class="error" 
            [hidden]="email.valid || email.pristine"
          >
            email non valide</div>
          <input
            class="col-xs-8"
            type="password"
            name="password"
            placeholder="password"
            required
            [(ngModel)]="user.password"
            #password="ngModel"
          >
          <div class="error" 
            [hidden]="password.valid || password.pristine"
          >
            mot de passe requis</div>
          <div class="actions col-xs-12">
            <div class="row center-xs">
              <button
                [disabled]="!authForm.form.valid"
                type="submit"
                class="btn-light"
              >
                {{ mode }}
              </button>
              <a (click)="changeMode()" class="btn-light link">
                {{ linkText }}
              </a>
           </div>
         </div>
        </div>
      </form>
    </div>
  `
})
export class Auth {
  user = {
    password: '',
    email: ''
  };

  /** mode is to switch btw signup and signin */
  mode: string = 'signin';
  linkText: string = 'Pas encore de compte?';

  constructor(
    private auth: AuthService, 
    private router: Router) {}

  /** toggle btw signup and signin modes */
  changeMode() {
    if (this.mode === 'signin') {
      this.mode = 'signup'
      this.linkText = 'Déjà inscrit?'
    } else {
      this.mode = 'signin';
      this.linkText = 'Pas encore de compte?';
    }
  }

  /** methode pour s'authentifier */
  /**  auth then redirect the user to the correct page */
  authenticate() {
    this.auth.authenticate(this.mode, this.user)
    .subscribe(() => this.router.navigate(['']));
    
  }
}