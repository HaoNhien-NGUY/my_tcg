import EventManager from '../eventManager';

export default class Game extends EventManager{
    constructor (config) {
        super();

        this.up = config.up;
        this.down = config.down;
    }
}