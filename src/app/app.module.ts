import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { DataTablesModule } from 'angular-datatables';
import { BreadcrumbModule} from 'angular-crumbs';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserService } from  './user.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdimistracaoComponent } from './adimistracao/adimistracao.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { EmpresasComponent } from './administracao/empresas/empresas.component';
import { UnidadesComponent } from './administracao/unidades/unidades.component';
import { BackupComponent } from './backup/backup.component';
import { DashboardComponent } from './backup/dashboard/dashboard.component';
import { CadastroComponent } from './backup/cadastro/cadastro.component';
import { HomologadosComponent } from './administracao/homologados/homologados.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent, data: { breadcrumb: 'login'}}, 
  {path: 'logout', component: LogoutComponent, data: { breadcrumb: 'logout'}}, 
  {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'}, canActivate: [AuthGuard]}, 
  {
    path: 'administracao',
    component: AdministracaoComponent,
    data: { breadcrumb: 'Adimistracao'},
    canActivate: [AuthGuard],
    children: [
      {
        path: 'empresas',
        component: EmpresasComponent,
        data: { breadcrumb: 'Adm Empresa'},
        canActivate: [AuthGuard]
      },
      {
        path: 'unidades',
        component: UnidadesComponent,
        data: { breadcrumb: 'Adm Unidade'},
        canActivate: [AuthGuard]
      },
      {
        path: 'homologados',
        component: HomologadosComponent,
        data: { breadcrumb: 'Adm Aparelhos Homologados'},
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'backup',
    component: BackupComponent,
    data: { breadcrumb: 'DashBoard Backup'},
    canActivate: [AuthGuard]
  },
  {
    path: 'backup/dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'DashBoard Backup'},
    canActivate: [AuthGuard]
  },
  {
    path: 'backup/cadastro',
    component: CadastroComponent,
    data: { breadcrumb: 'Cadastro Backup'},
    canActivate: [AuthGuard]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AdimistracaoComponent,
    AdministracaoComponent,
    EmpresasComponent,
    UnidadesComponent,
    BackupComponent,
    DashboardComponent,
    CadastroComponent,
    HomeComponent,
    HomologadosComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      closeButton: true,
      progressBar: true,
      disableTimeOut: false,
      timeOut: 10000,
    }),
  	RouterModule.forRoot(
  	      appRoutes,
  	      { enableTracing: true } // <-- debugging purposes only
  	    )
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
