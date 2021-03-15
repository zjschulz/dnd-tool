import { NgModule } from '@angular/core';
import { DiceComponent } from './dice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DiceRoutingModule } from './dice-routing.module';

@NgModule({
    declarations: [
        DiceComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        DiceRoutingModule,
        SharedModule
    ],
    exports: [
        DiceComponent
    ]
})
export class DiceModule {}