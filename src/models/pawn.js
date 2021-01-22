import EventManager from '../eventManager';

export default class Pawn extends EventManager {
    constructor(life, strength, def) {
        super();

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

    attack(target) {
        target.receiveAttack(this);

        return true;
    }

    receiveAttack(opponent, strikeBack = false) {
        if (strikeBack) {
            this.life -= opponent.def;
        } else {
            this.life -= opponent.getStrength();
            opponent.receiveAttack(this, true);
        }

        return true;
    }
}