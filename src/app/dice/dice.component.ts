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
    let rollD4 = '';
    let rollD6 = '';
    let rollD8 = '';
    let rollD10 = '';
    let rollD12 = '';
    let rollD20 = '';
    let rollD100 = '';

    this.diceForm = new FormGroup({
      'd4': new FormControl(rollD4, Validators.required),
      'd6': new FormControl(rollD6, Validators.required),
      'd8': new FormControl(rollD8, Validators.required),
      'd10': new FormControl(rollD10, Validators.required),
      'd12': new FormControl(rollD12, Validators.required),
      'd20': new FormControl(rollD20, Validators.required),
      'd100': new FormControl(rollD100, Validators.required)
    });

  }

  rollDice(max) {
    return 1 + Math.floor(Math.random() * max)
  }

  onSubmit(){
    this.results = this.rollDice(4) + this.rollDice(6) + this.rollDice(8) + this.rollDice(10) + this.rollDice(12) + this.rollDice(20) + this.rollDice(100)
    console.log(this.results)
  }

}
