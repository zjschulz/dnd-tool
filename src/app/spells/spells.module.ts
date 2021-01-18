import { NgModule } from '@angular/core';
import { SpellsComponent } from './spells.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellItemComponent } from './spell-list/spell-item/spell-item.component';
import { SpellStartComponent } from './spell-start/spell-start.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpellsRoutingModule } from './spells-routing.module';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SpellsComponent,
        SpellStartComponent,
        SpellListComponent,
        SpellDetailComponent,
        SpellItemComponent,
        FilterPipe
    ],
    imports: [
        RouterModule,
        SpellsRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        SpellsComponent,
        SpellStartComponent,
        SpellListComponent,
        SpellDetailComponent,
        SpellItemComponent
    ]
})
export class SpellsModule {}