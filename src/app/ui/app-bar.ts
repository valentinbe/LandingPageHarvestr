import { Component, Output, EventEmitter, NgZone } from '@angular/core';

@Component({
    selector: 'app-bar',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
        .app-bar {
            position: fixed;
            top: 0;
            z-index: 9988;
            left: 0;
            width: 100%;
            height: 100px;
            padding-top: 5px;
            background-color: transparent ;
            color: white;
            transition: background-color 0.5s ease-out;
            border-color: white;
        }

        .page-scroll-header {
            height: 80px;
            color: black;
            background-color: white;
            opacity: 1;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            border-color: black;
        }

        .row {
            padding: 5px 30px;
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

        a {
            color: inherit;
            text-decoration:none;
        }
        
        .menu-dropdown{
            padding: 7px;
            border: solid;
            border-radius: 8px;
            border-width: 2px;
            text-align: left;
        }

        .material-icons.dropdownIcon {
            padding: 5px;
            font-size: 19px; 
        }

        .col-center-l{
            float: center;
            width: calc(100% - 580px);
        }
        .col-center-s{
            float: center;
            width: calc(100% - 363px);
        }
        .col-center-xs{
            float: center;
            width: calc(100% - 288px);
        }

        .col-sides-left{
            width: 220px;
        }
        .menu-dropdown.small{
            width:120px;
        }
        .menu-dropdown.xsmall{
            width:45px;
        }

        .col-sides-right{
            width: 360px;
        }

        @media (max-width : 500px )
        {

        }
    `],
    host: {
        '(window:scroll)': 'updateHeader($event)'
    },
    template: `
        <dropdown-bar
            [navContent]="navContent"
            *ngIf="triggerDropdown"
            (dropdownClose)="hideDropdown()">
        </dropdown-bar>
        
        <header class="app-bar"
        [ngClass]= "{'page-scroll-header': isScrolled}"
        >
        <div class="row middle-xs">
            <span 
                [routerLink]="['/']"
                class="logo col-sides-left">
                <img 
                *ngIf="isScrolled"
                src="../../img/logob.png" 
                            class="float-right">
                <img 
                *ngIf="!isScrolled"
                src="../../img/logow.png" 
                            class="float-right">
            </span>
            
            <div *ngIf="!collapseState"
                class="col-center-l">
            </div>
            <div *ngIf="collapseState==1"
                class="col-center-s">
            </div>
            <div *ngIf="collapseState==2"
                class="col-center-xs">
            </div>

            <nav>
                <div 
                    *ngIf="!collapseState"
                    class="row middle-xs between-xs col-sides-right">
                    <a class="link"
                        *ngFor="let contentMenu of navContent"
                        href="{{ contentMenu.link }}"
                    >
                        {{ contentMenu.text }}
                    </a>
                </div>

                <div 
                    *ngIf="collapseState==1"
                    class="link menu-dropdown small"
                    (click)="showDropdown()">
                    <i class="material-icons dropdownIcon">menu</i>
                    <span
                    >
                        Menu
                    </span>
                </div>
                <div 
                    *ngIf="collapseState==2"
                    class="link menu-dropdown xsmall"
                    (click)="showDropdown()">
                    <i class="material-icons dropdownIcon">menu</i>
                </div>
            </nav>
        </div>
        </header>
    `
})

export class AppBar {
    navContent = [
        {
            text: 'About',
            link: "about",
        },
        {
            text: 'More',
            link: "about",
        },
        {
            text: 'Contact us',
            link: "about",
        }
    ];

    @Output() signOut = new EventEmitter();

    onSignout() {
        this.signOut.next();
    }

    isScrolled = false;
    triggerDropdown = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 10;

    windowWidth = 0;
    //0: non collapsed, 1: Small, 2: XSmall
    collapseState = 0;

    constructor(ngZone: NgZone) {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 600) {
                this.collapseState = 2;
        } else {
            if (this.windowWidth < 1040) {
                this.collapseState = 1;
            } else {
                this.collapseState = 0;
            }
        }
        
        window.onresize = (e) => {
            ngZone.run(() => {
                this.windowWidth = window.innerWidth;
            });
            if (this.windowWidth < 600) {
                this.collapseState = 2;
            } else {
                if (this.windowWidth < 745) {
                    this.collapseState = 1;
                } else {
                    this.collapseState = 0;
                }
            }
        };
    }

    showDropdown() {
        this.triggerDropdown = true;
    }
    hideDropdown() {
        this.triggerDropdown = false;
    }

    updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }

};
