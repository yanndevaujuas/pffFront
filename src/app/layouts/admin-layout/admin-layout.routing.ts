import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LoginComponent } from 'src/app/login/login.component';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { TacheComponent } from 'src/app/pages/tache/tache.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
import { DocumentComponent } from 'src/app/pages/document/document.component';
import { TribunalComponent } from 'src/app/pages/tribunal/tribunal.component';
import { EditUserComponent } from 'src/app/pages/edit-user/edit-user.component';
import { PhaseComponent } from 'src/app/pages/phase/phase.component';
import { MoralComponent } from 'src/app/pages/moral/moral.component';
import { EditRoleComponent } from 'src/app/pages/edit-role/edit-role.component';
import { EditTacheComponent } from 'src/app/pages/edit-tache/edit-tache.component';
import { EditAffaireComponent } from 'src/app/pages/edit-affaire/edit-affaire.component';
import { EditDocumentComponent } from 'src/app/pages/edit-document/edit-document.component';
import { EditTribunalComponent } from 'src/app/pages/edit-tribunal/edit-tribunal.component';
import { EditPhaseComponent } from 'src/app/pages/edit-phase/edit-phase.component';
import { EditMoralComponent } from 'src/app/pages/edit-moral/edit-moral.component';
import { EditPhysiqueComponent } from 'src/app/pages/edit-physique/edit-physique.component';
import { PhysiqueComponent } from 'src/app/pages/physique/physique.component';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [

  {path:"", redirectTo: "/login", pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path:'accueil', component: AccueilComponent},

  { path: "user", component: UserComponent },
  { path: "role", component: RoleComponent },
  { path: "tache", component: TacheComponent },
  { path: "affaire", component: AffaireComponent },
  { path: "document", component: DocumentComponent },
  { path: "tribunal", component: TribunalComponent },
  { path: "phase", component: PhaseComponent },
  { path: "moral", component: MoralComponent },
  { path: "physique", component: PhysiqueComponent },

  { path: "editUser/:id", component: EditUserComponent },
  { path: "editRole/:id", component: EditRoleComponent },
  { path: "editTache/:id", component: EditTacheComponent },
  { path: "editAffaire/:id", component: EditAffaireComponent },
  { path: "editDocument/:id", component: EditDocumentComponent },
  { path: "editTribunal/:id", component: EditTribunalComponent },
  { path: "editPhase/:id", component: EditPhaseComponent },
  { path: "editMoral/:id", component: EditMoralComponent },
  { path: "editPhysique/:id", component: EditPhysiqueComponent },

  

];
