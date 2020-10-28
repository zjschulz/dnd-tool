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
            "Forge Domain"
        )
    ]

    constructor() {}

    getCharacters() {
        return this.characters.slice();
    }
}