import EventManager from '../eventManager';

export default class Pawn extends EventManager {
    constructor(life, strength, def) {
        this.life = life;
        this.strength = strength;
        this.def = def;
    }

    getLife() {
        return this.life;
    }

    getStrength() {
        return this.strength;
    }

    getDef() {
        return this.def;
    }
}