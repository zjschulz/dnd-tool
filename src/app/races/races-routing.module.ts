import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './races.component';

const routes: Routes = [
    { 
        path: '',
        component: RacesComponent
        // children: [
        // { path: '', component: RaceStartComponent },
        // { path: ':id', component: RaceDetailComponent }
    // ] 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RacesRoutingModule {}