import { Component, OnInit} from '@angular/core';
import { Spell } from '../spell.model';
import { SpellService } from '../spell.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {
  spell: Spell;
  index: string;
  data: any;
  components: [];
  desc: [];
  classes: [];

  constructor(private spellService: SpellService,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
    .subscribe( 
      (params: Params) => {
        debugger
        // this.id = +params['id'];
        this.index = params['index']
        // this.spell = this.spellService.getSpell(this.id);
        this.spell = this.spellService.getSpell(this.index)[0];
        this.dataStorageService.fetchUrl(this.spell.url)
        .subscribe((res: any) => {
          console.log(res); 
          this.data = res;
          this.desc = res.desc;
          this.components = res.components;
          this.classes = res.classes;
        });
      }
    )
  }

}
