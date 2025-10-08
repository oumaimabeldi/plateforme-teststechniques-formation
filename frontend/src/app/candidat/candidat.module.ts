import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatComponent } from './candidat/candidat.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestsComponent } from './tests/tests.component';
import { QcmCandidatComponent } from './qcm-candidat/qcm-candidat.component';
import { ProblemeCandidatComponent } from './probleme-candidat/probleme-candidat.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';



@NgModule({
  declarations: [
    CandidatComponent,
    TestsComponent,
    QcmCandidatComponent,
    ProblemeCandidatComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule
  ]
})
export class CandidatModule { }
