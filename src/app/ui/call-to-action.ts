import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'call-to-action',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
           padding-top: 100px;
            width: 100%;
            position: relative;
            height: 500px;
            border-top: 2px solid #95989A;
        } 
        .desc-text{
            text-align: center;
        }
        .call-to-action-content{
            padding: 20px;
            margin-top: 60px;
            border: solid;
            border-color: rgba(0,0,0,0.6);
            border-radius: 8px;
            border-width: 2px;
            text-align: left;
        }
    `],
    template: `
        <div 
            class="note-card"
            [ngStyle]="{'background-color': 'white'}"
        >

            <div class="row">
                <div class="desc-text col-lg-6 col-lg-offset-3 ">
                    <span>
                        {{ callToAction.text }}
                    </span>

                <div class="call-to-action-content col-lg-offset-2 col-lg-8">
                    <div class="row">
                        <div class="col-lg-9">
                        <span>
                            {{ callToAction.call }}
                        </span>
                        </div>
                        <div class="desc-text col-lg-3">
                        <button
                            class="btn-light"
                        >
                            {{ callToAction.butText }}
                        </button>
                        </div>
                   </div> 
                </div>
              </div>  
              </div>
        </div>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class CallToAction {
    @Input() callToAction = {};
};
