import { Component, OnInit} from '@angular/core';
import { Spell } from '../spell.model';
import { SpellService } from '../spell.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {
  spell: Spell;
  id: number;

  constructor(private spellService: SpellService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    debugger;
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.spell = this.spellService.getSpell(this.id);
      }
    )
  }

}
