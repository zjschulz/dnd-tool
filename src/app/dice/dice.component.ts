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
  rolling = false;
  stringresults: string

  constructor() { }

  ngOnInit() {
    this.initForm();
    this.rolling = false;
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

  // rollDice(max, times) {
  //   let result = 0
  //   for (let i=0; i < times; i++) {
  //     result += this.rollDie(max)
  //   }
  //   return result
  // }

  rollDiceA(max, times) {
    let result = []
    for (let i=0; i < times; i++) {
      result.push(this.rollDie(max))
    }
    return result
  }

  rollDie(max) {
    return 1 + Math.floor(Math.random() * max)
  }

  rollChange() {
    this.rolling = !this.rolling
    this.playAudio();
  }

  evaluateExpression(str) {
    let total = 0;
    str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (str.length) {
       total += parseFloat(str.shift());
    };
    return total;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/sounds/diceroll.mp3";
    audio.load();
    audio.play();
  }

  onSubmit(){
    var self = this;
    this.rollChange();

    let dieArray = ["d4", "d6", "d8", "d10", "d12", "d20"]
    // Object.keys(this.diceForm.value) === dieArray
    let cheatResults = [];
    for(let i=0; i < dieArray.length; i++){
      if(this.diceForm.value[dieArray[i]] > 0){
        cheatResults.push(this.rollDiceA(parseInt(dieArray[i].match(/(\d+)/)[0]), this.diceForm.value[dieArray[i]]))
      }
    }
    this.stringresults = cheatResults.map(x => "(" + x.join(" + ") + ")").join(" + ")
    this.results = this.evaluateExpression(self.stringresults)

    setTimeout(function(){ self.rolling = false }, 1000);
  }

}
