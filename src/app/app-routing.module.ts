import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharacterStartComponent } from './characters/character-start/character-start.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full'},
    { 
        path: 'characters',
        component: CharactersComponent,
        canActivate: [AuthGuard],
        children: [
        { path: '', component: CharacterStartComponent },
        { path: 'new', component: CharacterEditComponent },
        { path: ':id', component: CharacterDetailComponent },
        { path: ':id/edit', component: CharacterEditComponent }
    ] },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}