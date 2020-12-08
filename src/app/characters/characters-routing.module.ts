import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { AuthGuard } from '../auth/auth.guard';
import { CharacterStartComponent } from './character-start/character-start.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
    { 
        path: 'characters',
        component: CharactersComponent,
        canActivate: [AuthGuard],
        children: [
        { path: '', component: CharacterStartComponent },
        { path: 'new', component: CharacterEditComponent },
        { path: ':id', component: CharacterDetailComponent },
        { path: ':id/edit', component: CharacterEditComponent }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule {}