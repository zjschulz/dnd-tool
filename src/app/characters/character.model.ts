export class Character {
    public name: string;
    public race: string;
    public job: string;
    public subjob: string;
    public imagePath: string;
    
    constructor(name: string, race: string, job: string, subjob: string, imagePath: string) {
        this.name = name;
        this.race = race;
        this.job = job;
        this.subjob = subjob;
        this.imagePath = imagePath;
    }
    
}