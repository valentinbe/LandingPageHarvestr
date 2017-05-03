import { Component, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector: 'main-desc',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
        .app-bar {
        position: fixed;
        top: 0;
        z-index: 9999;
        left: 0;
        width: 100%;
        padding: 5px 30px;
        background-color: #F57F1E ;
        opacity: 0.97;
        color: white;
        }

        .logo {     
        font-size: 90px;
        font-weight: 300;
        cursor: pointer;
        }
        .link {
        font-size: 24px;
        font-weight: 400;
        cursor: pointer; 
    }

    a,
    a:hover,
    a:focus,
    a:active,
    a.active{
        color: white;
        font-size: 38px;
        Line-Height: 75pt;
        font-weight: 450;
        text-decoration:none;
    }

    li {
        list-style-type: none;
    }

    .material-icons.close { 
        padding: 12px 0px;
        font-size: 50px; 
        float: right;
        cursor: pointer; 
    }
    `],
    template: `
        <header class="app-bar">
            <i class="material-icons close"
            >clear</i>

            <div class="middle-xs">
            <span 
                class="logo col-xs-2">
                <img 
                src="../../img/dropdownLogo.png" 
                            class="float-right">
            </span>
            </div>

            <ul class="content">
                <li class="page-scroll"
                >
                    <a >zerez</a>
                    <a >qds</a>
                    <a >zesqdqsrez</a>
                    <a >dqsd</a>
                    <a >zzer</a>
                    <a >sqdqs</a>
                    <a >aaaa</a>
                </li>
            </ul>
        </header>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class MainDesc {
    
    @Input() descCard = {};

    messageListRef: FirebaseListObservable<any[]>;

    user = {
        email: ''
    };


    constructor(
        private af: AngularFire,
        private auth: AuthService) {
            this.messageListRef = af.database.list('/emails_list');
        }


    // email regex
    validateEmail(email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    sendEmail() {
        var email = this.user.email;

        if ( this.validateEmail(email) ) {
            
        this.messageListRef.push({ 'email': email });
        this.user.email = "";

        
        window.alert("Thank you");
        // document.activeElement.blur();
        } else {
        window.alert("Please enter a valid email adress");
        }
        /*this.auth.authenticate(this.user)
        .subscribe(); */
    }
};
