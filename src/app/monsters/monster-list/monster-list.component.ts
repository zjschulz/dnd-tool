import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit, OnDestroy {
  monsters: Monster[] = [];
  subscription: Subscription;

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.subscription = this.monsterService.monstersChanged
      .subscribe(
        (monsters: Monster[]) => {
          this.monsters = monsters;
        }
      );
    this.monsters = this.monsterService.getMonsters();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
