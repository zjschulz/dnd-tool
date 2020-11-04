import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharacterStartComponent } from './characters/character-start/character-start.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full'},
    { path: 'characters', component: CharactersComponent, children: [
        { path: '', component: CharacterStartComponent },
        { path: 'new', component: CharacterEditComponent },
        { path: ':id', component: CharacterDetailComponent },
        { path: ':id/edit', component: CharacterEditComponent }
    ] },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}