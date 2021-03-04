import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  results: number;

  constructor() { }

  ngOnInit(): void {
  }

  rollDice(max) {
    return 1 + Math.floor(Math.random() * max)
  }

  onSubmit(){
    this.results = this.rollDice(4) + this.rollDice(6) + this.rollDice(8) + this.rollDice(10) + this.rollDice(12) + this.rollDice(20) + this.rollDice(100)
    console.log(this.results)
  }

}
