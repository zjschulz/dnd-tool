import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Monster } from './monster.model';

@Injectable()
export class MonsterService {
    monstersChanged = new Subject<Monster[]>();

    private monsters: Monster[] = [];
    private data: any;

    constructor() {}

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setMonsters(monsters: Monster[]) {
        this.monsters = monsters;
        this.monstersChanged.next(this.monsters.slice());
    }
    
    getMonsters() {
        return this.monsters.slice();
    }

    // getMonster(index: number) {
    //     return this.monsters[index];
    // }

    getMonster(index: string) {
        return this.monsters.filter(monster => {return monster.index === index});
    }

}