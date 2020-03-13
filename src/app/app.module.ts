import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injectable } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { UserService } from './service/user.service';
import { AppService } from './app.service';
import { TacheService } from './service/tache.service';
import { DocumentService } from './service/document.service';
import { RoleService } from './service/role.service';
import { AffaireService } from './service/affaire.service';
import { TribunalService } from './service/tribunal.service';
import { PhaseService } from './service/phase.service';
import { MoralService } from './service/moral.service';
import { PhysiqueService } from './service/physique.service';
import { AccueilComponent } from './pages/accueil/accueil.component';
@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept(req : HttpRequest<any>, next: HttpHandler){
    const xhr= req.clone({
      headers: req.headers.set('X-Requested-With','XMLHttpRequest')
    });
    return next.handle(xhr);
  }
  
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [
    AppService, 
    UserService,
    RoleService,
    TacheService,
    AffaireService,
    DocumentService, 
    TribunalService,
    PhaseService,
    MoralService,
    PhysiqueService,    
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
