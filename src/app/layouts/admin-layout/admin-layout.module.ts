import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from 'src/app/login/login.component';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { TacheComponent } from 'src/app/pages/tache/tache.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
import { DocumentComponent } from 'src/app/pages/document/document.component';
import { TribunalComponent } from 'src/app/pages/tribunal/tribunal.component';
import { PhaseComponent } from 'src/app/pages/phase/phase.component';
import { MoralComponent } from 'src/app/pages/moral/moral.component';
import { PhysiqueComponent } from 'src/app/pages/physique/physique.component';
import { EditUserComponent } from 'src/app/pages/edit-user/edit-user.component';
import { EditRoleComponent } from 'src/app/pages/edit-role/edit-role.component';
import { EditTacheComponent } from 'src/app/pages/edit-tache/edit-tache.component';
import { EditAffaireComponent } from 'src/app/pages/edit-affaire/edit-affaire.component';
import { EditDocumentComponent } from 'src/app/pages/edit-document/edit-document.component';
import { EditTribunalComponent } from 'src/app/pages/edit-tribunal/edit-tribunal.component';
import { EditPhaseComponent } from 'src/app/pages/edit-phase/edit-phase.component';
import { EditMoralComponent } from 'src/app/pages/edit-moral/edit-moral.component';
import { EditPhysiqueComponent } from 'src/app/pages/edit-physique/edit-physique.component';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    RoleComponent,
    TacheComponent,
    AffaireComponent,
    DocumentComponent,
    TribunalComponent,
    PhaseComponent,
    MoralComponent,
    PhysiqueComponent,
    EditUserComponent,
    EditRoleComponent,
    EditTacheComponent,
    EditAffaireComponent,
    EditDocumentComponent,
    EditTribunalComponent,
    EditPhaseComponent,
    EditMoralComponent,
    EditPhysiqueComponent,
    LoginComponent,
    AccueilComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
