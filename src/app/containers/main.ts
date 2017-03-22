import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <app-bar
                (signOut)="onSignout()"
            ></app-bar>
            <main class="main-container-class">
                <router-outlet></router-outlet>
            </main>
        </div>
    `

})

export class Main {

    constructor(
    private auth: AuthService, 
    private router: Router) {}


    onSignout() {
        this.auth.signout();
    }
};
