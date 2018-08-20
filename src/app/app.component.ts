import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Breadcrumb, BreadcrumbService } from 'angular-crumbs';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { Event, 
         NavigationCancel, 
         NavigationEnd, 
         NavigationError, 
         NavigationStart, 
         Router 
     } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Portal Telefonia Móvel';
    message = '';
    nome = '';
    unidade = '';
    nivel =  '';
    MostrarMenu: boolean = false;


    constructor(
        private titleService: Title,
        private breadcrumbService: BreadcrumbService,
        private spinner: NgxSpinnerService,
        private router: Router,
        private user: UserService,
        private authService: AuthService) { }

    ngOnInit() {

        this.authService.MostrarMenuEmitter.subscribe(
            mostrar => this.MostrarMenu = mostrar
        );

        this.user.getUserData().subscribe(data => {
           this.message = data.message;
           this.nome = data.nome;
           this.unidade = data.unidade;
           this.nivel = data.nivel      
        })

        this.router.events.subscribe((event: Event ) => {
        switch (true) {
            case event instanceof NavigationStart: {
                this.spinner.show();
                break;
            }
            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError:{
                this.spinner.hide();
                break;
            }
            default:{
                break;
            }
            }
        })

        this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
            this.titleService.setTitle(this.createTitle(crumbs));
        });
    }

    private createTitle(routesCollection: Breadcrumb[]) {
        const title = 'Portal Telefonia';
        const titles = routesCollection.filter((route) => route.displayName);

        if (!titles.length) { return title; }

        const routeTitle = this.titlesToString(titles);
        return `${routeTitle} ${title}`;
    }

    private titlesToString(titles) {
        return titles.reduce((prev, curr) => {
            return `${curr.displayName} - ${prev}`;
        }, '');
    }
}

