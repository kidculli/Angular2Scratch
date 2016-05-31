/**
 * Created by cullin on 5/31/2016.
 */
import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    selector:'my-app',
    template: `<h1>{{title}}</h1>
                <nav>
                <a [routerLink]="['DashBoard']">DashBoard</a>
                <a [routerLink]="['Heroes']">Heroes</a>
                <router-outlet></router-outlet>
                </nav>
                `,
    styleUrls:['app/app.component.css'],
    directives:[ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashboardComponent,
        useAsDefault: true // makes this the default route
    },
    {
        path:'/detail/:id',
        name:'HeroDetail',
        component: HeroDetailComponent
    }
])
export class AppComponent {
    title:string = 'Tour of Heroes';
}