import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dropdown-bar',
    /* on peut ajouter du CSS dans les styles */
    styles: [` 
        .app-bar {
        position: fixed;
        top: 0;
        z-index: 9999;
        left: 0;
        width: 100%;
        padding: 5px 30px;
        background-color: #F57F1E ;
        opacity: 0.97;
        color: white;
        }

        .logo {     
        font-size: 90px;
        font-weight: 300;
        cursor: pointer;
        }
        .link {
        font-size: 24px;
        font-weight: 400;
        cursor: pointer; 
    }

    a,
    a:hover,
    a:focus,
    a:active,
    a.active{
        color: white;
        font-size: 38px;
        Line-Height: 75pt;
        font-weight: 450;
        text-decoration:none;
    }

    li {
        list-style-type: none;
    }

    .material-icons.close { 
        padding: 12px 0px;
        font-size: 50px; 
        float: right;
        cursor: pointer; 
    }
    `],
    template: `
        <header class="app-bar">
  
        </header>
    `
})

/* notre note card a maintenant la possibilité de recevoir du contenu*/
/* on peut now utiliser l'objet "note" et ses attributs en interpolation dans le html du template*/
export class NavbarDropdown {
    @Input() navContent = {};
    @Output() dropdownClose = new EventEmitter();

    closeDropdown() {
        this.dropdownClose.next();
    }
};
