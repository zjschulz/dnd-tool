import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterService } from '../characters/character.service';
import { Character } from '../characters/character.model';
import { map, tap } from 'rxjs/operators';
import { SpellService } from '../spells/spell.service';
import { RaceService } from '../races/race.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private characterService: CharacterService,
                private spellService: SpellService,
                private raceService: RaceService) {}     
 
    storeCharacters() { 
        const characters = this.characterService.getCharacters();
        this.http
            .put('https://dnd-tool-821f3.firebaseio.com/characters.json', characters)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchCharacters() {
        return this.http
            .get<Character[]>('https://dnd-tool-821f3.firebaseio.com/characters.json')
            .pipe(
                map(characters => {
                    return characters.map(character => {
                        return {...character};
                    });
                }),
                tap(characters => {
                    this.characterService.setCharacters(characters);
                })
            )
    }

    fetchSpells() {
        return this.http
        .get('https://www.dnd5eapi.co/api/spells')
        .pipe(
            map((spells: any) => {
                return spells.results.map(spell => {
                    return {...spell};
                });
            }),
            tap(spells => {
                this.spellService.setSpells(spells); 
            }) 
        );
    }

    fetchSpell(url) {
        return this.http
        .get('https://www.dnd5eapi.co' + url)
    }

    fetchRaces() {
        return this.http
        .get('https://www.dnd5eapi.co/api/races')
        .pipe(
            map((races: any) => {
                console.log(races);
                return races.results.map(race => {
                    return {...race};
                });
            }),
            tap(races => {
                this.raceService.setRaces(races); 
            }) 
        );
    }

    fetchRace(url) {
        return this.http
        .get('https://www.dnd5eapi.co' + url)
    }

}