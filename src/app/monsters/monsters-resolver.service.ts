import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Monster } from './monster.model';
import { MonsterService } from './monster.service';

@Injectable({providedIn: 'root'})
export class MonstersResolverService implements Resolve<Monster[]> {

    constructor(private monstersService: MonsterService,
                private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const monsters = this.monstersService.getMonsters();

        if (monsters.length === 0) {
            return this.dataStorageService.fetchMonsters();
        }
        else {
            return monsters;
        }
    }

}
