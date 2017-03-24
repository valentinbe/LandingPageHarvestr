import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bar',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
        .app-bar {
        position: fixed;
        top: 0;
        z-index: 9999;
        left: 0;
        width: 100%;
        height: 100px;
        padding: 5px 30px;
        background-color: transparent ;
        color: white;
        transition: background-color 0.5s ease-out;
        }
        .page-scroll-header {
        height: 80px;
        color: black;
        background-color: white;
        opacity: 1;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        .logo {     
        font-size: 30px;
        font-weight: 300;
        cursor: pointer;
        }
        .link {
        font-size: 24px;
        font-weight: 400;
        cursor: pointer; 
        }

    `],
    host: {
        '(window:scroll)': 'updateHeader($event)'
    },
    template: `
        <header class="app-bar row middle-xs"
        [ngClass]= "{'page-scroll-header': isScrolled}"
        >
        
        <span 
            [routerLink]="['']"
            class="logo col-xs-2">
            <img 
            *ngIf="isScrolled"
            src="../../img/logob.png" 
                        class="float-right">
            <img 
            *ngIf="!isScrolled"
            src="../../img/logow.png" 
                        class="float-right">
        </span>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#concept">Concept</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">Notre mission</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Nous contacter</a>
                    </li>
                </ul>
            </div>
        </header>
    `
})

export class AppBar {
    @Output() signOut = new EventEmitter();

    onSignout() {
        this.signOut.next();
    }

    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 10;

    constructor() {}

    updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }
};
