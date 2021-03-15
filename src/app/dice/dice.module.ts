import { NgModule } from '@angular/core';
import { DiceComponent } from './dice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DiceComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        DiceComponent
    ]
})
export class DiceModule {}