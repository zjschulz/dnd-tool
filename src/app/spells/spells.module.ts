import { NgModule } from '@angular/core';
import { SpellsComponent } from './spells.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellItemComponent } from './spell-list/spell-item/spell-item.component';
import { SpellStartComponent } from './spell-start/spell-start.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpellsRoutingModule } from './spells-routing.module';

@NgModule({
    declarations: [
        SpellsComponent,
        SpellStartComponent,
        SpellListComponent,
        SpellItemComponent
    ],
    imports: [
        RouterModule,
        SpellsRoutingModule,
        SharedModule
    ],
    exports: [
        SpellsComponent,
        SpellStartComponent,
        SpellListComponent,
        SpellItemComponent
    ]
})
export class SpellsModule {}