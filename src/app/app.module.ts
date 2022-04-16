import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

//Angular material
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatChipsModule} from '@angular/material/chips'; 

//components
import { FooterComponent } from './components/footer/footer.component';
import { PokiDetailComponent } from './components/poki-detail/poki-detail.component';
import { PokiTableComponent } from './components/poki-table/poki-table.component'; 
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokiDetailComponent,
    PokiTableComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,MatCardModule,
    MatChipsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
