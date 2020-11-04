import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full'},
    { path: 'characters', component: CharactersComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: CharacterDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}