import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'two-desc',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
            width: 100%;
            position: relative;
            height: 500px;
            border-top: 1px solid #95989A;
        } 
        .something-semantic {
        display: table;
        width: 100%;
        }
        .something-else-semantic {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
    
    .text-content{
       text-align: left; 
    }
    `],
    template: `

        <div 
            class="note-card something-semantic"
            [ngStyle]="{'background-color': descCard.color}"
            d-flex align-items-center
        > 
        <div class="something-else-semantic">


       <div *ngIf="descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-lg-3 col-lg-offset-3 text-content">
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                    
                </div>
                <div class="col-lg-3  ">
                    <img src="{{ descCard.imageUrl }}" 
                        class="float-right">
                </div>
              </div>  
            </div>

            <div *ngIf="!descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-lg-3 col-lg-offset-3">
                    <img src="{{ descCard.imageUrl }}" 
                        class="float-right">
                </div>
                <div class="col-lg-3 text-content">
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                </div>
            </div>
            </div>


        </div> 
        </div>
    `
})

/* 
<div *ngIf="descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-lg-3 col-lg-offset-3 vcenter">
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                    
                </div>
                <div class="col-lg-3  ">
                    <img src="{{ descCard.imageUrl }}" 
                        class="float-right">
                </div>
              </div>  
            </div>

            <div *ngIf="!descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-lg-3 col-lg-offset-3">
                    <img src="{{ descCard.imageUrl }}" 
                        class="float-right">
                </div>
                <div class="col-lg-3">
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                </div>
            </div>
            </div>

notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class TwoDesc {
    @Input() descCard = {};
};
