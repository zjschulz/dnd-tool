import { NgModule } from '@angular/core';
import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterItemComponent } from './character-list/character-item/character-item.component';
import { CharacterStartComponent } from './character-start/character-start.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
    declarations: [
        CharactersComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        CharacterItemComponent,
        CharacterEditComponent,
        CharacterStartComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        CharactersRoutingModule,
        SharedModule
    ],
    exports: [
        CharactersComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        CharacterItemComponent,
        CharacterEditComponent,
        CharacterStartComponent
    ]
})
export class CharactersModule {}