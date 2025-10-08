import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CollabCoursListComponent } from './collab-cours-list/collab-cours-list.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';



@NgModule({
  declarations: [
    CollaborateurComponent,
    CollabCoursListComponent,
    CoursDetailComponent,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule

  ]
})
export class CollaborateurModule { }
