import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';

import { CandidatModule } from './candidat/candidat.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CollaborateurModule } from './collaborateur/collaborateur.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    CandidatModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    CollaborateurModule,
    
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
