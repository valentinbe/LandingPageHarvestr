import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'testimonials-desc',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
       .note-card {
           padding-top: 120px;
            width: 100%;
            position: relative;
            height: 600px;
            border-top: 2px solid #95989A;
            color: white;
            background-color: #F77F00;
            text-align: center;
        } 
        .circular--landscape {
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        .circular--landscape profilePic {
        width: auto;
        height: 100%;
        margin-left: -50px;
    }
    
    .quote{
        font-style: italic;
        padding: 15px;
        padding-bottom: 35px;
    }

    @media (max-width : 1039px )
    {
        .note-card {
           padding-top: 100px;
        }
        
        .row {
            margin:30px;
        }
    }
    
    `],
    template: `
        <div 
            class="note-card">

            <div class="row">
                <div class="col-lg-offset-3">
                </div> 
                <div class="col-lg-6  "
                *ngFor="let testimonial of testimonials">
                <div class="circular--landscape">
                    <img src="{{ testimonial.pictureUrl }}" 
                        class="profilePic">
                </div>
                    <div class="quote">
                        "{{ testimonial.testimonial }}"
                    </div>
                    <h6>
                        {{ testimonial.name }}, {{ testimonial.role }} @ {{ testimonial.company }}
                    </h6>
                </div>
                    
              </div>  
        </div>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class Testimonials {
    @Input() testimonials = {};
};
