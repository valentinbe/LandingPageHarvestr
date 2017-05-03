import { Component, Input, EventEmitter, NgZone } from '@angular/core';

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
    
    .center-text-container {
        display: table;
        width: 100%;
    }
    .object-to-center {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    @media (min-width : 1040px )
    {
        .col-sides-left{
            width: calc(50% - 520px);
            float: left;
        }
        .col-sides-right{
            width: calc(50% - 520px);
            float: right;
        }

        .col-fixed-center {
            width : 1040px;
            height: 100%;
            padding-left: 25px;
            padding-right: 25px;
        }

        .text-content {
            text-align: left; 
            width : 480px;
        }

        .img-content{
            width : 480px;
            max-width: 100%;
            height:auto;
            text-align: center; 
        }

        .col-center-left {
            float:left;
        }

        .col-center-right {
            float:right;
        }
    }

    @media (max-width : 1039px )
    {
        .col-sides-left{
            display: none;
        }
        .col-sides-right{
            display: none;
        }    
        
        .col-fixed-center {
            padding-top: 50px;
            padding-bottom: 50px;
            text-align:center;
            height: 100%;
        }
        
        .text-content {
            text-align: center; 
            padding-bottom: 100px;          
        }

        .img-content {
            text-align: center;
            height:auto;
            text-align: center;  
            padding-top: 100px; 
        }
    }
    `],
    template: `

    <div 
        class="note-card center-text-container"
        [ngStyle]="{'background-color': descCard.color}"
        d-flex align-items-center
    > 
        <div class="object-to-center">
            <div *ngIf="descCard.textPositionIsLeft">
                <div class="row">
                    <div class="col-sides-left"></div>
                    <div class="col-fixed-center"> 
                        <div class="img-content col-center-right">
                            <span>
                                <img src="{{ descCard.imageUrl }}" 
                                    class="float-right">
                                </span>
                        </div>
                        <div 
                            class="text-content col-center-left"
                        >
                            <h2>
                                {{ descCard.title }}
                            </h2>
                            <span>
                                {{ descCard.text }}
                            </span>
                                
                        </div>
                    </div>
                    <div class="col-sides-right"></div>
                </div>  
            </div>

            <div *ngIf="!descCard.textPositionIsLeft">
                <div class="row">
                    <div class="col-sides-left"></div>
                    <div class="col-fixed-center"> 
                        <div class="img-content col-center-left" >
                            <span>
                                <img                             
                                    src="{{ descCard.imageUrl }}" 
                                    class="float-right">
                            </span>
                        </div>
                        <div class="text-content col-center-right">
                            <h2>
                                {{ descCard.title }}
                            </h2>
                            <span>
                                {{ descCard.text }}
                            </span>
                        </div>
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
