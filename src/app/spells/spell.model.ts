export class Spell {

    constructor(
        public index: string,
        public name: string,
        public desc: [],
        public higher_level: [],
        public range: string,
        public components: [],
        public material: string,
        public ritual: boolean,
        public duration: string,
        public concentration: boolean,
        public casting_time: string,
        public level: number,
        public attack_type: string,
        public damage: object,
        public school: object,
        public classes: object,
        public subclasses: [],
        public url: string) {}
}