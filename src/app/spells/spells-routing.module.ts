import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsComponent } from './spells.component';
import { SpellStartComponent } from './spell-start/spell-start.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';

const routes: Routes = [
    { 
        path: '',
        component: SpellsComponent,
        children: [
        { path: '', component: SpellStartComponent },
        { path: ':id', component: SpellDetailComponent }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpellsRoutingModule {}