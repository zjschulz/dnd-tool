import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RacesComponent } from './races.component';
import { RacesRoutingModule } from './races-routing.module';
import { RaceStartComponent } from './race-start/race-start.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceItemComponent } from './race-list/race-item/race-item.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

@NgModule({
    declarations: [
        RacesComponent,
        RaceStartComponent,
        RaceListComponent,
        RaceDetailComponent,
        RaceItemComponent
    ],
    imports: [
        RouterModule,
        RacesRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        RacesComponent,
        RaceStartComponent,
        RaceListComponent,
        RaceDetailComponent,
        RaceItemComponent
    ]
})
export class RacesModule {}