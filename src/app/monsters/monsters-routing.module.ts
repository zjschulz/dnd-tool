import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from './monsters.component';

const routes: Routes = [
    { 
        path: '',
        component: MonstersComponent
    //     children: [
    //     { path: '', component: MonsterStartComponent },
    //     { path: ':id', component: MonsterDetailComponent }
    // ] 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MonstersRoutingModule {}