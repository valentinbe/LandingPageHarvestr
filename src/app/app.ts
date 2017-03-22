import { Component } from '@angular/core';


/** la premiere chose qui est chargé à louverture de lapplication */
@Component({
    selector: 'app',
    template: `
        <div>
            <router-outlet></router-outlet>
        </div>
    `
})

export class App {};
