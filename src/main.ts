import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App, providers, routes } from './app'; /* importe automatiquement le fichier index dans le folder qui inclut tous les exports */
import { Main, LandingContainer, About, Auth } from './app/containers';
import { AppBar, TwoDesc, MainDesc, Testimonials, CallToAction, Footer, NavbarDropdown } from './app/ui';
import { AngularFireModule } from 'angularfire2';

@NgModule({
    /*list of modules want to use in our app*/
    declarations: [
        App,
        Main,
        AppBar,
        LandingContainer,
        TwoDesc,
        MainDesc,
        About,
        Auth,
        Testimonials,
        Footer,
        CallToAction, 
        NavbarDropdown
    ], 
    /* pours les services */
    providers,
    imports: [BrowserModule, FormsModule, 
                AngularFireModule.initializeApp(firebaseConfig),
                HttpModule, routes],
    /* load component when component is bootstrapped */
    bootstrap: [App]
})
export class AppModule{};

platformBrowserDynamic().bootstrapModule(AppModule);

