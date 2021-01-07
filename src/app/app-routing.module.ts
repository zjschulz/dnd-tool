import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { 
        path: 'characters',
        loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
    },
    { 
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'spells',
        loadChildren: () => import('./spells/spells.module').then(m => m.SpellsModule)
    },
    {
        path: 'races',
        loadChildren: () => import('./races/races.module').then(m => m.RacesModule)
    },
    {
        path: 'monsters',
        loadChildren: () => import('./monsters/monsters.module').then(m => m.MonstersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}