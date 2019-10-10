import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }   from '@angular/forms' ;


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { AuthComponent } from './components/auth/auth.component';
import { ItemsComponent } from './components/items/items.component';
import { ComentsComponent } from './components/coments/coments.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemComponent } from './components/item.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AnimationsComponent } from './animations/animations.component';
import { BackgroundComponent } from './animations/background/background.component';
import { PreloaderComponent } from './animations/preloader/preloader.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ItemsComponent,
    ComentsComponent,
    ItemComponent,
    AnimationsComponent,
    BackgroundComponent,
    PreloaderComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule, 
    NoopAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatSnackBarModule, MatListModule,
    MatProgressSpinnerModule,ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
