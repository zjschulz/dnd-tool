import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpellService } from '../spell.service';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit, OnDestroy {
  spells: Spell[] = [];
  subscription: Subscription;
  filteredName: '';

  constructor(private spellService: SpellService) { }

  ngOnInit() {
    this.subscription = this.spellService.spellsChanged
      .subscribe(
        (spells: Spell[]) => {
          this.spells = spells;
        }
      );
    this.spells = this.spellService.getSpells();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
