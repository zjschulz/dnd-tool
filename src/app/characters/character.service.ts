import { Character } from './character.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
    characterSelected = new EventEmitter<Character>();

    private characters: Character[] = [
        new Character(
            "Kalm D'Levistus",
            "Tiefling",
            "Cleric",
            "Forge Domain",
            "https://pbs.twimg.com/media/D2qurTfUkAIohc7?format=jpg&name=900x900"
        ),
        new Character(
            "Evel",
            "Drow",
            "Fighter",
            "Eldritch Knight",
            "https://i.redd.it/k1e9e6x5za401.jpg"
        )
    ]

    constructor() {}

    getCharacters() {
        return this.characters.slice();
    }
}