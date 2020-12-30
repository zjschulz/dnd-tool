import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterService } from '../characters/character.service';
import { Character } from '../characters/character.model';
import { map, tap } from 'rxjs/operators';
import { SpellService } from '../spells/spell.service';
import { Spell } from '../spells/spell.model';
import { SpellDetailComponent } from '../spells/spell-detail/spell-detail.component';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private characterService: CharacterService,
                private spellService: SpellService) {}     
 
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
            map(spells => {
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
}