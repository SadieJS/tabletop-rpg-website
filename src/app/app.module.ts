import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CharactersPageComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
