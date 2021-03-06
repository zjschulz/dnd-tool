import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Spell } from './spell.model';

@Injectable()
export class SpellService {
    spellsChanged = new Subject<Spell[]>();

    private spells: Spell[] = [];
    private data: any;

    constructor() {}

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setSpells(spells: Spell[]) {
        this.spells = spells;
        this.spellsChanged.next(this.spells.slice());
    }
    
    getSpells() {
        return this.spells.slice();
    }

    // getSpell(index: number) {
    //     return this.spells[index];
    // }

    // using index property of spells
    getSpell(index: string) {
        return this.spells.filter(spell => {return spell.index === index});
    }

}