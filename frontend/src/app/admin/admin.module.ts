import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { GestionCandidatsComponent } from './gestion-candidats/gestion-candidats.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionTestsComponent } from './gestion-tests/gestion-tests.component';
import { QcmFormComponent } from './gestion-tests/qcm-form/qcm-form.component';
import { ProblemeFormComponent } from './gestion-tests/probleme-form/probleme-form.component';
import { AttributionTestComponent } from './gestion-tests/attribution-test/attribution-test.component';
import { GestionCollaborateursComponent } from './gestion-collaborateurs/gestion-collaborateurs.component';
import { ResultatsCandidatsComponent } from './resultats-candidats/resultats-candidats.component';
import { QcmListComponent } from './gestion-tests/qcm-list/qcm-list.component';
import { ProblemeListComponent } from './gestion-tests/probleme-list/probleme-list.component';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { CreationCoursComponent } from './gestion-cours/creation-cours/creation-cours.component';
import { CoursListComponent } from './gestion-cours/cours-list/cours-list.component';
import { AttributionCoursComponent } from './gestion-cours/attribution-cours/attribution-cours.component';



@NgModule({
  declarations: [
    AdminComponent,
    GestionCandidatsComponent,
    GestionTestsComponent,
    QcmFormComponent,
    ProblemeFormComponent,
    AttributionTestComponent,
    GestionCollaborateursComponent,
    ResultatsCandidatsComponent,
    QcmListComponent,
    ProblemeListComponent,
    GestionCoursComponent,
    CreationCoursComponent,
    CoursListComponent,
    AttributionCoursComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AdminModule { }
