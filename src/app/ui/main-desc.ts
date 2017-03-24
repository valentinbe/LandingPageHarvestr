import { Component, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth';

@Component({
    selector: 'main-desc',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
            color: white;
            padding-top: 150px;
            width: 100%;
            position: relative;
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
    `],
    template: `
        <div class="bckgd item active" style="">
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
          <div class="error" 
            [hidden]="email.valid || email.pristine"
          >
            email non valide</div>
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

    user = {
        email: ''
    };

    constructor(
        private auth: AuthService) {}

    sendEmail() {
        /*this.auth.authenticate(this.user)
        .subscribe(); */
    }
};
