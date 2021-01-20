import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MonstersRoutingModule } from './monsters-routing.module';
import { MonstersComponent } from './monsters.component';
import { MonsterStartComponent } from './monster-start/monster-start.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MonsterItemComponent } from './monster-list/monster-item/monster-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        MonstersComponent,
        MonsterStartComponent,
        MonsterListComponent,
        MonsterDetailComponent,
        MonsterItemComponent
    ],
    imports: [
        RouterModule,
        MonstersRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        MonstersComponent,
        MonsterStartComponent,
        MonsterListComponent,
        MonsterDetailComponent,
        MonsterItemComponent
    ]
})
export class MonstersModule {}