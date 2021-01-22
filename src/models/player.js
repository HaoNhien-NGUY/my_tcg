import ModelFactory from './factory';
import Pawn from './pawn';

export default class Player extends Pawn {

    constructor(config) {
        super(config.life, config.strength, config.def);

        this.type = config.type;
        this.deck = ModelFactory.get('deck');
        this.cemetary = ModelFactory.get('cemetary');
        this.board = ModelFactory.get('board');
        this.hand = ModelFactory.get('hand');
    }

    draw () {
        return this.deck.draw();
    }

    shuffle (type = 'deck') {
        return this[type].shuffle();
    }

    playCard (pos) {
        const card = this.hand.removeCard(pos);

        return this.board.addCard(card);
    }

    discard (pos) {
        const card = this.hand.removeCard(pos);

        return this.cemetary.insertAt(card);
    }

    attack (pos, target) {
        this.board[pos].attack(target);
    }

}