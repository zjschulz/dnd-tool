import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MonstersRoutingModule } from './monsters-routing.module';
import { MonstersComponent } from './monsters.component';


@NgModule({
    declarations: [
        MonstersComponent
        // RaceStartComponent,
        // RaceListComponent,
        // RaceDetailComponent,
        // RaceItemComponent
    ],
    imports: [
        RouterModule,
        MonstersRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        MonstersComponent
        // RaceStartComponent,
        // RaceListComponent,
        // RaceDetailComponent,
        // RaceItemComponent
    ]
})
export class MonstersModule {}