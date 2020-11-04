export class Character {
    public id: number;
    public name: string;
    public race: string;
    public job: string;
    public subjob: string;
    public imagePath: string;
    
    constructor(id: number, name: string, race: string, job: string, subjob: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.job = job;
        this.subjob = subjob;
        this.imagePath = imagePath;
    }
    
}