import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../../monster.model';

@Component({
  selector: 'app-race-item',
  templateUrl: './race-item.component.html',
  styleUrls: ['./race-item.component.css']
})
export class MonsterItemComponent implements OnInit {
  @Input() monster: Monster;
  @Input() index: number;

  ngOnInit() {
  }

}
