import { Component, Input, EventEmitter, NgZone } from '@angular/core';

@Component({
    selector: 'teeewo-descee',
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
        padding-top: 50px;
        padding-bottom: 50px;
        height: 100%;
        padding-left: '35px;
        padding-right: 35px;
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
                <div 
                    [ngStyle]="styleTest"
                    class="text-content"
                >
                    <h2>
                        {{ descCard.title }}
                    </h2>
                    <span>
                        {{ descCard.text }}
                    </span>
                    
                </div>
                <div [ngStyle]="styleTest">
                    <span
                        [ngStyle]="{'text-align':'center'}">
                        <img src="{{ descCard.imageUrl }}" 
                            class="float-right">
                        </span>
                </div>
                <div class="col-sides-right"></div>
              </div>  
            </div>

            <div *ngIf="!descCard.textPositionIsLeft">
            <div class="row">
                <div class="col-sides-left"></div>
                <div [ngStyle]="styleTest" >
                    <span
                    [ngStyle]="{'text-align':'center'}">
                        <img                             
                            src="{{ descCard.imageUrl }}" 
                            class="float-right">
                    </span>
                </div>
                <div [ngStyle]="styleTest" class=" text-content">
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
export class TwoDessssc {
    @Input() descCard = {};

    styleTest;

    isClassVisible =  false;

    windowWidth = 0;
    //0: non collapsed, 1: Small, 2: XSmall
    collapseState = 0;

    constructor(ngZone: NgZone) {
        
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 600) {
                this.collapseState = 1;
        } else {
            if (this.windowWidth < 1040) {
                this.collapseState = 1;
            } else {
                this.collapseState = 0;
            }
        }
        this.changeCenterStyle();
        
        window.onresize = (e) => {
            ngZone.run(() => {
                this.windowWidth = window.innerWidth;
            });
            if (this.windowWidth < 600) {
                this.collapseState = 1;
            } else {
                if (this.windowWidth < 1040) {
                    this.collapseState = 1;
                } else {
                    this.collapseState = 0;
                }
            }
            this.changeCenterStyle();
        };
    }

    changeCenterStyle() {
        switch (this.collapseState) {
            case 1 :
                this.styleTest = {
                    'padding-top': '50px',
                    'padding-bottom': '50px',
                    'padding-left': '35px',
                    'padding-right': '35px',
                };
                break;
            default:
                this.styleTest = {
                    'width' : '520px',
                    'padding-left': '25px',
                    'padding-right': '25px',
                };
                break;
        }
    }
};
