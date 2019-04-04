import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 HEAD
import { HeaderComponent } from './components/header/header.component';

import { IngredientManagerComponent } from './ingredient-manager/ingredient-manager.component';
 5805915b9abe96fb948865c929cc3eca2bbe26f9

@NgModule({
  declarations: [
    AppComponent,
 HEAD
    HeaderComponent

    IngredientManagerComponent
 5805915b9abe96fb948865c929cc3eca2bbe26f9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
