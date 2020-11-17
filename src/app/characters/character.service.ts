import { Character } from './character.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CharacterService {
    charactersChanged = new Subject<Character[]>();

    private characters: Character[] = []

    // private characters: Character[] = [
    //     new Character(
    //         "Zafnir",
    //         "Dwarf",
    //         "Cleric",
    //         "Forge Domain",
    //         "https://vignette.wikia.nocookie.net/emerald-isles/images/5/5b/Dwarf_Cleric.jpg/revision/latest?cb=20181011173034"
    //     ),
    //     new Character(
    //         "Evel",
    //         "Drow",
    //         "Fighter",
    //         "Eldritch Knight",
    //         "https://i.redd.it/k1e9e6x5za401.jpg"
    //     )
    // ]

    constructor() {}

    getCharacters() {
        return this.characters.slice();
    }

    getCharacter(index: number) {
        return this.characters[index];
    }

    addCharacter(character: Character) {
        this.characters.push(character);
        this.charactersChanged.next(this.characters.slice());
    }

    updateCharacter(index: number, newCharacter: Character) {
        this.characters[index] = newCharacter;
        this.charactersChanged.next(this.characters.slice());
    }

    deleteCharacter(index: number) {
        this.characters.splice(index, 1);
        this.charactersChanged.next(this.characters.slice());
    }

    setCharacter(characters: Character[]) {
        this.characters = characters;
        this.charactersChanged.next(this.characters.slice());
    }

}