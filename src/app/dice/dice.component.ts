import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  results: number;
  diceForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let rollD4 = 0;
    let rollD6 = 0;
    let rollD8 = 0;
    let rollD10 = 0;
    let rollD12 = 0;
    let rollD20 = 0;

    this.diceForm = new FormGroup({
      'd4': new FormControl(rollD4, Validators.required),
      'd6': new FormControl(rollD6, Validators.required),
      'd8': new FormControl(rollD8, Validators.required),
      'd10': new FormControl(rollD10, Validators.required),
      'd12': new FormControl(rollD12, Validators.required),
      'd20': new FormControl(rollD20, Validators.required)
    });

  }

  rollDice(max) {
    return 1 + Math.floor(Math.random() * max)
  }

  onSubmit(){
    debugger;
    this.results = this.diceForm.value.d4*this.rollDice(4) + this.diceForm.value.d6*this.rollDice(6) + this.diceForm.value.d8*this.rollDice(8) + this.diceForm.value.d10*this.rollDice(10) + this.diceForm.value.d12*this.rollDice(12) + this.diceForm.value.d20*this.rollDice(20)
    console.log(this.results)
  }

}
