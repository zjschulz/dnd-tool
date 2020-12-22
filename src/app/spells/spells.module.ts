import { NgModule } from '@angular/core';
import { SpellsComponent } from './spells.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellItemComponent } from './spell-list/spell-item/spell-item.component';
import { SpellStartComponent } from './spell-start/spell-start.component';

@NgModule({
    declarations: [
        SpellsComponent,
        SpellStartComponent,
        SpellListComponent,
        SpellItemComponent
    ],
    imports: [],
    exports: [
        SpellsComponent,
        SpellStartComponent,
        SpellListComponent,
        SpellItemComponent
    ]
})
export class SpellsModule {}