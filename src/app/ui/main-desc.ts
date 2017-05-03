import { Component, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector: 'main-desc',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
            color: white;
            padding-top: 150px;
            width: 100%;
            height: 700px;
        }
        .bckgd {
            background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../../img/maindesc.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }

        .text {
            margin-bottom: 15px;
        }

        .col-fixed-center-left{
        width:770px;
        height:100%;
        padding-left: 25px;
       padding-right: 25px;
        }
        .col-fixed-center-right{
        width:270px;
        height:100%;
        padding-left: 25px;
       padding-right: 25px;
        }
        .col-sides-left{
            width: calc(50% - 520px);
            float: left;
        }
        .col-sides-right{
            width: calc(50% - 520px);
            float: right;
        }

        @media (max-width : 500px )
        {
            .note-card {
                padding-top: 110px;
            }

            h1{
                font-size: 10vw;
                Line-Height: 10vw;
            }
            h6{
                font-size: 6vw;
                Line-Height: 6vw;
            }

            input{
                padding: 10px;
                margin-bottom: 10px;
                margin-right: 10px;
                margin-left: 10px;
                font-size: 6vw;
            }

            button{

            }
        }
    `],
    template: `
        <div class="bckgd " style="">
            <div 
                class="note-card row"
            >
                <div class="col-sides-left"></div>
                <div class="col-fixed-center-left">
                    <div class="text">
                        <h1>
                            {{ descCard.title }}
                        </h1>
                        <h6>
                            {{ descCard.sub }}
                        </h6>
                    </div>  
                    <form (ngSubmit)="sendEmail()" 
                    #authForm="ngForm">
                        <div class="inputs row">
                            <input
                                class="email col-xs-8"
                                type="email"
                                name="email"
                                placeholder="{{ descCard.inputText }}"
                                required
                                [(ngModel)]="user.email"
                                #email="ngModel"
                            >
                            <div class="actions">
                                <div>
                                <button
                                    type="submit"
                                    class="btn-light"
                                >
                                    {{ descCard.butText }}
                                </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-fixed-center-right"></div>
                <div class="col-sides-right"></div>     
            </div>
    </div>
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
