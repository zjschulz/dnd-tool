import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Spell } from './spell.model';
import { SpellService } from './spell.service';

@Injectable({providedIn: 'root'})
export class SpellsResolverService implements Resolve<Spell[]> {

    constructor(private spellsService: SpellService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const spells = this.spellsService.getSpells();

        if (spells.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return spells;
        }
    }

}
