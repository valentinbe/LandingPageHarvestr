import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'call-to-action',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
           padding-top: 100px;
            width: 100%;
            position: relative;
            height: 600px;
            border-top: 1px solid #C6C7C8;
        } 
        .desc-text{
            text-align: center;
        }
        .call-to-action-content{
            padding: 20px;
            margin-top: 60px;
            border: solid;
            border-color: #C6C7C8;
            border-radius: 8px;
            border-width: 2px;
            text-align: left;
        }

        .col-fixed-center-txt{
        width:1040px;
        height:100%;
        padding-left: 25px;
       padding-right: 25px;
        }
        .col-sides-left-txt{
            width: calc(50% - 520px);
            float: left;
        }
        .col-sides-right-txt{
            width: calc(50% - 520px);
            float: right;
        }

        .col-fixed-center-cta{
        width:780px;
        height:100%;
        padding-left: 25px;
        padding-right: 25px;
        }
        .col-sides-left-cta{
            width: calc(50% - 390px);
            float: left;
        }
        .col-sides-right-cta{
            width: calc(50% - 390px);
            float: right;
        }
    `],
    template: `
<div 
    class="note-card"
    [ngStyle]="{'background-color': 'white'}"
>
    <div class="row">
        <div class="col-sides-left-txt"></div>
        <div class="desc-text col-fixed-center-txt">
            <span>
                {{ callToAction.text }}
            </span>
            <div class="col-sides-right-txt"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-sides-left-cta"></div>
        <div class="call-to-action-content col-fixed-center-cta">
            <div class="row">
                <div class="col-md-9">
                    <div class="call">
                        {{ callToAction.call }}
                    </div>
                </div>
                <div class="desc-text col-md-3">
                    <button
                        class="btn-light"
                    >
                        {{ callToAction.butText }}
                    </button>
                </div>
            </div> 
        </div>
    </div> 
    <div class="col-sides-right-cta"></div> 

</div>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class CallToAction {
    @Input() callToAction = {};
};
