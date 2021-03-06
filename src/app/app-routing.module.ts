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
    },
    {
        path: 'items',
        loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
    },
    { 
        path: 'dice',
        loadChildren: () => import('./dice/dice.module').then(m => m.DiceModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}