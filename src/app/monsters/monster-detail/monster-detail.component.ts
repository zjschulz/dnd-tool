import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {
  monster: Monster;
  index: string;
  data: any;
  speed: any;
  senses: any;
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
  proficiencies: [];
  

  constructor(private monsterService: MonsterService,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
    .subscribe( 
      (params: Params) => {
        // this.id = +params['id'];
        this.index = params['index'];
        // this.monster = this.monsterService.getMonster(this.id);
        this.monster = this.monsterService.getMonster(this.index)[0];
        this.dataStorageService.fetchUrl(this.monster.url)
        .subscribe((res: any) => {
          console.log(res);
          this.data = res;
          this.speed = res.speed;
          this.STR = Math.floor((res.strength-10)/2);
          this.DEX = Math.floor((res.dexterity-10)/2);
          this.CON = Math.floor((res.constitution-10)/2);
          this.INT = Math.floor((res.intelligence-10)/2);
          this.WIS = Math.floor((res.wisdom-10)/2);
          this.CHA = Math.floor((res.charisma-10)/2);
          this.senses = res.senses;
          this.proficiencies = res.proficiencies;
        });
      }
    )
  }

}
