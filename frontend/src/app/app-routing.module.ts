import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { roleGuard } from './guards/role.guard';
import { AdminComponent } from './admin/admin.component';
import { GestionCandidatsComponent } from './admin/gestion-candidats/gestion-candidats.component';
import { GestionTestsComponent } from './admin/gestion-tests/gestion-tests.component';
import { QcmFormComponent } from './admin/gestion-tests/qcm-form/qcm-form.component';
import { ProblemeFormComponent } from './admin/gestion-tests/probleme-form/probleme-form.component';
import { AttributionTestComponent } from './admin/gestion-tests/attribution-test/attribution-test.component';
import { GestionCollaborateursComponent } from './admin/gestion-collaborateurs/gestion-collaborateurs.component';
import { CandidatComponent } from './candidat/candidat/candidat.component';
import { TestsComponent } from './candidat/tests/tests.component';
import { QcmCandidatComponent } from './candidat/qcm-candidat/qcm-candidat.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResultatsCandidatsComponent } from './admin/resultats-candidats/resultats-candidats.component';
import { QcmListComponent } from './admin/gestion-tests/qcm-list/qcm-list.component';
import { ProblemeListComponent } from './admin/gestion-tests/probleme-list/probleme-list.component';
import { ProblemeCandidatComponent } from './candidat/probleme-candidat/probleme-candidat.component';
import { CollaborateurComponent } from './collaborateur/collaborateur/collaborateur.component';
import { GestionCoursComponent } from './admin/gestion-cours/gestion-cours.component';
import { CreationCoursComponent } from './admin/gestion-cours/creation-cours/creation-cours.component';
import { CoursListComponent } from './admin/gestion-cours/cours-list/cours-list.component';
import { AttributionCoursComponent } from './admin/gestion-cours/attribution-cours/attribution-cours.component';
import { CollabCoursListComponent } from './collaborateur/collab-cours-list/collab-cours-list.component';
import { CoursDetailComponent } from './collaborateur/cours-detail/cours-detail.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [roleGuard] ,children: [
      { path: 'gestion-candidats', component: GestionCandidatsComponent },
      { path: 'gestion-collaborateurs', component: GestionCollaborateursComponent },
     { path: 'gestion-tests', component: GestionTestsComponent, children: [
      { path: 'qcm', component: QcmFormComponent },
      { path: 'probleme', component: ProblemeFormComponent },
      { path: 'attribution', component: AttributionTestComponent },
      { path: 'qcm-list', component: QcmListComponent },     
    { path: 'probleme-list', component: ProblemeListComponent }
  ]},
{ path: 'resultats-candidats', component: ResultatsCandidatsComponent },
{path:'gestion-cours', component: GestionCoursComponent,  children: [
      { path: 'cours', component: CreationCoursComponent },
    {path: 'liste-cours', component: CoursListComponent},
  {path: 'attribution-cours', component: AttributionCoursComponent}]
    }


]},
  { path: 'candidat', component: CandidatComponent, canActivate: [roleGuard], children: [
    {path: 'mes-tests', component: TestsComponent,},
      { path: 'qcm/:id', component: QcmCandidatComponent },
      { path: 'probleme/:id', component: ProblemeCandidatComponent } 
    ]},
    {path: 'collaborateur' , component: CollaborateurComponent, canActivate: [roleGuard],children: [
    {path: 'mes-cours', component: CollabCoursListComponent,},
  {path: 'cours-detail/:id', component: CoursDetailComponent}]},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
