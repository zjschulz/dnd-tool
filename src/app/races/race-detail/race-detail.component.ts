import { Component, OnInit } from '@angular/core';
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
  proficiencies: [];
  hasProf = true;
  hasTrait = true;
  proficiency_options: [];

  constructor(private raceService: RaceService,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

// Need to populate html with sections that have no data ie proficiencies/traits

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
          if (res.traits == []) {
            this.hasTrait = false;
          }
          this.bonuses = res.ability_bonuses;
          this.proficiencies = res.starting_proficiencies;
          if (res.starting_proficiencies == []) {
            this.hasProf = false;
          }
          if (res.starting_proficiency_options) {
            this.proficiency_options = res.starting_proficiency_options.from;
          }
        });
      }
    )
  }

}
