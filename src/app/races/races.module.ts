import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RacesComponent } from './races.component';
import { RacesRoutingModule } from './races-routing.module';

@NgModule({
    declarations: [
        RacesComponent
        // RaceStartComponent,
        // RaceListComponent,
        // RaceDetailComponent,
        // RaceItemComponent
    ],
    imports: [
        RouterModule,
        RacesRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        RacesComponent
        // RaceStartComponent,
        // RaceListComponent,
        // RaceDetailComponent,
        // RaceItemComponent
    ]
})
export class RacesModule {}