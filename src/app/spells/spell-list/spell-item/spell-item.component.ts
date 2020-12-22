import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../../spell.model';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.css']
})
export class SpellItemComponent implements OnInit {
  @Input() spell: Spell;
  @Input() index: number;

  ngOnInit() {
  }

}
