import { Component, Input, EventEmitter } from '@angular/core';

870 px switch

@Component({
    selector: 'two-desc',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
            width: 100%;
            position: relative;
            height: 600px;
            border-top: 1px solid #C6C7C8;
        } 
        .cetner-text-container {
        display: table;
        width: 100%;
        }
        .object-to-center {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        }
    
    .text-content{
       text-align: left; 
    }

    img{
        max-width: 100%;
        height:auto;
    }

    .col-fixed-center{
        width:520px;
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

        <div 
            class="note-card cetner-text-container"
            [ngStyle]="{'background-color': descCard.color}"
            d-flex align-items-center
        > 
        <div class="object-to-center">


       <div *ngIf="descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-sides-left"></div>
                <div class="col-fixed-center text-content">
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                    
                </div>
                <div class="col-fixed-center">
                    <img src="{{ descCard.imageUrl }}" 
                        class="float-right">
                </div>
                <div class="col-sides-right"></div>
              </div>  
            </div>

            <div *ngIf="!descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-sides-left"></div>
                <div class="col-fixed-center">
                <span>
                    <img src="{{ descCard.imageUrl }}" 
                        class="float-right">
                        </span>
                </div>
                <div class="col-fixed-center text-content">
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                </div>
                <div class="col-sides-right"></div>
            </div>
            </div>


        </div> 
        </div>
    `
})

/* 
notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class TwoDesc {
    @Input() descCard = {};
};
