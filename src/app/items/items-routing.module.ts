import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemStartComponent } from './item-start/item-start.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
    {
        path: '',
        component: ItemsComponent,
        children: [
            { path: '', component: ItemStartComponent },
            { path: ':index', component: ItemDetailComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRoutingModule {}