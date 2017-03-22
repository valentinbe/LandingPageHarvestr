import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'footer',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
           padding-top: 50px;
            width: 100%;
            position: relative;
            height: 250px;
            background-color: '#A3ACB6';
            text-align:center
        } 
        .btn-outline {
        color: #F57F1E;
        font-size: 20px;
        border: solid 2px yellow;
        background: transparent;
        transition: all 0.3s ease-in-out;
        margin-top: 15px;
        }
        .btn-outline:hover,
        .btn-outline:focus,
        .btn-outline:active,
        .btn-outline.active {
        color: white;
        background: #FAA41B;
        border: solid 2px  #F57F1E;
        }
        .btn-social {
        display: inline-block;
        height: 50px;
        width: 50px;
        border: 2px solid #F57F1E;
        border-radius: 100%;
        text-align: center;
        font-size: 20px;
        line-height: 45px;
        }
    `],
    template: `
        <div 
            class="note-card"
        >

            <div class="row">
                    <div class="col-lg-2 col-lg-offset-4">
                        <h3>Adresse</h3>
                        <p>1 Rue de la Libération
                            <br>78350 Jouy-en-Josas</p>
                    </div>
                    <div class="col-lg-2">
                        <h3>Suivez nous sur le web</h3>
                      <div class="row">
                            <div class="col-lg-2 col-lg-offset-3">
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                                </div>
                                <div class="col-lg-2">
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                                </div>
                                <div class="col-lg-2">
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                           </div>
                           </div>
                           
                       
                    </div>
                    <div class="col-md-4">
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
        </div>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class Footer {
};
