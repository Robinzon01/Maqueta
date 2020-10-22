import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CabezeraComponent } from './pages/cabezera/cabezera.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { LartiComponent } from './pages/larti/larti.component';
import { BartiComponent } from './pages/larti/barti/barti.component';
import { DartiComponent } from './pages/larti/darti/darti.component';
import { LoginComponent } from './pages/login/login.component';
import { PagiRgtaComponent } from './pages/pagi-rgta/pagi-rgta.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    CompanyComponent,
    HomeComponent,
    LartiComponent,
    BartiComponent,
    DartiComponent,
    LoginComponent,
    PagiRgtaComponent,
    RegistroComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
