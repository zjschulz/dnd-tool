import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Character } from './character.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CharacterService } from './character.service';

@Injectable({providedIn: 'root'})
export class CharactersResolverService implements Resolve<Character[]> {

    constructor(private dataStorageService: DataStorageService,
                private charactersService: CharacterService) {}

        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            const characters = this.charactersService.getCharacters();

        if (characters.length === 0) {
            return this.dataStorageService.fetchCharacters();
        }
        else {
            return characters;
        }
        }

}