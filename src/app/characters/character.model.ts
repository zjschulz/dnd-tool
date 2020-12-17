import { Item } from '../shared/item.model';

export class Character {
    public name: string;
    public race: string;
    public job: string;
    public subjob: string;
    public imagePath: string;
    public items: Item[];

    constructor(name: string, race: string, job: string, subjob: string, imagePath: string, items: Item[]) {
        this.name = name;
        this.race = race;
        this.job = job;
        this.subjob = subjob;
        this.imagePath = imagePath;
        this.items = items;
    }
    
}