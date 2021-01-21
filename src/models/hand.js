export default class Hand {
    constructor(config) {
        this.cards = config.cards;
        this.limit = config.limit || 7;
    }

    addCard(card) {
        if (this.cards.length >= this.limit) {
            return false;
        }

        this.cards.push(card);

        return true;
    }

    removeCard(pos) {
        if ((this.cards.length - 1) < pos) {
            return false;
        }

        return this.cards.splice(pos, 1)[0];
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}