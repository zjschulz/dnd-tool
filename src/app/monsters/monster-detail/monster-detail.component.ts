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
  id: number;
  data: any;
  speed: any;

  constructor(private monsterService: MonsterService,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
    .subscribe( 
      (params: Params) => {
        this.id = +params['id'];
        this.monster = this.monsterService.getMonster(this.id);
        this.dataStorageService.fetchUrl(this.monster.url)
        .subscribe((res: any) => {
          console.log(res);
          this.data = res;
          this.speed = res.speed;
        });
      }
    )
  }

}
