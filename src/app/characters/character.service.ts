import { Character } from './character.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
    characterSelected = new EventEmitter<Character>();

    private characters: Character[] = [
        new Character(
            1,
            "Zafnir",
            "Dwarf",
            "Cleric",
            "Forge Domain",
            "https://vignette.wikia.nocookie.net/emerald-isles/images/5/5b/Dwarf_Cleric.jpg/revision/latest?cb=20181011173034"
        ),
        new Character(
            2,
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

    getCharacter(index: number) {
        return this.characters[index];
    }
}