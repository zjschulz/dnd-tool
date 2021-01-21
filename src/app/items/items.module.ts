import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemStartComponent } from './item-start/item-start.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemItemComponent } from './item-list/item-item/item-item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';

@NgModule({
    declarations: [
        ItemsComponent,
        ItemStartComponent,
        ItemListComponent,
        ItemDetailComponent,
        ItemItemComponent
    ],
    imports: [
        RouterModule,
        ItemsRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ItemsComponent,
        ItemStartComponent,
        ItemListComponent,
        ItemDetailComponent,
        ItemItemComponent
    ]
})
export class ItemsModule {}