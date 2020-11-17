import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterService } from '../characters/character.service';
import { Character } from '../characters/character.model';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient,
                private characterService: CharacterService) {}     

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
                tap(characters => {
                    this.characterService.setCharacters(characters)
                })
            )

    }
}