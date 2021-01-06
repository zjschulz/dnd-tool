import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Race } from '../race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {
  race: Race;
  id: number;
  data: any;
  traits: [];
  bonuses: [];

  constructor(private raceService: RaceService,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
    .subscribe( 
      (params: Params) => {
        this.id = +params['id'];
        this.race = this.raceService.getRace(this.id);
        this.dataStorageService.fetchUrl(this.race.url)
        .subscribe((res: any) => {
          console.log(res);
          this.data = res;
          this.traits = res.traits;
          this.bonuses = res.ability_bonuses;
        });
      }
    )
  }

}
