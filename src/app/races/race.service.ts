import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Race } from './race.model';

@Injectable()
export class RaceService {
    racesChanged = new Subject<Race[]>();

    private races: Race[] = [];
    private data: any;

    constructor() {}

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setRaces(races: Race[]) {
        this.races = races;
        this.racesChanged.next(this.races.slice());
    }
    
    getRaces() {
        return this.races.slice();
    }

    getRace(index: number) {
        return this.races[index];
    }

    

}