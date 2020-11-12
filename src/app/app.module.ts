import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterItemComponent } from './characters/character-list/character-item/character-item.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharacterStartComponent } from './characters/character-start/character-start.component';
import { CharacterService } from './characters/character.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective,
    CharactersComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterItemComponent,
    HomeComponent,
    CharacterEditComponent,
    CharacterStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
