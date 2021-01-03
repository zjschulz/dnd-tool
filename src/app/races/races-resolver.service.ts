import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RaceService } from './race.service';
import { Race } from './race.model';

@Injectable({providedIn: 'root'})
export class RacesResolverService implements Resolve<Race[]> {

    constructor(private racesService: RaceService,
                private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const races = this.racesService.getRaces();

        if (races.length === 0) {
            return this.dataStorageService.fetchRaces();
        }
        else {
            return races;
        }
    }

}
